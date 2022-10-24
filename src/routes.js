import Footer from 'components/Footer/Footer';
import Menu from 'components/menu/Menu';
import PaginaPadrao from 'components/menu/PaginaPadrao/Padrao';
import Cardapio from 'pages/Cardapio/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound/NotFound';
import Sobre from 'pages/Sobre/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu/>
        <Routes>{/**Nexted Routes = */}
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>}/>
            <Route path='cardapio' element={<Cardapio/>}/>
            <Route path='sobre' element={<Sobre/>}/>            
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}