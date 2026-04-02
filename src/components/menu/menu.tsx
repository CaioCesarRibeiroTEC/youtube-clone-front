import { useContext } from "react";
import { UserContext } from "../../contexts/contexts";
import { useNavigate } from "react-router-dom";
import * as S from "./menu-styles";

// Importações dos ícones
import HomeIcon from "../../assets/menu-icons/home.png";
import Shorts from '../../assets/menu-icons/shorts.png';
import Inscricoes from '../../assets/menu-icons/inscrição.png';
import Voce from '../../assets/menu-icons/voce.png';
import Historico from '../../assets/menu-icons/historico.png';
import EmAlta from '../../assets/menu-icons/em-alta.png';
import Shopping from '../../assets/menu-icons/shopping.png';
import Musica from '../../assets/menu-icons/musica.png';
import Filmes from '../../assets/menu-icons/filme.png';
import AoVivo from '../../assets/menu-icons/ao-vivo.png';
import Jogos from '../../assets/menu-icons/jogos.png';
import Noticias from '../../assets/menu-icons/noticias.png';
import Esportes from '../../assets/menu-icons/esportes.png';
import Cursos from '../../assets/menu-icons/cursos.png';
import Podcasts from '../../assets/menu-icons/podcasts.png';
import ProcurarCanais from '../../assets/menu-icons/mais.png';
import YouTubePremium from '../../assets/menu-icons/YouTube.png';
import YouTubeMusic from '../../assets/menu-icons/YouTube-Music.png';
import YouTubeKids from '../../assets/menu-icons/YouTube-Kids.png';
import Configuracoes from '../../assets/menu-icons/configuração.png';
import HistoricoDenuncias from '../../assets/menu-icons/historico-de-denuncias.png';
import Ajuda from '../../assets/menu-icons/ajuda.png';
import EviarFeedback from '../../assets/menu-icons/feedback.png';
import IconeLogin from '../../assets/menu-icons/icone-login.png';
import seuCanal from '../../assets/menu-icons/seu-canal.png';
import seusVídeos from '../../assets/menu-icons/seus-videos.png';
import seusDownloads from '../../assets/menu-icons/seus-download.png';

const bloco1 = [
    { name: 'Inicio', imagem: HomeIcon, link: '/' }, 
    { name: 'Shorts', imagem: Shorts, link: '/Shorts' }, 
    { name: 'Seu Canal', imagem: Voce, link: '/seu-canal' }
];

const bloco2 = [
    { name: 'Seus vídeos', imagem: seusVídeos, link: '/seus-videos' },
    { name: 'Inscrições', imagem: Inscricoes, link: '/em-desenvolvimento' },
    { name: 'Histórico', imagem: Historico, link: '/em-desenvolvimento' }
];

const blocoLogado = [
    { name: 'Seu canal', imagem: seuCanal, link: '/seu-canal' }, 
    { name: 'Seus vídeos', imagem: seusVídeos, link: '/seus-videos' },
    { name: 'Histórico', imagem: Historico, link: '/em-desenvolvimento' },
    { name: 'Seus downloads', imagem: seusDownloads, link: '/em-desenvolvimento' }
];

const bloco3 = [
    { name: 'Em alta', imagem: EmAlta, link: '/em-desenvolvimento' }, 
    { name: 'Shopping', imagem: Shopping, link: '/em-desenvolvimento' }, 
    { name: 'Musica', imagem: Musica, link: '/em-desenvolvimento' },
    { name: 'Filmes', imagem: Filmes, link: '/em-desenvolvimento' },
    { name: 'Ao vivo', imagem: AoVivo, link: '/em-desenvolvimento' },
    { name: 'Jogos', imagem: Jogos, link: '/em-desenvolvimento' },
    { name: 'Notícias', imagem: Noticias, link: '/em-desenvolvimento' },
    { name: 'Esportes', imagem: Esportes, link: '/em-desenvolvimento' },
    { name: 'Cursos', imagem: Cursos, link: '/em-desenvolvimento' },
    { name: 'Podcasts', imagem: Podcasts, link: '/em-desenvolvimento' },
];

const bloco4 = [
    { name: 'Procurar canais', imagem: ProcurarCanais, link: '/em-desenvolvimento' }
];

