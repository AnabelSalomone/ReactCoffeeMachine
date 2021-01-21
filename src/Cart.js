import React from 'react'

const Cart = (props) => {
    const drink = props.drink
    const extra = props.extra
    const total = props.total

    let phrase = ""
    let totalPhrase = `for a total of ${total}€`

    if(drink.length > 0 && extra.length === 0){
        phrase = <div>Your order: {drink} {totalPhrase}</div>
    } else if (drink.length > 0 && extra.length > 0) {
        phrase = <div> Your order: {drink} with {extra} {totalPhrase}</div>
    } else {
        phrase = <div>Please, select a drink</div>
    }

    return phrase
}

export default Cart
