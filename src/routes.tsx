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


function MinhasRotas() {
    return (
        <Routes>
            {/* ROTAS COM O HEADER E MENU LATERAL */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="seus-videos" element={<SeusVideos />} />
                <Route path="seu-canal" element={<SeuCanal />} /> 
                <Route path="em-desenvolvimento" element={<Desenvolvimento />} /> 
                <Route path="shorts" element={<Shorts />} />
            </Route>

            {/* ROTAS DE TELA CHEIA */}
            <Route path="/search" element={<SearchMobile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createUser" element={<CreateUserPage />} />
        </Routes>
    );
}

export default MinhasRotas;