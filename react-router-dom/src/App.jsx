import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Detail from './pages/Detail';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Category from './pages/Category';

function App() {
  return (
<BrowserRouter>
<div className='page'>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/category' element={<Category/>}/>
    <Route path="/detail/:id" element={<Detail />} />
    <Route path="/product" element={<Product/>} />
    <Route path="*" element={<NotFound/>} />
 
  </Routes>
  <Footer/>
  </div>
</BrowserRouter>
  )
}

export default App;
