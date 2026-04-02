import styled from "styled-components";

export const MenuPesquisaContainer = styled.div<{ $openMenu: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  @media(max-width: 900px) {
    width: 100%;
  }
`;

export const SliderButtons = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: #f3f3f3;
  }

  @media(max-width: 900px) {
    display: none; 
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow-x: hidden;   
  background-color: #f9f9f9;
  overflow-x: auto; 
   &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;  scrollbar-width: none; 
  
`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  height: 100%;
  padding: 0 10px;
`;

export const Button = styled.button`
  height: 32px;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: #f2f2f2;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  @media(max-width: 500px) {
    font-size: 12px;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;