import Header from './components/header';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          {/* <Main/> */}
    </div>
  );
}

export default App;
