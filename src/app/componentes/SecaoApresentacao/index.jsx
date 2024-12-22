import estilos from './SecaoApresentacao.module.css';
import Image from 'next/image';
import Dente from '../../../../public/dente.png';

export default function SecaoApresentacao(){
    return (
        <section className={estilos.container_apresentacao}>
            <div className={estilos.container_texto}>
                <h1>OS MELHORES <span>APARELHOS DENTÁRIOS</span>!</h1>
                <p> Confira abaixo todas as especialidades odontológicas que temos à sua
                disposição!</p>
            </div>

            <ul className={estilos.lista_servicos}>
                <li>
                    <Image src={Dente} alt="logo" title="logo" />
                    <p>Pré-avaliação</p>
                </li>

                <li>
                    <Image src={Dente} alt="logo" title="logo" />
                    <p>Aparelhos Dentários</p>
                </li>

                <li>
                    <Image src={Dente} alt="logo" title="logo" />
                    <p>Raio-X digital</p>
                </li>

                <li>
                    <Image src={Dente} alt="logo" title="logo" />
                    <p>Clareamento dental</p>
                </li>
            </ul>
        </section>
    );
}