import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/contexts";
import CreateUserPage from "../createUser";
import * as S from "./styles";

import LoginIcon from '../../../assets/header-icons/YouTube-Logo-removebg-preview.png';

function Login() {
    const { createUserPage, setCreateUserPage, showPassword, setShowPassword, handleLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <S.LoginContainer> 
            {createUserPage ? (
                <CreateUserPage />
            ) : (
                <S.LoginContent>
                    <S.LoginImgContainer>
                        <S.LoginImg src={LoginIcon} alt="Logo" />
                        <S.ImgSpan><b>Faça o seu login</b></S.ImgSpan>
                    </S.LoginImgContainer>

                    <S.InputContainer>
                        <S.FromContainer>
                            <S.LabelContainer htmlFor="email">
                                <b className='b'>Coloque seu email: </b>
                                <input 
                                    id="email" 
                                    name="email" 
                                    placeholder="Coloque o seu email" 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </S.LabelContainer>

                            <S.LabelContainer htmlFor="password">
                                <b className='b'>Coloque a sua senha: </b>
                                <input  
                                    id="password" 
                                    name="password" 
                                    placeholder="password" 
                                    type={showPassword ? 'text' : 'password'}  
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                />    
                            </S.LabelContainer>
                        </S.FromContainer>

                        <S.ViewPassword>
                            <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                            <label htmlFor="show-password">Mostrar senha</label>
                        </S.ViewPassword>
                        
                        <S.LoginButtos>
                            <button 
                                onClick={() => handleLogin(email, password)}
                                onKeyDown={(e) => {
                                    if(e.key === 'Enter') handleLogin(email, password);
                                    if(e.key === " ") e.preventDefault();
                                }}
                            >
                                Logar
                            </button>
                            <button onClick={() => setCreateUserPage(!createUserPage)}>Criar usuário</button>                          
                        </S.LoginButtos>
                    </S.InputContainer>
                </S.LoginContent>           
            )}
        </S.LoginContainer>
    );
}

export default Login;