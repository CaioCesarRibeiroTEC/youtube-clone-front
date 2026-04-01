import React from "react";
import * as S from "./styles";

interface Props {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  channelImage: string;
  channelName: string;
  details: string;
  isExpanded?: boolean; // Prop para saber se o vídeo foi clicado e expandido
}

function VideoComponent({
  videoId,
  thumbnailUrl, 
  title,
  channelImage,
  channelName,
  details,
  isExpanded, // Recebe a prop
}: Props) {
  return (
    <S.Container>
      <S.ImageContainer>
        {isExpanded ? (
          // SE CLICOU: Carrega o Iframe pesado e dá play sozinho (autoplay=1)
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // SE ESTÁ PEQUENO (Padrão): Mostra a Thumbnail (capa) com o ícone de Play!
          <React.Fragment>
            <S.Thumbnail src={thumbnailUrl} alt={title} />
            
            {/* O ÍCONE DE PLAY "CAXUMBA" APARECE AQUI SÓ QUANDO ESTÁ PEQUENO */}
            <S.PlayIconContainer>
              <S.PlayTriangle />
            </S.PlayIconContainer>
          </React.Fragment>
        )}
      </S.ImageContainer>

      <S.TextContainer>
        <S.ChannelImage>{channelImage}</S.ChannelImage>
        <S.TextDetailsContainer>
          <S.Title>{title}</S.Title>
          <S.ChannelName>{channelName}</S.ChannelName>
          <S.Details>{details}</S.Details>
        </S.TextDetailsContainer>
      </S.TextContainer>
    </S.Container>
  );
}

export default VideoComponent;