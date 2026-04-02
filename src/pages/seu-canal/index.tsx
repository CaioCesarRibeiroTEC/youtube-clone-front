import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/contexts";
import VideoComponent from "../videoComponent"; // Ajuste o caminho se necessário
import * as S from "./styles";


function SeuCanal() {
    const navigate = useNavigate();
    // Extraímos a variável 'login' do contexto
    const { login, user, userVideos, token, getVideos } = useContext(UserContext);
    
    // Controle de qual aba está ativa no canal
    const [activeTab, setActiveTab] = useState('videos');

    // Recarrega os vídeos sempre que a página do canal for aberta
    useEffect(() => {
        if (user && token) {
            getVideos(token, user.id);
        }
    }, [user, token]);

    // Cria um "@" falso (ex: se o nome for "Caio Cesar", vira "@caiocesar")
    const userHandle = user?.name ? `@${user.name.toLowerCase().replace(/\s/g, '')}` : '@usuario';

    // Funções de formatação de tempo e visualizações
    const formatViews = (views: string | number | undefined) => {
        if (!views) return "0 visualizações";
        const num = Number(views);
        if (isNaN(num)) return String(views);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + ' mi de visualizações';
        if (num >= 1000) return (num / 1000).toFixed(1) + ' mil visualizações';
        if (num === 1) return '1 visualização';
        return num + ' visualizações';
    };

    const getTimeDifference = (publishedAt: string) => {
        if (!publishedAt) return "Data desconhecida";
        const publishedDate = new Date(publishedAt);
        const diffInDays = Math.floor((new Date().getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffInDays === 0) return "hoje";
        if (diffInDays === 1) return "ontem";
        if (diffInDays < 30) return `há ${diffInDays} dias`;
        const months = Math.floor(diffInDays / 30);
        if (months < 12) return months === 1 ? "há 1 mês" : `há ${months} meses`;
        const years = Math.floor(diffInDays / 365);
        return years === 1 ? "há 1 ano" : `há ${years} anos`;
    };

    // Função de extração do ID para não quebrar os iframes
    const getYouTubeID = (url: string) => {
        if (!url) return null;
        if (url.length === 11 && !url.includes('http')) return url;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videosList = Array.isArray(userVideos) ? userVideos : [];

    // Se o usuário não estiver logado, ele para aqui e mostra a mensagem
    if (!login) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: '#fff' }}>
                <h2 style={{ marginBottom: '10px' }}>Acesso Restrito</h2>
                <p style={{ fontSize: '18px', color: '#aaa' }}>
                    Esta página está disponível somente após fazer o login.
                </p>
            </div>
        );
    }

    return (
        <S.Container>
            {/* Banner Gigante do Canal */}
            <S.Banner />

            {/* Cabeçalho do Perfil */}
            <S.ProfileHeader>
                <S.ProfileAvatar>
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </S.ProfileAvatar>
                
                <S.ProfileInfo>
                    <S.ChannelName>{user?.name || 'Seu Canal'}</S.ChannelName>
                    <S.ChannelDetails>
                        <span>{userHandle}</span>
                        <span>•</span>
                        <span>0 inscritos</span>
                        <span>•</span>
                        <span>{videosList.length} vídeos</span>
                    </S.ChannelDetails>
                    <S.ChannelDescription>
                        Mais informações sobre este canal...
                    </S.ChannelDescription>
                    
                    {/* Botão de Redirecionamento */}
                    <S.ManageButton onClick={() => navigate('/seus-videos')}>
                        Gerenciar vídeos
                    </S.ManageButton>
                </S.ProfileInfo>
            </S.ProfileHeader>

            {/* Menu de Abas */}
            <S.TabsContainer>
                <S.Tab $active={activeTab === 'videos'} onClick={() => setActiveTab('videos')}>Vídeos</S.Tab>
                <S.Tab $active={activeTab === 'playlists'} onClick={() => setActiveTab('playlists')}>Playlists</S.Tab>
            </S.TabsContainer>

            {/* Conteúdo Dinâmico das Abas */}
            <S.TabContent>
                {activeTab === 'videos' && (
                    <S.VideosGrid>
                        {videosList.length > 0 ? (
                            videosList.map((video: any) => {
                                const extractedId = video.url ? getYouTubeID(video.url) : (video.video_id || video.id);
                                return (
                                    <VideoComponent
                                        key={video.id || Math.random()} 
                                        videoId={extractedId || ''}
                                        thumbnailUrl={video.thumbnail}
                                        title={video.title}
                                        channelImage={user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                        channelName={user?.name || "Canal"} 
                                        details={`${formatViews(video.views)} • ${getTimeDifference(video.publishedAt)}`}
                                    />
                                );
                            })
                        ) : (
                            <S.EmptyState>
                                <h3>Você ainda não possui nenhum vídeo.</h3>
                                <p>Faça o upload de um vídeo para que qualquer pessoa possa acessá-lo.</p>
                                <S.ManageButton onClick={() => navigate('/seus-videos')}>
                                    Criar vídeo
                                </S.ManageButton>
                            </S.EmptyState>
                        )}
                    </S.VideosGrid>
                )}

                {activeTab === 'inicio' && (
                    <S.EmptyState><h3>Customize o layout do Início do seu canal.</h3></S.EmptyState>
                )}

                {activeTab === 'playlists' && (
                    <S.EmptyState><h3>Este canal não tem playlists.</h3></S.EmptyState>
                )}
            </S.TabContent>
        </S.Container>
    );
}

export default SeuCanal;