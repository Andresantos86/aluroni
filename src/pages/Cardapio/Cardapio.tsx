import styles from './Cardapio.module.scss';
import { ReactComponent as LogoAluroni } from 'assets/logoAluroni.svg';
import Buscador from './Buscador/Buscador';
import { useState } from 'react';
import Filtros from './Filtros/Filtros';
import Ordenador from './Ordenador/Ordenador';
import Itens from './Itens/Itens';


export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <nav className={styles.menu}>
        <LogoAluroni />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Casa da Massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador
          busca={busca}
          setBusca={setBusca}
        />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}