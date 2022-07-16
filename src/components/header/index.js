import {cart} from '../../assets'
import { useSelector } from 'react-redux'
const Header = ()=>{
    const result = useSelector((state)=>state?.cartData)
    console.log("result==>",result)
    return(
            <div className="header">
                <div className="cart-div">
                    <span style={{fontSize:"15px"}}>{result.length}</span>
                    <img src={cart} alt="cart"/>
                </div>

            </div>

    )
}

export default Header