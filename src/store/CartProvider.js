import { useReducer } from "react";
import cardContext from "./cart-context"

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state, action)=>{
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            item:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
}


const CartProvider = props=>{
    const [cartState, dispatchCartAction] =useReducer(cartReducer, defaultCartState )
    const addItemCartHandler = item =>{
        dispatchCartAction({type: 'ADD', item:item})
    }
    const removeItemCartHandler= id =>{
        dispatchCartAction({type: 'REMOVE', id:id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount :cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem : removeItemCartHandler
    }
    return (
        <cardContext.Provider value={cartContext}>
            {props.children}
        </cardContext.Provider>
    )
}

export default CartProvider