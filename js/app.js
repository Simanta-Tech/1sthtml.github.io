document.addEventListener('DOMContentLoaded',()=>{
    //card option
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'blank',
        img: 'images/blank.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'cheeseburger.png',
        img: 'images/cheesburger.png'
    },
    {
        name: 'ice-cream.png',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake.png',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'images/piza.png'
    },
    {
        name: 'white',
        img: 'images/white.png'
    }

]
const grid = document.querySelector.apply('.grid')
//create board
function createBoard()
{
    for(let i =0;i<cardArray.length;i++)
    {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('date-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}
createBoard()

})