import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCardButton =props=>{
    const cardCtx = useContext(CartContext)
    const numberOfCartItems = cardCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);
    return (
        <>
        <button onClick = {props.onClick}>
        <span>*</span>
        
        <span>Your Cart</span>
        <span> --$3-- </span>
        <span> -- {`total item ${numberOfCartItems}`}</span>
        </button>
        

        </>
    )
}

export default HeaderCardButton