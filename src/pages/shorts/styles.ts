import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* Define a altura exata do ecrã visível, descontando o Header de 56px */
  height: calc(100vh - 56px); 
  overflow-y: scroll;
  
  /* Mantém o scroll magnético */
  scroll-snap-type: y mandatory; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1; /* Um cinza claro de fundo como o YouTube real */
  
  /* Oculta as barras de rolagem visualmente */
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;  scrollbar-width: none;  
`;

export const ShortCard = styled.div`
  width: 100%;
  height: calc(100vh - 56px); /* Ocupa todo o ecrã disponível */
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Ponto de paragem do scroll magnético */
  scroll-snap-align: start; 
  
  padding: 10px 0; /* Pequeno respiro em cima e embaixo */
  box-sizing: border-box;

  @media(max-width: 600px) {
    padding: 0; /* Cola nas bordas no telemóvel */
  }
`;

export const VideoContainer = styled.div`
  height: 98%; 
  aspect-ratio: 10/20; 
  width: auto; 
  max-width: calc((100vh - 66px) * (9 / 16)); 
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: #000; 
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  z-index: 1;

  /* Garante que o Iframe preenche todo o VideoContainer verticalmente */
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* No telemóvel, ele ocupa a tela inteira */
  @media(max-width: 600px) {
    height: 100%;
    aspect-ratio: 10/16; 
    width: 100%;
    border-radius: 0;
  }
`;

export const ShortInfo = styled.div`
  position: absolute;
  bottom: 50px; 
  left: 15px;
  right: 70px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #fff;
  z-index: 10;
  pointer-events: none; 
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);

  @media(max-width: 600px) {
    bottom: 100px;
  }
`;

export const ActionMenu = styled.div`
  position: absolute;
  bottom: 50px; 
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 10;

  @media(max-width: 600px) {
    bottom: 100px;
  }
`;


export const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: auto; 
`;

export const ChannelAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ff4e45;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #fff;
`;

export const ChannelName = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

export const SubscribeButton = styled.button`
  background-color: #fff;
  color: #0f0f0f;
  border: none;
  border-radius: 16px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
`;

export const ShortTitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;



export const ActionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #fff;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  .icon {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:not(.icon) {
    font-size: 12px;
    font-weight: 500;
  }
`;