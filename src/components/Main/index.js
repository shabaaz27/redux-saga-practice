import {useDispatch,useSelector} from 'react-redux'
import { addToCart, emptyCart, removeFromCart} from '../../redux/actions/action';
import { productList } from '../../redux/actions/productActions';

function Main() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.productListReducer)
  const cartDetails = useSelector(state=>state.cartData)
  console.log("data===>",data)

  const id = Math.random() * 2 + 1
  const car = {type:"Fiat", model:"500", color:"white",id}
  return (
    <>
        <section><button onClick={()=>dispatch(addToCart(car))}>Add to Cart</button></section>
        <section><button onClick={()=>dispatch(removeFromCart(cartDetails[0]?.id))}>Remove from Cart</button></section>
        <section><button onClick={()=>dispatch(emptyCart())}>Delete Cart</button></section>
        <section><button onClick={()=>dispatch(productList())}>get Product</button></section>
    </>
  );
}

export default Main;
