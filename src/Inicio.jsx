import { Titulo } from "./componentes/Titulo";
import { Campo } from "./componentes/Campo";
import { Conteudo } from "./componentes/Conteudo";
import { useState, useEffect } from "react";

import axios from "axios";

export function Inicio(){

    const [codigos, setCodigos] = useState([]);
    const [conteudos, setConteudos] = useState({});

    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(()=> {
        async function buscarlivros(){
            setCarregando(true);
            try {
                const resposta = await axios.get("http://localhost:4000/api")
                const dados = resposta.data
            

            setCodigos(Object.keys(dados));
            setConteudos(dados);
            } catch(erro) {
                setErro("Erro ao carregar os dados");
                console.error(erro);
            } finally {
                setCarregando(false);
            }
        }
        buscarlivros();
    },[]);

    if (carregando) {
        return <p> Carregando...</p>;
    }
    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <div>
            <Titulo nome="Bem Vindo à biblioteca virtual" imagem="https://i.ibb.co/pvxTtvsw/livros-Banner.jpg"/>
            <Campo>
                {codigos.map(function (codigo) {
                    return (
                    <Conteudo 
                    key={codigo}
                    capa={conteudos[codigo].capa} 
                    titulo={conteudos[codigo].titulo}
                    genero={conteudos[codigo].genero}
                    ano={conteudos[codigo].ano}
                    autor={conteudos[codigo].autor}/>  
                    
                    );
                })}
                
            </Campo>
        </div>
    );
}