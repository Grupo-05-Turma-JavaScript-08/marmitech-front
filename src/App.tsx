
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './component/footer/Footer'
import NavBar from './component/navbar/NavBar'
import ListaProduto from './component/produto/listaproduto/ListaProduto';
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre';

function App() {


  return (
    <>
      <BrowserRouter>
        <div className='bg-gradient-to-b from-[#FDC749] to-[#FDC749]/70
    min-h-[90vh]'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<ListaProduto />} />
            <Route path='/sobre' element={<Sobre />}  />

          </Routes>
        </div>
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
