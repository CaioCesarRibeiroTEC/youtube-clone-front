import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999; 
  display: flex;
  flex-direction: column;
`;

export const MobileHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #e5e5e5;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img { width: 20px; }
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  height: 36px;
  margin: 0 10px;
  padding: 0 10px;

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img { width: 14px; opacity: 0.6; }
`;

export const MicButton = styled.button`
  background: #f2f2f2;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img { width: 18px; }
`;

export const ResultsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 60px; 
`;