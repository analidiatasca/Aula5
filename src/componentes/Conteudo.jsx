import styled from "styled-components";

const ModeloConteudo = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px
`
const ConteudoCapa = styled.img`
  height: 200px ;
  transition: 0.2;

  &:hover {
    transform: scale(1.2) ;
    transition: 0.5s;
  }
`
const ConteudoTitulo = styled.div`
    margin: 16px 0;
    text-aling: center;
`

const ConteudoInfo = styled.div`
    color: #555;
    font-size: 12pt;
    text-align: center;
`

export function Conteudo({capa, titulo, genero, ano, autor}) {
    return( <ModeloConteudo>
        <ConteudoCapa src={capa} alt="Capa do livro"/>
        <ConteudoTitulo> {titulo} </ConteudoTitulo>
        <ConteudoInfo> {genero.join(",")} </ConteudoInfo>
        <ConteudoInfo>{ano}</ConteudoInfo>
        <ConteudoInfo>{autor}</ConteudoInfo>
    </ModeloConteudo>);
}
