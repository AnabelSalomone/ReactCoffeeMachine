import React from 'react'

const Cart = (props) => {
    const drink = props.drink
    const extra = props.extra
    const currentTotal = props.total
    const wholeTotal = props.wholeTotal
    console.log(wholeTotal)

    let phrase = ""
    let totalPhrase = `for a total of ${currentTotal}€`

    if(drink.length > 0 && extra.length === 0){
        phrase = <div>Your order: {drink} {totalPhrase}</div>
    } else if (drink.length > 0 && extra.length > 0) {
        phrase = <div> Your order: {drink} with {extra} {totalPhrase}</div>
    } else if (wholeTotal > 0) {
      phrase = <div>Do you want another drink?</div>;
    } else {
      phrase = <div>Please, select a drink</div>;
    }

    return phrase
}

export default Cart
