import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.View`
  flex: 1;
  background-color: #FDF5E6;
`;
const Cabecalho = styled.View`
    height: 130;
    justify-content: center;
    align-items: center;
`;
//componente de texto
const Texto = styled.Text`
    font-size: 18;
    padding-top: 20;
    font-weight: bold;
`;
const Texto1 = styled.Text`
    font-size: 26;
    padding-top: 20;
    font-weight: bold;
`;
//componente de corpo
const Corpo = styled.View`
    display: flex;
    flex-direction: row;
    padding: 40px;
    padding-top: 5px;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
`;
//componente de imagem
const Imagem = styled.Image`
    width: 48%;
    height: 140;
    border-radius: 8;
    background-color: "#dcdcdc;
    margin-top: 20px;
    
`;
const Imagem2 = styled.Image`
    width: 100%;
    height: 140;
    border-radius: 8;
    background-color: "#dcdcdc;
    margin-top: 20px;
    
`;
//corpo do app
export default function App() {
  return (
    <Pagina>
        <Cabecalho>
            <Texto>Galeria de Imagens: Arliene Batista</Texto>
            <Texto1>Pães Caseiros</Texto1>
        </Cabecalho>
        <Corpo>
            {/* imagem interna */}
            <Imagem source={require("./src/imagens/pao01.jpg")} />
            <Imagem source={require("./src/imagens/pao02.jpg")} />
            <Imagem source={require("./src/imagens/pao03.jpg")} />
            <Imagem source={require("./src/imagens/pao04.jpg")} />
            {/* imagem externa */}
            <Imagem2 source={{uri: 'https://i.ytimg.com/vi/3SMyiO2Yzk0/maxresdefault.jpg'}}
            />
        </Corpo>
    </Pagina>
  );
}


