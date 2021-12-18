import Modal from "../UI/Modal"

const Cart = props =>{
    const cartItems = <ul>
    {[{id:'c1', name:'Sushi', amount :2 , price:12.99},].map((item)=><li>{item.name}</li>)}</ul>
    return (
        <Modal onClose={props.onClose}>
        <div>{cartItems}</div>
        <div>Total amount: 35.63</div>
        <button onClick={props.onClose}>Close</button>

        </Modal>
    )
}

export default Cart