import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../api"; // O nosso axios configurado para o Back-end
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    // Estados de UI (Interface)
    const [login, setLogin] = useState(false);
    const [loginPage, setLoginLoginPage] = useState(false); // Modal de Login
    const [openMenu, setOpenMenu] = useState(false); // Menu Lateral
    const [openDropDown, setOpenDropDown] = useState(false); // Dropdown do Usuário
    const [createUserPage, setCreateUserPage] = useState(false); // Modal de Criar Usuário

    // Estados de Usuário
    const [user, setUser] = useState<any>({});
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    // Estados do Feed e Pesquisa
    const [search, setSearch] = useState('');
    const [categoryId, setCategoryId] = useState('0'); // 0 = Em Alta geral
    const [userVideos, setUserVideos] = useState([]);

    // Validações de Formulário (Mantido global conforme seu projeto)
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [formatEmail, setFormatEmail] = useState(true);
    const [comparePassword, setComparePassword] = useState('');
    const [samePassword, setSamePassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    // Efeito para manter logado se houver token ao recarregar a página
    useEffect(() => {
        if (token) {
            getUser(token);
        }
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setToken('');
        setLogin(false);
        setUser({});
        navigate('/');
    };

    const getUser = (currentToken: string) => {
        // Rota protegida no back-end (que configuramos antes)
        api.get('/users/get-user', { headers: { Authorization: `Bearer ${currentToken}` } })
           .then(({ data }) => {
                setUser(data.user);
                setLogin(true);
                getVideos(currentToken, data.user.id);
            })
           .catch((err) => {
                console.log('Usuário não autenticado ou token expirado', err);
                logOut(); // Se o token for inválido, limpa tudo
            });
    };

    const handleCreateUser = (name: string, email: string, passwordHash: string) => {
        api.post('/users/sign-up', { name, email, password: passwordHash })
           .then(() => {
                alert('Usuário criado com sucesso!');
                handleLogin(email, passwordHash); // Já faz o login automático
            })
           .catch((err) => {
                console.log('Não foi possível criar usuário', err);
                if (err.response?.status === 400) {
                    alert('Este email já está em uso.');
                } else {
                    alert('Não foi possível criar usuário, tente novamente.');
                }
            });
    };

    const handleLogin = (email: string, passwordHash: string) => {
        api.post('/users/sign-in', { email, password: passwordHash })
           .then(({ data }) => {
                setLogin(true);
                localStorage.setItem('token', data.token);
                setToken(data.token);
                setUser(data.user);
                setLoginLoginPage(false); // Fecha o modal/página de login
                navigate('/');
            })
           .catch((err) => {
                console.log('Não foi possível fazer o login', err);
                alert('Email ou senha incorretos.');
            });
    };

    const getVideos = async (currentToken: string, user_id: string) => {
        try {
            const response = await api.get(`/videos/user-videos`, { 
                headers: { Authorization: `Bearer ${currentToken}` } 
            });
            if (response.status === 200) {
                setUserVideos(response.data.videos);
            }
        } catch (error) {
            console.log('Erro ao buscar seus vídeos', error, user_id);
        }
    };

    const createVideos = (title: string, description: string, url: string, thumbnail: string) => {
        api.post('/videos/create-video', { title, description, url, thumbnail }, { 
            headers: { Authorization: `Bearer ${token}` } 
        })
        .then(() => {
            alert('Vídeo postado com sucesso!');
            getVideos(token, user.id);
        })
        .catch((err) => {
            console.log('Erro ao postar vídeo', err);
            alert('Erro ao criar vídeo');
        });
    };

    return (
        <UserContext.Provider value={{ 
            openMenu, setOpenMenu, login, setLogin, user, setUser, token, setToken,
            openDropDown, setOpenDropDown, loginPage, setLoginLoginPage, showPassword, setShowPassword,
            createUserPage, setCreateUserPage, nameValid, setNameValid, emailValid, setEmailValid,
            passwordValid, setPasswordValid, formatEmail, setFormatEmail, comparePassword, setComparePassword,
            samePassword, setSamePassword, search, setSearch, categoryId, setCategoryId, userVideos, setUserVideos,
            handleLogin, getUser, handleCreateUser, logOut, getVideos, createVideos 
        }}>
            {children}
        </UserContext.Provider>
    );
};