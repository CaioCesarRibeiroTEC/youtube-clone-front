import { useContext, useState } from "react";
import { UserContext } from "../../contexts/contexts";
import { api } from "../../api";
import { AddVideoButton, Container, Modal, ModalContent, UserContainer, UserName, Input, ButtonArea, Button, CloseButton } from "./styles";
import VideoComponent from "../videoComponent"; 

function SeusVideos() {
    // Extraímos a variável 'login' do contexto
    const { login, user, userVideos, createVideos, token, getVideos } = useContext(UserContext);

    const [modal, setModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');
    
    const [videoLink, setVideoLink] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const clearInputs = () => {
        setVideoLink('');
        setThumbnail('');
        setTitle('');
        setDescription('');
        setEditMode(false);
        setCurrentVideoId('');
    };

    // FUNÇÃO CORRIGIDA: Extração à prova de falhas do ID do YouTube
    const getYouTubeID = (url: string) => {
        if (!url) return null;
        // Se já for apenas o ID de 11 caracteres, retorna ele mesmo
        if (url.length === 11 && !url.includes('http')) return url;
        
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const link = e.target.value;
        setVideoLink(link);
        const videoId = getYouTubeID(link);
        if (videoId) {
            setThumbnail(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
        } else {
            setThumbnail('');
        }
    };

    // Ações de Criar e Atualizar
    const handleSaveVideo = async () => {
        if (!user || !token) return;
        if (title === '' || description === '') return alert('Preencha os campos!');

        if (editMode) {
            // Rota de UPDATE
            try {
                await api.put(`/videos/update-video/${currentVideoId}`, { title, description }, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert('Vídeo atualizado!');
                getVideos(token, user.id); // Recarrega a lista
            } catch (err) {
                alert('Erro ao atualizar.');
            }
        } else {
            // Rota de CREATE
            if (videoLink === '') return alert('Cole o link do vídeo!');
            const finalThumbnail = thumbnail || "https://via.placeholder.com/1280x720?text=Sem+Imagem";
            
            // Salvamos APENAS o ID extraído no banco para evitar quebrar o Iframe!
            const extractedId = getYouTubeID(videoLink);
            if (!extractedId) return alert('Link do YouTube inválido!');

            createVideos(title, description, extractedId, finalThumbnail);
        }
        
        setModal(false);
        clearInputs();
    };

    // Ação de Deletar
    const handleDelete = async (id: string) => {
        if (window.confirm("Tem certeza que deseja excluir este vídeo?")) {
            try {
                await api.delete(`/videos/delete-video/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert('Vídeo excluído!');
                getVideos(token, user.id); 
            } catch (err) {
                alert('Erro ao excluir.');
            }
        }
    };

    const openEditModal = (video: any) => {
        setTitle(video.title);
        setDescription(video.description);
        setVideoLink(`https://youtube.com/watch?v=${video.url}`);
        setThumbnail(video.thumbnail);
        setCurrentVideoId(video.id);
        setEditMode(true);
        setModal(true);
    };

    const videosList = Array.isArray(userVideos) ? userVideos : [];

    // Verificação de segurança: bloqueia acesso se não estiver logado
    if (!login) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', color: '#fff' }}>
                <h2 style={{ marginBottom: '10px' }}>Acesso Restrito</h2>
                <p style={{ fontSize: '18px', color: '#aaa' }}>
                    Seus vídeos estão disponíveis somente após fazer o login.
                </p>
            </div>
        );
    }

    return (
        <Container>
            <UserContainer>
                <UserName>{user?.name || 'Seus Vídeos'}</UserName>
                <AddVideoButton onClick={() => { clearInputs(); setModal(true); }}>Cadastrar Vídeo</AddVideoButton>
                
                <Modal $hideModal={modal}>
                    <ModalContent>
                        <CloseButton onClick={() => { setModal(false); clearInputs(); }}>X</CloseButton>
                        
                        <div style={{marginBottom: '10px'}}>
                            <label style={{fontSize: '14px', fontWeight: 'bold'}}>Link do Vídeo (YouTube)</label>
                            <Input 
                                type="text" placeholder="Cole o link aqui..." 
                                value={videoLink} onChange={handleLinkChange} 
                                disabled={editMode} // Não deixa mudar o link na hora de editar
                                style={{ backgroundColor: editMode ? '#f2f2f2' : '#fff' }}
                            />
                        </div>

                        {thumbnail && (
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                                <img src={thumbnail} alt="Preview" style={{height: '80px', borderRadius: '8px', objectFit: 'cover'}} />
                            </div>
                        )}
                        
                        <Input type="text" placeholder="Título do Vídeo" value={title} onChange={(e) => setTitle(e.target.value)} style={{marginBottom: '10px'}}/>
                        <Input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                        
                        <ButtonArea>
                            <Button onClick={handleSaveVideo}>{editMode ? 'Salvar Alterações' : 'Importar Vídeo'}</Button>
                        </ButtonArea>
                    </ModalContent>
                </Modal>
            </UserContainer>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px 16px', width: '100%' }}>
                {videosList.length > 0 ? (
                    videosList.map((video: any) => (
                        <div key={video.id} style={{ position: 'relative' }}>
                            <VideoComponent
                                videoId={video.url} // Agora nós garantimos que o banco só salva a ID de 11 letras!
                                thumbnailUrl={video.thumbnail}
                                title={video.title}
                                channelImage={user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                channelName={user?.name || "Canal"} 
                                details="0 visualizações"
                            />
                            
                            {/* Botões de Ação por cima do cartão do vídeo */}
                            <div style={{ position: 'absolute', top: 5, right: 5, display: 'flex', gap: '5px', zIndex: 10 }}>
                                <button 
                                    onClick={() => openEditModal(video)}
                                    style={{ padding: '5px 10px', background: '#065fd4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                                >Editar</button>
                                <button 
                                    onClick={() => handleDelete(video.id)}
                                    style={{ padding: '5px 10px', background: '#cc0000', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                                >Excluir</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{gridColumn: '1 / -1', textAlign: 'center', marginTop: '50px'}}>
                        <h3>Nenhum vídeo cadastrado.</h3>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default SeusVideos;