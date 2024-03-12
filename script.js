class Card extends HTMLElement{
    constructor(){
        super()
        
        let card= document.createElement('div')
        card.className="card"

        let value=document.createElement('div')
        value.className="value"
        //  ♣♦♥♠
        let sign=document.createElement('div')
        sign.className="sign"
        sign.innerHTML="♥"

        let number=document.createElement('div')
        number.className="number"
        number.innerHTML="10"

        value.appendChild(number)
        value.appendChild(sign)

        card.appendChild(value)
        card.appendChild(sign.cloneNode(true))
        card.appendChild(value.cloneNode(true))

        let link= document.createElement('link')
        link.rel="stylesheet"
        link.href="./style.css"

        const shadow = this.attachShadow({mode:'open'})

        shadow.appendChild(link)
        shadow.appendChild(card)
    }
}
customElements.define('my-card',Card)