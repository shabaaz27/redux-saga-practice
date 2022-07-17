import {cart} from '../../assets'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Header = ()=>{
    const result = useSelector((state)=>state?.cartData)
    console.log("result==>",result)
    return(
            <div className="header">
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