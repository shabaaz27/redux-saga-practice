import {cart} from '../../assets'
import { useSelector,useDispatch } from 'react-redux'
import { productSearch } from '../../redux/actions/productActions'
import {Link} from 'react-router-dom'

const Header = ()=>{
    const dispatch = useDispatch()
    const result = useSelector((state)=>state?.cartData)
    console.log("result==>",result)
    return(
            <div className="header">
                <Link to="/">
                <h1 style={{float:"left",paddingLeft:"20px"}}>Logo</h1>
                </Link>
                <input type="text" onChange={(e)=>dispatch(productSearch(e.target.value))} placeholder='Search Product'/>
                <Link to="/cart">
                    
                       
                  
                <div className="cart-div">
                    <span style={{fontSize:"15px"}}>{result.length}</span>
                    <img src={cart} alt="cart"/>
                </div>
                </Link>
            </div>

    )
}

export default Header