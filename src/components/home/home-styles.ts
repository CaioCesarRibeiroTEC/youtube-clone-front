import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeContent = styled.div<{ $openMenu: boolean }>`
  width: ${({ $openMenu }) => ($openMenu ? '98%' : '100%')};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 16px;
  padding: 5px 0;
  box-sizing: border-box;
  transition: 0.7s;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    padding: 10px 0;
    gap: 24px 0;
  }
`;

export const VideoWrapper = styled.div<{ $isExpanded: boolean }>`
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative; /* Obrigatório para o CloseButton se posicionar nas quinas */

  grid-column: ${({ $isExpanded }) => ($isExpanded ? 'span 2' : 'span 1')};
  grid-row: ${({ $isExpanded }) => ($isExpanded ? 'span 2' : 'span 1')};

  @media(max-width: 700px) {
    /* Em telas médias/pequenas, o vídeo volta a ocupar 1 coluna só */
    grid-column: span 1;
    grid-row: span 1;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  
  background-color: #cc0000; 
  color: #fff;
  border: 3px solid #fff; 
  
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  z-index: 20; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #ff0000;
    transform: scale(1.1);
  }

  /* REQUISITO DE UX MOBILE: Some com a "caxumba" em telas muito pequenas */
  @media(max-width: 620px) {
    display: none;
    pointer-events: none; /* Garante que não haverá clique fantasma */
  }
`;