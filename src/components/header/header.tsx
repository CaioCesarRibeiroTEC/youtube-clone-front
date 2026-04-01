import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/contexts';
import * as S from './header-styles';

// Importando seus ícones
import Logo from '../../assets/header-icons/YouTube-Logo.png';
import HamburgerIcon from '../../assets/header-icons/menu-hamburger.png';
import SearchIcon from '../../assets/header-icons/search.png';
import MicIcon from '../../assets/header-icons/microfone-gravador.png';
import VideoIcon from '../../assets/header-icons/video.png';
import BellIcon from '../../assets/header-icons/sino.png';
import UserIcon from '../../assets/menu-icons/icone-login.png';
import CloseIcon from '../../assets/header-icons/close.png';
import SairIcon from '../../assets/header-icons/sair.jpg';
import SeuCanalIcon from '../../assets/menu-icons/seu-canal.png';

function Header() {
  const navigate = useNavigate();
  // Puxando os dados que precisamos do Contexto
  const { login, user, logOut, openMenu, setOpenMenu, setSearch, openDropDown, setOpenDropDown } = useContext(UserContext);
  
  const [inputValue, setInputValue] = useState('');

  const clearInput = () => {
    setInputValue('');
    setSearch('');
  };

  const handleSearch = () => {
    if (inputValue.trim() === '') return alert('Digite algo para pesquisar');
    setSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <S.Container>
      {/* Lado Esquerdo */}
      <S.LogoContainer>
        <S.ButtonContainer className="hamburger-menu" onClick={() => setOpenMenu(!openMenu)}>
          <img src={HamburgerIcon} alt="Menu" />
        </S.ButtonContainer>
        <img className="logo" src={Logo} alt="YouTube Logo" onClick={() => { navigate('/'); setSearch(''); }} />
      </S.LogoContainer>

      {/* Barra de Pesquisa */}
      <S.SearchContainer>
        <S.SearchInputContainer>
          <input 
            type="text" 
            placeholder="Pesquisar" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <S.ClearButton $clearButton={inputValue.length > 0} onClick={clearInput}>
            <img src={CloseIcon} alt="Limpar" />
          </S.ClearButton>
          <S.SearchButton onClick={handleSearch}>
            <img src={SearchIcon} alt="Pesquisar" />
          </S.SearchButton>
        </S.SearchInputContainer>
        <S.ButtonContainer className="mic-button">
          <img src={MicIcon} alt="Microfone" />
        </S.ButtonContainer>
      </S.SearchContainer>

      {/* Lado Direito (Onde a mágica do Perfil acontece) */}
      <S.HeaderIcons>
        <S.ButtonContainer className="mobile-search" onClick={() => navigate('/search')}>
          <img src={SearchIcon} alt="Pesquisar" />
        </S.ButtonContainer>
        
        <S.ButtonContainer className="mobile-mic">
          <img src={MicIcon} alt="Microfone" />
        </S.ButtonContainer>

        <S.ButtonContainer>
          <img src={VideoIcon} alt="Criar" />
        </S.ButtonContainer>
        
        <S.ButtonContainer>
          <img src={BellIcon} alt="Notificações" />
        </S.ButtonContainer>

        {/* SE ESTIVER LOGADO: Mostra a inicial do nome e o Dropdown */}
        {login ? (
          <S.UserContainer>
            {/* Bolinha com a inicial do nome */}
            <S.ProfileIcon onClick={() => setOpenDropDown(!openDropDown)}>
              {user && user.name ? user.name.charAt(0).toUpperCase() : 'C'}
            </S.ProfileIcon>

            {/* Menu Dropdown que abre e fecha */}
            <S.DropDowContainer $openDropDown={openDropDown}>
              <S.UserInfo>
                <S.ProfileIcon style={{ marginLeft: 0 }}>
                  {user && user.name ? user.name.charAt(0).toUpperCase() : 'C'}
                </S.ProfileIcon>
                <div className="user-details">
                  <span className="name">{user?.name}</span>
                  <span className="email">{user?.email}</span>
                </div>
              </S.UserInfo>

              <S.DropDowButton onClick={() => { setOpenDropDown(false); navigate('/seu-canal'); }}>
                <img src={SeuCanalIcon} alt="Seu Canal" />
                Seu canal
              </S.DropDowButton>
              
              <S.DropDowButton onClick={() => { setOpenDropDown(false); logOut(); }}>
                <img src={SairIcon} alt="Sair" className="sair-icon" />
                Sair
              </S.DropDowButton>
            </S.DropDowContainer>
          </S.UserContainer>

        ) : (
          <S.LoginButton onClick={() => navigate('/login')}>
            <img src={UserIcon} alt="Fazer Login" />
            <span>Fazer login</span>
          </S.LoginButton>
        )}
      </S.HeaderIcons>
    </S.Container>
  );
}

export default Header;