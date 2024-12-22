import Dente from '../../../../public/dente.png';
import Image from 'next/image';
import estilos from './Topo.module.css';

export default function Topo(){
    return (
        <header className={estilos.container_topo}>
            <div className={estilos.container_logo}>
            <Image src={Dente} alt="logo dentes saudáveis" title="logo dentes saudáveis"/> 
            </div>
            <p>Dentes Saudáveis</p>
        </header>
    );
}