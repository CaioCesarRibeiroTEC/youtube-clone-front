import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const PageContent = styled.div<{ $openMenu: boolean }>`
  flex: 1;
  /* MÁGICA DO DESKTOP: Se o menu estiver aberto (240px) ou fechado (72px) */
  width: ${({ $openMenu }) => ($openMenu ? 'calc(100% - 200px)' : 'calc(100% - 72px)')};
  margin-left: ${({ $openMenu }) => ($openMenu ? '240px' : '72px')};
  
  padding: 24px;
  box-sizing: border-box;
  transition: width 0.1s, margin-left 0.1s;
  background-color: #f9f9f9; /* Uma cor de fundo leve para dar contraste com os vídeos */

  @media (max-width: 900px) {
    /* MÁGICA DO MOBILE: O menu foi para o rodapé, então o conteúdo ocupa 100% da largura */
    width: 100%;
    margin-left: 0;
    padding: 15px;
    margin-bottom: 48px; /* Empurra o conteúdo para cima, para não ficar atrás do Menu inferior */
  }
`;