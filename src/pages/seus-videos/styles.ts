import styled from "styled-components";

interface ModalProps {
  $hideModal?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  box-sizing: border-box;

  @media(max-width: 900px) {
    padding: 10px 0;
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 15px;
  box-sizing: border-box;

  @media(max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const UserName = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const Modal = styled.div<ModalProps>`
  visibility: ${({ $hideModal }) => $hideModal ? 'visible' : 'hidden'};
  opacity: ${({ $hideModal }) => $hideModal ? '1' : '0'};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
`;

export const ModalContent = styled.div`
  width: 50vw;
  max-width: 600px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 30px 45px;
  box-sizing: border-box;
  position: relative;
  gap: 15px;

  @media(max-width: 900px) {
    width: 80vw;
    padding: 30px 20px;
  }

  @media(max-width: 600px) {
    width: 95vw;
    padding: 30px 15px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: #f2f2f2;
  color: #000;
  font-weight: 700;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const AddVideoButton = styled.button`
  padding: 0 20px;
  height: 40px;
  border: none;
  background-color: #0f0f0f;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: #272727;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border-color: #065fd4;
    outline: none;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px 25px;
  background-color: #065fd4;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
`;