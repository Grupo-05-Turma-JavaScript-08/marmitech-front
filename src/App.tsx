
import './App.css'
import Footer from './component/footer/Footer'
import NavBar from './component/navbar/NavBar'
import Home from './pages/home/Home'

function App() {


  return (
    <>
    <div className='bg-gradient-to-b from-[#FDC749] to-[#FDC749]/70
    min-h-screen'>
       <NavBar />
      <Home />
    </div>
    <Footer />
     
    </>
  );
}

export default App;
