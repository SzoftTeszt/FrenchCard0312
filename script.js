class Card extends HTMLElement{
    constructor(){
        super()
        console.log(this.offsetWidth)
        let card= document.createElement('div')
        card.className="card"

        let value=document.createElement('div')
        value.className="value"
        let signs=['♣','♦','♥','♠'];
        let sign=document.createElement('div')
        sign.className="sign"
        let jel= Number(this.dataset.sign)
        sign.innerHTML=signs[jel]

        if (jel==1 || jel==2) card.classList.add('red')

       

        let number=document.createElement('div')
        number.className="number"
        number.innerHTML="10"
        
        let ertek= Number(this.dataset.value)
        if (ertek<2 || ertek>14) ertek=14
        number.innerHTML= String(ertek)

        let tisztek= ['J','Q','K','A']
        if (ertek>10)  number.innerHTML= tisztek[ertek-11]


        value.appendChild(number)
        value.appendChild(sign)

        card.appendChild(value)
        card.appendChild(sign.cloneNode(true))
        card.appendChild(value.cloneNode(true))

        let link= document.createElement('link')
        link.rel="stylesheet"
        link.href="./card.css"

        const shadow = this.attachShadow({mode:'open'})

        shadow.appendChild(link)
        shadow.appendChild(card)
    }
}
customElements.define('my-card',Card)