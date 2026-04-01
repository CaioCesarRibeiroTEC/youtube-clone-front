import { useContext, useState } from "react";
import { UserContext } from "../../contexts/contexts";
import NextIcon from "../../assets/home-icons/next-button.png";
import BackIcon from "../../assets/home-icons/back-button.png";
import * as S from "./styles";

function MenuPesquisa() {
  const { openMenu, setCategoryId } = useContext(UserContext);
  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderWidth = 200; 
  const containerWidth = 400; 

  function searchCategory(id: string) {
    setCategoryId(id);
  }

  const nextClick = () => {
    if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
      setSliderPosition((prev) => prev - sliderWidth);
    }
  };

  const backClick = () => {
    if (sliderPosition < 0) {
      setSliderPosition((prev) => prev + sliderWidth);
    }
  };

  const categoryButtons = [
    {name: 'Tudo', id: '0'}, {name: 'Games', id: '20'}, {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'}, {name: 'Música', id: '10'}, {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'}, {name: 'Animais e pets', id: '15'}, {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'}, {name: 'Shorts', id: '26'}, {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'}, {name: 'Esportes', id: '17'}, {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'}, {name: 'Jornais', id: '25'}, {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'}, {name: 'Ciências', id: '15'}, {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'}, {name: 'Novidades', id: '24'}, {name: 'Educação', id: '1'}, 
    {name: 'Ciência e tecnologia', id: '2'}, {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, {name: 'Moda e estilo', id: '23'}, {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'},
  ];

  return(
    <S.MenuPesquisaContainer $openMenu={openMenu}>
      <S.SliderButtons onClick={backClick}>
        <S.ButtonIcon alt="voltar" src={BackIcon} />
      </S.SliderButtons>

      <S.ButtonsContainer>
        <S.ButtonsContent style={{ transform: `translateX(${sliderPosition}px)`, transition: '0.5s ease-in-out' }}>
          {categoryButtons.map((button, index) => (
            <S.Button onClick={() => searchCategory(button.id)} key={index}>
              <b>{button.name}</b>
            </S.Button>
          ))}
        </S.ButtonsContent>
      </S.ButtonsContainer>
      
      <S.SliderButtons onClick={nextClick}>
        <S.ButtonIcon alt="próximo" src={NextIcon} />
      </S.SliderButtons>
    </S.MenuPesquisaContainer>
  );
}

export default MenuPesquisa;