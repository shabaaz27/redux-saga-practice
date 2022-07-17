import { useEffect } from 'react';
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
useEffect(()=>{
  dispatch(productList())
},[])

  return (
    <>
        {/* <section><button onClick={()=>dispatch(addToCart(car))}>Add to Cart</button></section>
        <section><button onClick={()=>dispatch(removeFromCart(cartDetails[0]?.id))}>Remove from Cart</button></section>
        
        <section><button onClick={()=>dispatch(productList())}>get Product</button></section> */}
        <section><button onClick={()=>dispatch(emptyCart())}>Delete Cart</button></section>
        <section className='product-container'>
          {
            data && data.map((item)=><div key={item.id} className='product-item' style={{textAlign:"center",margin:"10px"}}>
              <img src={item.photo} alt="picture"/>
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Brand: {item.brand}</div>
              <div>Price: {item.price}</div>
              <div>
                <button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
                <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove From Cart</button>
              </div>
            </div>
          )
          }
        </section>
    </>
  );
}

export default Main;
