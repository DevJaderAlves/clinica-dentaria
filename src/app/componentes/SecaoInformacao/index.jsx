import estilos from './SecaoInformacao.module.css';

export default function Informacao(props){
    return (
        <div className={estilos.moldura}>
            <h3>Informações</h3>
            <div className={estilos.info}>{props.children}</div>
        </div>
    );
}