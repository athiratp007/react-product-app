import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductEntry from './Components/ProductEntry';
import SearchProduct from './Components/SearchProduct';

function App() {
  return (
    <div>
<ProductEntry/>
<SearchProduct/>
    </div>
    
  );
}

export default App;
