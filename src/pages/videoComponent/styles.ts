import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* Mantém a proporção perfeita de vídeo 16:9 */
  aspect-ratio: 16 / 9; 
  border-radius: 12px;
  overflow: hidden;
  background-color: #202020; /* Fundo escuro enquanto o iframe carrega */
  position: relative; /* <-- CRUCIAL PARA POSICIONAR O ÍCONE */

  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* ----------------------------------------------------------- */
/* NOVOS ESTILOS PARA O ÍCONE DE PLAY NO MEIO DA THUMBNAIL */
/* ----------------------------------------------------------- */

export const PlayIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza perfeitamente */
  width: 60px; /* Tamanho da bolinha branca */
  height: 60px;
  border-radius: 50%;
  
  /* Fundo branco, semi-transparente para dar o efeito de vidro/blur */
  background-color: rgba(255, 255, 255, 0.7); 
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Sombrinha para dar profundidade e contraste */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); 
  
  /* Z-index 5 para ficar acima da Thumbnail, mas abaixo do iframe quando ele carregar */
  z-index: 5; 
  
  /* Mantém o cursor de clique para indicar interatividade */
  cursor: pointer; 
  
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -50%) scale(1.1); /* Cresce um pouquinho no hover */
  }
`;

export const PlayTriangle = styled.div`
  /* Truque do triângulo com bordas CSS */
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  /* O triângulo apontando para a direita, cor preta/escura para contraste */
  border-left: 25px solid rgba(0,0,0,0.7); 
  
  /* Ajuste fino de posicionamento para parecer centralizado na bolinha */
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
  padding-right: 24px; /* Dá um respiro para o texto não colar na borda direita */
`;

export const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ff4e45; /* Uma cor de destaque para canais sem foto */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  flex-shrink: 0; /* Impede que a bolinha do canal seja esmagada */
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
  
  /* Limita o título a 2 linhas e coloca "..." no final se for muito grande */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChannelName = styled.span`
  font-size: 14px;
  color: #606060; /* Cinza clássico do YouTube */
`;

export const Details = styled.span`
  font-size: 14px;
  color: #606060;
`;