import estilos from './SecaoDepoimento.module.css';
import Image from 'next/image';

export default function Depoimentos(props){
    return (
            <div className={estilos.container_depoimentos}>
                <Image className={estilos.img} 
                src={props.imagem} 
                alt={props.nome} 
                title={props.nome}
                />
                <h3>{props.nome}</h3>
                <p>{props.descricao}</p>
            </div>
    );
}