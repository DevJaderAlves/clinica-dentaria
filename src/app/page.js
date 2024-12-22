import SecaoApresentacao from "./componentes/SecaoApresentacao";
import Topo from "./componentes/Topo";
import Beneficios from "./componentes/SecaoBenificios";
import Depoimentos from "./componentes/SecaoDepoimento";
import Informacao from "./componentes/SecaoInformacao";
import Localizacao from "./componentes/SecaoLocalizacao";
import Rodape from "./componentes/SecaoLocalRodape";
import Cliente1 from '../../public/cliente1.png';
import Cliente2 from '../../public/cliente2.png';
import Cliente3 from '../../public/cliente3.png';
import Medica from '../../public/medica.png';
import Medico from '../../public/medico.png';
import estilos from './page.module.css';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <Topo />
      </header>
      <section>
        <SecaoApresentacao />
      </section>
      <section>
        <Beneficios />
      </section>
      <section className={estilos.container_principal}>
                <h2>VEJA O QUE NOSSOS <span>CLIENTES</span> ESTÃO FALANDO...</h2>
        <div className={estilos.container_cards}>
        <Depoimentos
            imagem={Cliente1}
            nome={"Alberto"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
          <Depoimentos
            imagem={Cliente2}
            nome={"Eliana"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
          <Depoimentos
            imagem={Cliente3}
            nome={"Carla"}
            descricao={"Por dois anos, eu fiz um tratamento com o Dentes Saudáveis, que me atendeu com profissionalismo e cuidado."}
          />
        </div>
      </section>
      <section className={estilos.container_principal}>
        <div className={estilos.container_cards}>
          <Informacao>
            <ul className={estilos.horarios}>
              <li>Segunda - 09:00 às 18:00</li>
              <li>Terça - 09:00 às 18:00</li>
              <li>Quarta - 09:00 às 18:00</li>
              <li>Quinta - 09:00 às 18:00</li>
              <li>Sexta - 09:00 às 17:00</li>
              <li>Sábado - 09:00 às 12:00</li>
            </ul>
          </Informacao>
          <Informacao>
            <div className={estilos.card_profissional}>
              <div>
                <Image
                  className={estilos.img_profissional}
                  src={Medica}
                  alt="Dr. Ana"
                  title="Dr. Ana"
                />
              </div>
              <div>
                <p>Dra. Ana - Ortodontista</p>
                <p>Segundas e sextas</p>
              </div>
            </div>
            <div className={estilos.card_profissional}>
              <div>
                <Image
                  className={estilos.img_profissional}
                  src={Medico}
                  alt="Dr. Carlos"
                  title="Dr. Carlos"
                />
              </div>
              <div>
                <p>Dr. Carlos - Endodontia</p>
                <p>Terças e quartas</p>
              </div>
            </div>
            </Informacao>
            <Informacao>
              <div className={estilos.contato}>
                <p>Ligue para agendar uma consulta:</p>
                <p>(21) 3699 - 9999</p>
                <p>(21) 97788 - 5566</p>
              </div>
            </Informacao>
        </div>
      </section>
      <section>
        <Localizacao/>
      </section>
      <footer>
        <Rodape/>
      </footer>
    </main>
  );
}
