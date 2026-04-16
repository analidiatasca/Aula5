import { Titulo } from "./componentes/Titulo";
import { Campo } from "./componentes/Campo";

export function Inicio(){
    return (
        <div>
            <Titulo nome="Bem Vindo à biblioteca virtual" imagem="https://i.ibb.co/pvxTtvsw/livros-Banner.jpg"/>
            <Campo>
                <p>Dentro do campo vai o componente Conteudo</p>
            </Campo>
        </div>
    );
}