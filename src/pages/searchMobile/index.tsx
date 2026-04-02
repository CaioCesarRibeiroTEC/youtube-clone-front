import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/contexts';
import { youtubeApi } from '../../api';
import MenuPesquisa from '../menuPesquisa';
import VideoComponent from '../videoComponent';
import VoltarIcon from '../../assets/header-icons/voltar.png';
import CloseIcon from '../../assets/header-icons/close.png';
import MicIcon from '../../assets/header-icons/microfone-gravador.png';
import moment from 'moment';
import * as S from './styles';

function SearchMobile() {
    const navigate = useNavigate();
    const { categoryId } = useContext(UserContext);
    
    const [localSearch, setLocalSearch] = useState('');
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        // Se estiver vazio, não gasta cota da API à toa
        if (!localSearch && categoryId === '0') {
            setVideos([]);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                const response = await youtubeApi.get('/search', {
                    params: {
                        part: 'snippet',
                        q: localSearch,
                        type: 'video',
                        regionCode: 'BR',
                        maxResults: 20,
                        videoCategoryId: categoryId !== '0' ? categoryId : undefined,
                        key: import.meta.env.VITE_YOUTUBE_API_KEY
                    }
                });

                const formattedVideos = response.data.items.map((item: any) => ({
                    ...item,
                    id: typeof item.id === 'object' ? item.id.videoId : item.id,
                }));
                setVideos(formattedVideos);
            } catch (error) {
                console.error(error);
            }
        }, 200); // Timeout de 200ms para não fazer uma requisição a CADA letra que o usuário digita

        return () => clearTimeout(timer);
    }, [localSearch, categoryId]);

    const getPublishedTime = (publishedAt: string) => {
        if (!publishedAt) return '';
        return `há ${moment().diff(moment(publishedAt), 'days')} dias`;
    };

    return (
        <S.Container>
            {/* O Header customizado apenas para essa tela Mobile */}
            <S.MobileHeader>
                <S.BackButton onClick={() => navigate('/')}>
                    <img src={VoltarIcon} alt="Voltar" />
                </S.BackButton>

                <S.InputContainer>
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="Pesquisar no YouTube" 
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                    />
                    {localSearch.length > 0 && (
                        <S.ClearButton onClick={() => setLocalSearch('')}>
                            <img src={CloseIcon} alt="Limpar" />
                        </S.ClearButton>
                    )}
                </S.InputContainer>

                <S.MicButton>
                    <img src={MicIcon} alt="Microfone" />
                </S.MicButton>
            </S.MobileHeader>

            {/* Menu de Pesquisa */}
            <div style={{ marginTop: '56px' }}>
                <MenuPesquisa />
            </div>

            {/* Resultados */}
            <S.ResultsContainer>
                {videos.map((video) => (
                    <VideoComponent
                        key={video.id}
                        videoId={video.id}
                        thumbnailUrl={video.snippet?.thumbnails?.high?.url || ''}
                        title={video.snippet?.title || ''}
                        channelImage={video.snippet?.channelTitle ? video.snippet.channelTitle.charAt(0).toUpperCase() : 'C'} 
                        channelName={video.snippet?.channelTitle || ''}
                        details={getPublishedTime(video.snippet?.publishedAt)}
                    />
                ))}
            </S.ResultsContainer>
        </S.Container>
    );
}

export default SearchMobile;