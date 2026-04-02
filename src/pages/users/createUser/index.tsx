import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../contexts/contexts";
import { api } from "../../../api"; 
import * as S from "./styles";
import LoginIcon from '../../../assets/header-icons/YouTube-Logo-removebg-preview.png';

function CreateUserPage() {
  const {
    createUserPage, setCreateUserPage,
    nameValid, setNameValid, emailValid, setEmailValid,
    passwordValid, setPasswordValid, formatEmail, setFormatEmail,
    comparePassword, setComparePassword, samePassword, setSamePassword,
    showPassword, setShowPassword, handleLogin
  } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados Profissionais de UI (Interface)
  const [backendMessage, setBackendMessage] = useState({ text: '', isError: false });
  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const comparePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, []);

  const createUser = async () => {
    if (loading) return;
    
    let isValid = true;
    setBackendMessage({ text: '', isError: false });

    // 1. Validação do Nome
    const isNameValid = name.trim() !== '';
    setNameValid(isNameValid);
    if (!isNameValid) isValid = false;

    // 2. Validação do E-mail
    const isEmailEmpty = email.trim() === '';
    const isEmailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isEmailEmpty) {
      setEmailValid(false);
      setFormatEmail(true); 
      isValid = false;
    } else if (!isEmailFormatValid) {
      setEmailValid(true); 
      setFormatEmail(false);
      isValid = false;
    } else {
      setEmailValid(true);
      setFormatEmail(true);
    }

    // 3. Validação da Senha
    const isPasswordValid = password.trim() !== '' && password.length >= 8;
    setPasswordValid(isPasswordValid);
    if (!isPasswordValid) isValid = false;

    // 4. Validação da Confirmação de Senha
    const isSamePassword = password === comparePassword && comparePassword !== '';
    setSamePassword(isSamePassword);
    if (!isSamePassword) isValid = false;

    // Foco automático no primeiro campoo
    if (!isValid) {
      if (!isNameValid) nameRef.current?.focus();
      else if (isEmailEmpty || !isEmailFormatValid) emailRef.current?.focus();
      else if (!isPasswordValid) passwordRef.current?.focus();
      else if (!isSamePassword) comparePasswordRef.current?.focus();
      return;
    }

    // Se passou em todas as regras, chama o Back-end
    setLoading(true);
    try {
      await api.post('/users/sign-up', { name, email, password });
      
      // Sucesso: Mostra banner verde e loga automaticamente após 1.5s
      setBackendMessage({ text: 'Usuário criado com sucesso! Fazendo login...', isError: false });
      
      setTimeout(() => {
        handleLogin(email, password);
      }, 1500);

    } catch (err: any) {
      // Erro: Mostra banner vermelho baseado na resposta do Back-end
      setLoading(false);
      if (err.response?.status === 400) {
        setBackendMessage({ text: 'Este e-mail já está em uso.', isError: true });
        emailRef.current?.focus();
      } else {
        setBackendMessage({ text: 'Erro interno ao criar usuário. Tente novamente.', isError: true });
      }
    }
  };

  return (
    <S.CreateLoginContainer> 
      <S.CreateLoginContent>
        <S.CreateLoginImgContainer>
          <S.CreateLoginImg src={LoginIcon} />
          <S.CreateImgSpan><b>Faça o seu cadastro</b></S.CreateImgSpan>
        </S.CreateLoginImgContainer>

        <S.CreateInputContainer>
          <S.CreateFromContainer>
            
            {/* Banner de Mensagem do Servidor */}
            {backendMessage.text && (
              <S.BackendMessage $isError={backendMessage.isError}>
                  {backendMessage.text}
              </S.BackendMessage>
            )}

            <S.CreateLabelContainer htmlFor="name">
              <b className='b'>Coloque seu nome: </b>
              <S.InputWrapper>
                <S.Input 
                  $valid={nameValid} id="name" name="name" type="text" 
                  placeholder="Digite seu nome completo"
                  value={name} ref={nameRef} onChange={(e) => setName(e.target.value)}
                />
                {!nameValid && <S.ErrorMessage>O nome é obrigatório.</S.ErrorMessage>}
              </S.InputWrapper>
            </S.CreateLabelContainer>

            <S.CreateLabelContainer htmlFor="email">
              <b className='b'>Coloque seu email: </b>
              <S.InputWrapper>
                <S.Input 
                  $valid={emailValid && formatEmail} id="email" name="email" type="email" 
                  placeholder="exemplo@email.com"
                  value={email} ref={emailRef} onChange={(e) => setEmail(e.target.value)}
                />
                {!emailValid && <S.ErrorMessage>O e-mail é obrigatório.</S.ErrorMessage>}
                {!formatEmail && emailValid && <S.ErrorMessage>Digite um e-mail válido.</S.ErrorMessage>}
              </S.InputWrapper>
            </S.CreateLabelContainer>

            <S.CreateLabelContainer htmlFor="password">
              <b className='b'>Coloque a sua senha: </b>
              <S.PasswordWrapper>
                <S.InputWrapper>
                  <S.Input 
                    $valid={passwordValid} id="password" name="password" 
                    placeholder="Mínimo de 8 caracteres"
                    type={showPassword ? 'text' : 'password'} 
                    value={password} ref={passwordRef} onChange={(e) => setPassword(e.target.value)}
                  />
                  {!passwordValid && <S.ErrorMessage>Mínimo de 8 caracteres.</S.ErrorMessage>}
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.CompareInputPassword
                    $valid={samePassword} placeholder="Repita sua senha"
                    type={showPassword ? 'text' : 'password'} 
                    value={comparePassword} ref={comparePasswordRef} onChange={(e) => setComparePassword(e.target.value)}
                  />    
                  {!samePassword && <S.ErrorMessage>As senhas não conferem.</S.ErrorMessage>}
                </S.InputWrapper>
              </S.PasswordWrapper>
            </S.CreateLabelContainer>
          </S.CreateFromContainer>

          <S.ViewPassword>
            <input type="checkbox" id="show-password" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
            <label htmlFor="show-password">Mostrar senha</label>
          </S.ViewPassword>
            
          <S.CreateLoginButtos>
            {/* O type="button" impede a página de dar refresh acidentalmente */}
            <button type="button" onClick={createUser} disabled={loading}>
              {loading ? 'Aguarde...' : 'Criar Usuário'}
            </button>
            <button type="button" onClick={() => setCreateUserPage(!createUserPage)} disabled={loading}>
              Voltar
            </button>       
          </S.CreateLoginButtos>

        </S.CreateInputContainer>
      </S.CreateLoginContent>           
    </S.CreateLoginContainer>
  );
}

export default CreateUserPage;