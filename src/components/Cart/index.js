
import {Routes,Route} from 'react-router-dom';

import {useSelector} from 'react-redux'

function Cart() {
  const cartDetails = useSelector(state=>state?.cartData)
  const amount = cartDetails.length && cartDetails.map(item=>item.price).reduce((prev,next)=>prev+next,0)
  console.log(amount)
  return (
    <div className="Cart">
           <h1>Cart Page</h1>
      <div className="cart-container">
      
        <table>
          <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>catgory</td>
          </tr>
          {
            cartDetails?.map((item)=> 
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                </tr>
            )
          }
        </table>
        <div className="price-details">
            <div className='adjust-amount'><span>Amount</span><span>{amount}</span></div>
            <div className='adjust-amount'><span>Discount</span><span>{amount/10}</span></div>
            <div className='adjust-amount'><span>Tax</span><span>0000</span></div>
            <div className='adjust-amount'><span>Total</span><span>{amount-amount/10}</span></div>
        </div>
      </div>      
    </div>
  );
}

export default Cart;
