import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/contexts";
import { youtubeApi } from "../../api"; 
import VideoComponent from "../../pages/videoComponent";
import MenuPesquisa from "../../pages/menuPesquisa";

import { HomeContainer, HomeContent, VideoWrapper, CloseButton } from "./home-styles";

interface Video {
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            high: { url: string };
            maxres?: { url: string }; 
        };
        channelTitle: string;
        publishedAt: string;
    };
    statistics: {
        viewCount?: string; 
    };
}

function Home() {
    const { openMenu, setOpenDropDown, categoryId, search } = useContext(UserContext);
    const [videos, setVideos] = useState<Video[]>([]);
    
    // --- LÓGICA DE EXPANSÃO DOS VÍDEOS ---
    const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

    const handleExpandVideo = (videoId: string) => {
        setExpandedVideo(videoId);
    };

    const handleCloseVideo = (e: React.MouseEvent) => {
        e.stopPropagation(); // Impede que o clique vaze para o container de baixo e reabra o vídeo
        setExpandedVideo(null); // Murcha o vídeo
    };
    // --------------------------------------

    useEffect(() => {
        async function loadVideos() {
            try {
                if (search) {
                    const response = await youtubeApi.get('/search', {
                        params: {
                            part: 'snippet',
                            q: search,
                            type: 'video',
                            regionCode: 'BR',
                            maxResults: 50,
                            key: import.meta.env.VITE_YOUTUBE_API_KEY
                        }
                    });

                    // Formatando o ID caso venha como objeto da rota /search
                    const formattedVideos = response.data.items.map((item: any) => ({
                        ...item,
                        id: typeof item.id === 'object' ? item.id.videoId : item.id,
                        statistics: { viewCount: '0' } 
                    }));
                    setVideos(formattedVideos);
                } 
                else {
                    const parametrosDaApi: any = {
                        part: 'snippet,statistics',
                        chart: 'mostPopular',
                        regionCode: 'BR', 
                        maxResults: 50,
                        key: import.meta.env.VITE_YOUTUBE_API_KEY
                    };

                    if (categoryId !== '0') {
                        parametrosDaApi.videoCategoryId = categoryId;
                    }

                    const response = await youtubeApi.get('/videos', {
                        params: parametrosDaApi
                    });

                    if (response.data && Array.isArray(response.data.items)) {
                        setVideos(response.data.items);
                    }
                }
            } catch (error) {
                console.error("Falha ao carregar vídeos:", error);
                setVideos([]); 
            }
        }

        loadVideos();
    }, [categoryId, search]);

    function formatViewCount(views: number): string {
        if (isNaN(views)) return 'N/A visualizações';
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(0)} mi de visualizações`;
        } else if (views >= 1000) {
            return `${(views / 1000).toFixed(0)} mil visualizações`;
        } else {
            return `${views} visualizações`;
        }
    }

    function getPublishedTime(publishedAt: string) {
        if (!publishedAt) return '';
        const publishedDate = new Date(publishedAt);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - publishedDate.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'hoje';
        if (diffDays === 1) return 'há 1 dia';
        if (diffDays > 365) return `há ${Math.floor(diffDays / 365)} anos`;
        if (diffDays > 30) return `há ${Math.floor(diffDays / 30)} meses`;
        return `há ${diffDays} dias`;
    }

   return (
       <HomeContainer>
           <MenuPesquisa />
           
           {/* Passamos o openMenu com o $ para não dar erro no console do React */}
           <HomeContent $openMenu={openMenu} onClick={() => setOpenDropDown(false)}>
               {videos.map((video) => (
                   
                   <VideoWrapper 
                       key={video.id} // Key obrigatória para a lista
                       $isExpanded={expandedVideo === video.id}
                       onClick={() => handleExpandVideo(video.id)}
                   >
                       {/* O botão X da caxumba só aparece no vídeo expandido */}
                       {expandedVideo === video.id && (
                           <CloseButton onClick={handleCloseVideo}>
                               X
                           </CloseButton>
                       )}

                       {/* MÁGICA DE PERFORMANCE: Mudando a key, o React recarrega apenas este Iframe, cortando o áudio! */}
                       <VideoComponent
                           videoId={video.id}
                           thumbnailUrl={video.snippet?.thumbnails?.maxres?.url || video.snippet?.thumbnails?.high?.url || ''}
                           title={video.snippet?.title || 'Vídeo sem título'}
                           channelImage={video.snippet?.channelTitle ? video.snippet.channelTitle.charAt(0).toUpperCase() : 'C'} 
                           channelName={video.snippet?.channelTitle || 'Canal Desconhecido'}
                           details={search ? getPublishedTime(video.snippet?.publishedAt) : `${formatViewCount(Number(video.statistics?.viewCount || 0))} • ${getPublishedTime(video.snippet?.publishedAt)}`}
                           
                           // ESSA LINHA É A MÁGICA NOVA:
                           isExpanded={expandedVideo === video.id}
                       />
                   </VideoWrapper>

               ))}
           </HomeContent>
       </HomeContainer>
   );
}

export default Home;