export default function BurgerDisplayComponent({ imgUrl, name }) {
    return <div className="burgerContainer">
        <div className="burgerContainerText">
            <h1 style={name.length > 11 ? { fontSize: 'large' } : {}}>{name}</h1>
        </div>
        <div className="burgerContainerImage">
            <img src={imgUrl||"https://i.imgur.com/o9OdsX1.png"} alt="Image of a burger" />
        </div>
    </div>
}

