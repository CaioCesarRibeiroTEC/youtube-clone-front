import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/home";
import SearchMobile from "./pages/searchMobile";
import Login from "./pages/users/login";
import CreateUserPage from "./pages/users/createUser";
import SeusVideos from "./pages/seus-videos";
import SeuCanal from "./pages/seu-canal";
import Desenvolvimento from "./pages/em-desenvolvimento";
import Shorts from "./pages/shorts";

// Importações futuras 
// import Shorts from "./pages/menu-page/shorts";
// import Inscricoes from "./pages/menu-page/inscrições";
// import SeuCanal from "./pages/menu-page/seu-canal";
// import Historico from "./pages/menu-page/historico";

function MinhasRotas() {
    return (
        <Routes>
            {/* ROTAS COM O HEADER E MENU LATERAL */}
            {/* O Layout abraça todas essas rotas e as injeta no <Outlet /> */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="seus-videos" element={<SeusVideos />} />
                <Route path="seu-canal" element={<SeuCanal />} /> 
                <Route path="em-desenvolvimento" element={<Desenvolvimento />} /> 
                <Route path="shorts" element={<Shorts />} />
                
                
                {/* Ativar as rotas conforme for criando os arquivos: */}
                {/* <Route path="inscricoes" element={<Inscricoes />} /> */}
                {/* <Route path="historico" element={<Historico />} /> */}
            </Route>

            {/* ROTAS DE TELA CHEIA */}
            <Route path="/search" element={<SearchMobile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createUser" element={<CreateUserPage />} />
        </Routes>
    );
}

export default MinhasRotas;