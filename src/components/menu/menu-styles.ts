import styled from "styled-components";

export const MenuContainer = styled.aside<{ $openMenu: boolean }>`
    width: ${({ $openMenu }) => $openMenu ? '240px' : '100px'};
    height: calc(100vh - 56px);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    top: 56px;
    left: 0;
    background-color: #fff;
    transition: width 0.1s;
    z-index: 50;
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 4px;
    }
    &:hover::-webkit-scrollbar-thumb {
        background-color: #d1d1d1;
    }

    .login-prompt {
        padding: 15px;
        span {
            font-size: 14px;
            line-height: 20px;
        }
    }

    .section-title {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0 5px 15px;
        align-self: flex-start;
        width: 100%;
    }

    .closed-menu-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    @media(max-width: 900px) {
        /* A MÁGICA DO MOBILE QUE CONVERTE O MENU FECHADO EM BARRA INFERIOR */
        width: 100%;
        height: 48px;
        top: auto;
        bottom: 0;
        flex-direction: row;
        border-top: 1px solid #e5e5e5;
        overflow: visible; 
        
        .closed-menu-container {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 100%;
        }

        /* Oculta itens extras na barra inferior para não espremer os botões */
        .hide-on-mobile {
            display: none !important;
        }
    }
`;

export const DivisorItem = styled.div`
    width: 100%;
    padding-bottom: 12px;
    margin-top: 12px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 900px) {
        border-bottom: none;
        margin-top: 0;
        padding-bottom: 0;
    }
`;

export const MenuItem = styled.div<{ $openMenu: boolean }>`
    width: ${({ $openMenu }) => $openMenu ? '90%' : '100%'};
    min-height: ${({ $openMenu }) => $openMenu ? '40px' : '70px'};
    display: flex;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background-color: #f2f2f2;
    }

    @media(max-width: 900px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        &:hover {
            background-color: transparent;
        }
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonContent = styled.div<{ $openMenu: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({ $openMenu }) => $openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openMenu }) => $openMenu ? 'flex-start' : 'center'};
    padding: ${({ $openMenu }) => $openMenu ? '0 12px' : '0'};
    
    span {
        font-weight: 400; 
        margin-left: ${({ $openMenu }) => $openMenu ? '20px' : '0'};
        margin-top: ${({ $openMenu }) => $openMenu ? '0' : '4px'};
        font-size: ${({ $openMenu }) => $openMenu ? '14px' : '10px'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media(max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        padding: 0;
        
        span {
            margin-left: 0;
            margin-top: 4px;
            font-size: 10px;
        }
    }
`;

export const ButtonIcon = styled.img<{ $openMenu: boolean }>`
    width: 24px;
    margin-top: 0;
    margin-left: 0;

    @media(max-width: 900px) {
        width: 20px;
    }
`;

export const ButtonLogin = styled.button`
    width: max-content;
    height: 36px;
    margin-top: 15px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 40px;
    border: 1px solid #e5e5e5;
    background-color: transparent;
    color: #065fd4;
    font-weight: 500;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    &:hover {
        background-color: #def1ff;
        border-color: transparent;
    }
`;