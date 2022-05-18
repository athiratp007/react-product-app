import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductEntry from './Components/ProductEntry';
import SearchProduct from './Components/SearchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'exact element={<ProductEntry/>}/>
        <Route path='/search'exact element={<SearchProduct/>}/>
        <Route path='/view'exact element={<ViewAll/>}/>
        


      </Routes>
    
      </BrowserRouter>
    </div>
    
  );
}

export default App;
