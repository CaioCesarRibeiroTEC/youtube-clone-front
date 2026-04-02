import styled from "styled-components";

export const CreateLoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`;

export const CreateLoginContent = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 25px;

    @media(max-width: 900px) { 
        flex-direction: column; 
        row-gap: 30px; 
        padding: 30px 0; 
        overflow-y: auto;
    }
`;

export const CreateLoginImgContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 900px) { width: 100%; }
`;

export const CreateLoginImg = styled.img` width: 70%; max-width: 300px; `;

export const CreateImgSpan = styled.span`
    color: #cc0000; 
    font-size: 2rem;
    margin-top: 15px;
    @media(max-width: 500px) { font-size: 20px; }
`;

export const CreateInputContainer = styled.div`
    width: 60%; 
    display: flex; 
    flex-direction: column;
    padding-right: 40px;
    @media(max-width: 900px) { width: 90%; padding-right: 0; }
`;

export const CreateFromContainer = styled.form`
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    gap: 20px;
`;

export const CreateLabelContainer = styled.label`
    width: 100%; 
    display: flex;
    align-items: flex-start;

    .b {
        width: 150px; 
        margin-top: 10px;
    }

    @media(max-width: 750px) { 
        flex-direction: column; 
        .b { width: 100%; margin-bottom: 5px; }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; 
`;

export const PasswordWrapper = styled.div`
    display: flex;
    flex: 1;
    gap: 15px;

    @media(max-width: 1100px) { 
        flex-direction: column; 
    }
`;

export const Input = styled.input<{ $valid: boolean }>`
    width: 100%; 
    max-width: 320px;
    height: 38px; 
    border-radius: 8px; 
    border: ${({ $valid }) => $valid ? "1px solid #b3b3b3" : "1px solid #cc0000"};
    font-size: 14px; 
    padding-left: 15px;
    box-sizing: border-box;

    &:focus {
        border-color: ${({ $valid }) => $valid ? "#065fd4" : "#cc0000"};
        border-width: 2px; 
        outline: none;
    }

    @media(max-width: 1100px) { max-width: 100%; }
`;

export const CompareInputPassword = styled.input<{ $valid: boolean }>`
    width: 100%; 
    max-width: 220px;
    height: 38px; 
    border-radius: 8px;
    border: ${({ $valid }) => $valid ? "1px solid #b3b3b3" : "1px solid #cc0000"};
    padding-left: 15px; 
    font-size: 14px;
    box-sizing: border-box;

    &:focus {
        border-color: ${({ $valid }) => $valid ? "#065fd4" : "#cc0000"};
        border-width: 2px; 
        outline: none;
    }

    @media(max-width: 1100px) { max-width: 100%; }
`;

export const ErrorMessage = styled.span`
    color: #cc0000;
    font-size: 12px;
    font-weight: 600;
    margin-top: 5px;
    margin-left: 5px;
`;

export const BackendMessage = styled.div<{ $isError: boolean }>`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: ${({ $isError }) => $isError ? '#721c24' : '#155724'};
    background-color: ${({ $isError }) => $isError ? '#f8d7da' : '#d4edda'};
    border: 1px solid ${({ $isError }) => $isError ? '#f5c6cb' : '#c3e6cb'};
    margin-bottom: 10px;
`;

export const ViewPassword = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
`;

export const CreateLoginButtos = styled.div`
    width: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-start;
    gap: 20px;

    button {
        width: 150px; 
        height: 40px; 
        border-radius: 20px; 
        border: 1px solid #ccc; 
        cursor: pointer;
        font-weight: 600;
        background-color: #fff;
        transition: 0.2s;

        &:hover { background-color: #e5e5e5; }

        &:first-child {
            background-color: #065fd4;
            color: #fff;
            border: none;

            &:hover { background-color: #0056b3; }
            &:disabled { background-color: #a3c2f0; cursor: not-allowed; }
        }
    }

    @media(max-width: 500px) {
        flex-direction: column;
        button { width: 100%; }
    }
`;