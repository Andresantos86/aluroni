import Menu from 'components/menu/Menu';
import Cardapio from 'pages/Cardapio/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './Routes.modules.scss';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>
            Casa da Massa
          </div>
        </header>
        <Routes> {/* funciona como switch para na primeira rota que encontra  e no ROUTE e onde ele abre*/}
          <Route path='/' element={<Inicio />} />
          <Route path='/cardapio' element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  );
}