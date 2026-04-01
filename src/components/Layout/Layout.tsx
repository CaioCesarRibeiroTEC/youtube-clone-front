import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Menu from '../menu/menu';
import { UserContext } from '../../contexts/contexts';
import * as S from './Layout-styles';

function Layout() {
  const { openMenu } = useContext(UserContext);

  return (
    <S.Container>
      <Header />

      <S.MainContainer>
        <Menu />  
        <S.PageContent $openMenu={openMenu}>
          <Outlet />
        </S.PageContent>
      </S.MainContainer>
    </S.Container>
  );
}

export default Layout;