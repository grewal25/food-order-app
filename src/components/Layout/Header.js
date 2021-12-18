import mealsImage from '../../assets/meals.jpeg'
import HeaderCardButton from './HeaderCardButton'

const Header = props =>{
    return (
        <div>
            <header>
                <h1>FOOD APP</h1>
                <HeaderCardButton />
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} alt="food image"/>
            </div>
        </div>
    )
}

export default Header