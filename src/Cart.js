import React from 'react'

const Cart = (props) => {
    const drink = props.drink
    const extra = props.extra

    let phrase = ""

    if(drink.length > 0 && extra.length === 0){
        phrase = <div>Your order: {drink}</div>
    } else if (drink.length > 0 && extra.length > 0) {
        phrase = <div> Your order: {drink} with {extra}</div>
    } else {
        phrase = <div>Please, select a drink</div>
    }

    return phrase
}

export default Cart
