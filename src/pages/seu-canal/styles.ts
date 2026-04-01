import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  max-width: 1280px;
  margin: 0 auto;

  @media(max-width: 900px) {
    padding: 10px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0052d4, #4364f7, #6fb1fc);
  margin-bottom: 24px;

  @media(max-width: 900px) {
    height: 120px;
    border-radius: 10px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ProfileAvatar = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #ff4e45;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: 500;
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ChannelName = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #0f0f0f;
  margin: 0 0 8px 0;

  @media(max-width: 600px) {
    font-size: 24px;
  }
`;

export const ChannelDetails = styled.div`
  display: flex;
  gap: 6px;
  color: #606060;
  font-size: 14px;
  margin-bottom: 12px;
  flex-wrap: wrap;

  @media(max-width: 600px) {
    justify-content: center;
  }
`;

export const ChannelDescription = styled.p`
  color: #606060;
  font-size: 14px;
  margin: 0 0 16px 0;
  cursor: pointer;
  
  &:hover {
    color: #0f0f0f;
  }
`;

export const ManageButton = styled.button`
  padding: 0 16px;
  height: 36px;
  border-radius: 18px;
  background-color: #f2f2f2;
  color: #0f0f0f;
  border: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  width: max-content;
  transition: 0.2s;

  &:hover {
    background-color: #e5e5e5;
  }

  @media(max-width: 600px) {
    align-self: center;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 24px;
  overflow-x: auto; /* Rolagem em telas pequenas */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.div<{ $active: boolean }>`
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ $active }) => $active ? '#0f0f0f' : '#606060'};
  border-bottom: 2px solid ${({ $active }) => $active ? '#0f0f0f' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #0f0f0f;
  }
`;

export const TabContent = styled.div`
  width: 100%;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px 16px;
  width: 100%;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  text-align: center;

  h3 {
    margin: 0 0 10px 0;
    color: #0f0f0f;
  }

  p {
    color: #606060;
    margin: 0 0 20px 0;
  }
`;