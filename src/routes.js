import Menu from 'components/menu/Menu';
import Cardapio from 'pages/Cardapio/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes> {/* funciona como switch para na primeira rota que encontra  e no ROUTE e onde ele abre*/}
        <Route path='/' element={<Inicio />} />
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </Router>
  );
}