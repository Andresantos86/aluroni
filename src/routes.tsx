import Footer from 'components/Footer/Footer';
import Menu from 'components/menu/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cardapio = lazy(() => import('pages/Cardapio/Cardapio'))
const PaginaPadrao = lazy(() => import('components/PaginaPadrao/Padrao'))
const Inicio = lazy(() => import('pages/Inicio'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))
const Prato = lazy(() => import('pages/Prato/Prato'))
const Sobre = lazy(() => import('pages/Sobre/Sobre'))

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p> Carregando...</p>}>
          <Routes>{/**Nexted Routes = */}
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='prato/:id' element={<Prato />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}