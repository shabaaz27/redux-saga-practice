import logo from './logo.svg';
import {addToCart} from './redux/actions/action';

import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const car = {type:"Fiat", model:"500", color:"white"}
  return (
    <div className="App">
          <button onClick={()=>dispatch(addToCart(car))}>Add to Cart</button>
    </div>
  );
}

export default App;
