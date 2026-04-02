import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 56px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 100;

  @media (max-width: 900px) {

  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  .logo {
    height: 70px;
    margin-left: 16px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .logo {
      height: 50px;

    }
  }
`;

export const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  img {
    width: 24px;
  }

  &.mobile-search, &.mobile-mic {
    display: none;
  }

  @media (max-width: 900px) {
    &.hamburger-menu {
      display: none;
    }

    &.mobile-search, &.mobile-mic {
      display: flex;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  max-width: 720px;
  margin: 0 40px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 40px 40px 40px 40px;
  background-color: #fff;
  margin-left: 40px;

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 16px;
    border-radius: 40px 0 0 40px;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  width: 64px;
  height: 40px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #f8f8f8;
  border-radius: 0 40px 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 20px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 900px) {
    gap: 0px;
  }
`;

export const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ff4e45;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  color: #065fd4;
  padding: 6px 15px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;

  img {
    width: 20px;
  }

  @media (max-width: 900px) {
    border: none;
    padding: 0;
    span {
      display: none;
    }
    img {
      width: 28px;
    }
  }
`;

export const ClearButton = styled.button<{ $clearButton: boolean }>`
  display: ${({ $clearButton }) => ($clearButton ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 15px;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;


export const DropDowContainer = styled.div<{ $openDropDown: boolean }>`
  display: ${({ $openDropDown }) => ($openDropDown ? 'flex' : 'none')};
  width: 280px;
  background-color: #fff;
  flex-direction: column;
  border-radius: 10px;
  position: absolute;
  top: 45px;
  right: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  padding: 10px 0;
  z-index: 1000;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 20px 20px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 10px;

  .user-details {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    
    .name { font-size: 16px; font-weight: 500; }
    .email { font-size: 14px; color: #606060; }
  }
`;

export const DropDowButton = styled.button`
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  font-size: 14px;

  img { width: 24px; margin-right: 15px; }
  .sair-icon { border-radius: 50%; }

  &:hover { background-color: #f2f2f2; }
`;