import React from "react";
import * as S from "./styles";

interface Props {
  videoId: string;
  thumbnailUrl: string;
  title: string;
  channelImage: string;
  channelName: string;
  details: string;
  isExpanded?: boolean;
}

function VideoComponent({
  videoId,
  thumbnailUrl, 
  title,
  channelImage,
  channelName,
  details,
  isExpanded,
}: Props) {
  return (
    <S.Container>
      <S.ImageContainer>
        {isExpanded ? (
          
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
         
          <React.Fragment>
            <S.Thumbnail src={thumbnailUrl} alt={title} />
            
            
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