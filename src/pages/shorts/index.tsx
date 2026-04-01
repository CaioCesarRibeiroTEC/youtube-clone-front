import { useEffect, useState } from "react";
import { youtubeApi } from "../../api";
import * as S from "./styles";

function Shorts() {
    const [shorts, setShorts] = useState<any[]>([]);

    useEffect(() => {
        async function loadShorts() {
            try {
                const response = await youtubeApi.get('/search', {
                    params: {
                        part: 'snippet',
                        q: '#shorts', // A palavra-chave secreta
                        type: 'video',
                        videoDuration: 'short', // Força a trazer apenas vídeos curtos
                        maxResults: 15,
                        regionCode: 'BR',
                        key: import.meta.env.VITE_YOUTUBE_API_KEY
                    }
                });

                const formattedShorts = response.data.items.map((item: any) => ({
                    ...item,
                    id: typeof item.id === 'object' ? item.id.videoId : item.id
                }));

                setShorts(formattedShorts);
            } catch (error) {
                console.error("Erro ao carregar Shorts", error);
            }
        }

        loadShorts();
    }, []);

    return (
        <S.Container>
            {shorts.map((short) => (
                <S.ShortCard key={short.id}>
                    <S.VideoContainer>
                        
                        {/* Parâmetros na URL para esconder os controlos e repetir o vídeo */}
                        <iframe
                            loading="lazy" /* A MÁGICA ESTÁ AQUI */
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${short.id}?autoplay=0&controls=0&modestbranding=1&rel=0&loop=1&playlist=${short.id}`}
                            title={short.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        {/* Menu Lateral Direito (Gosto, Comentários, Partilhar) */}
                        <S.ActionMenu>
                            <S.ActionButton>
                                <span className="icon">👍</span>
                                <span>200 mil</span>
                            </S.ActionButton>
                            <S.ActionButton>
                                <span className="icon">👎</span>
                                <span>Não gostei</span>
                            </S.ActionButton>
                            <S.ActionButton>
                                <span className="icon">💬</span>
                                <span>12 mil</span>
                            </S.ActionButton>
                            <S.ActionButton>
                                <span className="icon">↗️</span>
                                <span>Com...tilhar</span>
                            </S.ActionButton>
                        </S.ActionMenu>

                    </S.VideoContainer>
                </S.ShortCard>
            ))}
        </S.Container>
    );
}

export default Shorts;