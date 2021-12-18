const MealItem =props=>{
    const price = `$${props.price.toFixed(2)}`
    return (
        <li>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div>{price}</div>
            <div>
                
            </div>
        </li>
    )
}

export default MealItem