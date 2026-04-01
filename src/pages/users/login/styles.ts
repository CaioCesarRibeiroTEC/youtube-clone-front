import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`;

export const LoginContent = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 25px;

    @media(max-width: 830px) { width: 90%; }
    @media(max-width: 500px) {
       flex-direction: column;
       row-gap: 20px;
    }
`;

export const LoginImgContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginImg = styled.img` width: 70%; `;

export const ImgSpan = styled.span`
    color: #cc0000;
    font-size: 2rem;
    @media(max-width: 500px) { font-size: 25px; }
`;

export const InputContainer = styled.div`
    width: 70%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 500px) {
        flex-direction: column;
        row-gap: 50px;
    }
`;

export const FromContainer = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const LabelContainer = styled.label`
    width: 70%;
    display: flex;
    justify-content: space-around;
    padding: 10px;

    input {
        width: 200px;
        height: 30px;
        border-radius: 40px;
        border: none;
        padding-left: 10px;
    }

    @media(max-width: 500px) { flex-direction: column; }
`;

export const ViewPassword = styled.div` display: flex; `;

export const LoginButtos = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        width: 150px;
        height: 30px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
        &:hover { background-color: #f2f2f2; }
    }
`;