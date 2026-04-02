import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; 
  border-radius: 12px;
  overflow: hidden;
  background-color: #202020;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* ----------------------------------------------------------- */
/* ESTILOS PARA O ÍCONE DE PLAY NO MEIO DA THUMBNAIL */
/* ----------------------------------------------------------- */

export const PlayIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px; 
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7); 
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  z-index: 5; 
  transition: background-color 0.2s, transform 0.2s;

  cursor: pointer; 
  

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -50%) scale(1.1); 
  }
`;

export const PlayTriangle = styled.div`

  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid rgba(0,0,0,0.7); 
  margin-left: 8px; 
`;

/* ----------------------------------------------------------- */




export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 12px;
  padding-right: 24px;
`;

export const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ff4e45; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  flex-shrink: 0;
`;

export const TextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #0f0f0f; 
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChannelName = styled.span`
  font-size: 14px;
  color: #606060; 
`;

export const Details = styled.span`
  font-size: 14px;
  color: #606060;
`;