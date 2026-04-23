import styled from "styled-components";

const Banner = styled.header`
    background-image: url(${props => props.imagem});
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width: 80%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 0 auto;

`

const Texto = styled.h1`
    color: white;
    font-size: 3rem;
    text-align: center;
`
export function Titulo({nome, imagem}) {
    return (
        <Banner imagem={imagem}>
            <Texto>{nome}</Texto>
        </Banner>
    )
}