const bloco5 = [
    { name: 'YouTube Premium', imagem: YouTubePremium, link: '/em-desenvolvimento' }, 
    { name: 'YouTube Music', imagem: YouTubeMusic, link: '/em-desenvolvimento' }, 
    { name: 'YouTube Kids', imagem: YouTubeKids, link: '/em-desenvolvimento' }
];

const bloco6 = [
    { name: 'Configurações', imagem: Configuracoes, link: '/em-desenvolvimento' }, 
    { name: 'Historico de denuncias', imagem: HistoricoDenuncias, link: '/em-desenvolvimento' }, 
    { name: 'Ajuda', imagem: Ajuda, link: '/em-desenvolvimento' },
    { name: 'Eviar feedback', imagem: EviarFeedback, link: '/em-desenvolvimento' }
];

const bloco7 = [
    { name: 'Inicio', imagem: HomeIcon, link: '/' }, 
    { name: 'Shorts', imagem: Shorts, link: '/shorts' }, 
    { name: 'Você', imagem: Voce, link: '/seu-canal' },
    { name: 'Seus vídeos', imagem: seusVídeos, link: '/seus-videos' }, 
];

function Menu() {  
    const navigate = useNavigate();
    
    const { openMenu, login } = useContext(UserContext);
    
    return (
        <S.MenuContainer $openMenu={openMenu}>
            {openMenu ? (
                <>
                    {/* MENU DESKTOP EXPANDIDO */}
                    <S.DivisorItem>
                        {bloco1.map((item) => (
                            <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>

                    {login ? null : (
                        <S.DivisorItem>
                            {bloco2.map((item) => (
                                <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                    <S.ButtonContainer>
                                        <S.ButtonContent $openMenu={openMenu}>
                                            <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                            <span>{item.name}</span>
                                        </S.ButtonContent>
                                    </S.ButtonContainer> 
                                </S.MenuItem>
                            ))}
                        </S.DivisorItem>
                    )}

                    <S.DivisorItem>
                        {login ? (
                            blocoLogado.map((item) => (
                                <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                    <S.ButtonContainer>
                                        <S.ButtonContent $openMenu={openMenu}>
                                            <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                            <span>{item.name}</span>
                                        </S.ButtonContent>
                                    </S.ButtonContainer> 
                                </S.MenuItem>
                            ))
                        ) : (
                            <div className="login-prompt">
                                <span>Faça login para curtir vídeos, comentar e se inscrever.</span>
                                <div>
                                    <S.ButtonLogin onClick={() => navigate('/login')}>
                                        <img alt="Login" src={IconeLogin} /> 
                                        <p>Fazer Login</p>
                                    </S.ButtonLogin>   
                                </div>
                            </div>
                        )}
                    </S.DivisorItem>

                    <S.DivisorItem>
                        <h3 className="section-title">Explorar</h3>
                        {bloco3.map((item) => (
                            <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>

                    <S.DivisorItem>
                        {bloco4.map((item) => (
                            <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>

                    <S.DivisorItem>
                        <h3 className="section-title">Mais do YouTube</h3>
                        {bloco5.map((item) => (
                            <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>

                    <S.DivisorItem style={{ borderBottom: 'none' }}>
                        {bloco6.map((item) => (
                            <S.MenuItem key={item.name} $openMenu={openMenu} onClick={() => navigate(item.link)}>
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>
                </>
            ) : (
                <>
                    {/* MOBILE BOTTOM BAR */}
                    <S.DivisorItem style={{ borderBottom: 'none', marginTop: 0 }} className="closed-menu-container">
                        {bloco7.map((item) => (
                            <S.MenuItem 
                                key={item.name} 
                                $openMenu={openMenu} 
                                onClick={() => navigate(item.link)}
                                className={item.name === 'downloads' || item.name === 'YouTube Music' ? 'hide-on-mobile' : ''}
                            >
                                <S.ButtonContainer>
                                    <S.ButtonContent $openMenu={openMenu}>
                                        <S.ButtonIcon $openMenu={openMenu} alt={item.name} src={item.imagem} />
                                        <span>{item.name}</span>
                                    </S.ButtonContent>
                                </S.ButtonContainer> 
                            </S.MenuItem>
                        ))}
                    </S.DivisorItem>
                </>
            )}  
        </S.MenuContainer>
    );
}

export default Menu;