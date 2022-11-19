const inputNum = document.getElementById('input-num')
const formList = document.getElementById('form-list')
const formBtn = document.getElementById('button')
const pizzaContainer = document.getElementById('idPizza')

const Pizzas = [
    {
        id: 1,
        nombre: 'pizza de napolitana',
        precio: 700,
        ingredientes: ['tomate', 'mozzarella', 'orégano', 'aceitunas', 'aceite'],
    },
    {
        id: 2,
        nombre: 'pizza de mozzarella',
        precio: 500,
        ingredientes: ['aceite de oliva', 'salsa de tomate', 'orégano', 'sal a gusto', 'aceitunas', 'queso mozzarella'],
    },
    {
        id: 3,
        nombre: 'pizza casera',
        precio: 600,
        ingredientes: ['aceite de oliva', 'sal fina', 'levadura fresca', 'queso', 'salsa de tomate', 'jamón'],
    },
    {
        id: 4,
        nombre: 'pizza a la calabresa',
        precio: 800,
        ingredientes: ['aceite', 'sal', 'queso mozzarella en laminas', 'queso provolone rallado', '2 morrones asados', 'orégano', '1 longaniza', 'pimienta', 'aceitunas'],
    },
    {
        id: 5,
        nombre: 'pizza pepperoni',
        precio: 850,
        ingredientes: ['aceite', 'sal', '1 pimiento verde italiano', 'orégano', 'queso cheddar rallado', '300 gramos de pepperoni'],
    },
    {
        id: 6,
        nombre: 'pizza de champiniones',
        precio: 570,
        ingredientes: ['150 gramos de queso mozzarella rallado', '2 cebollas', '1 lata de champiniones', 'sal', 'pimienta', 'aceituna', 'queso parmesano rallado'],
    },
    {
        id: 7,
        nombre: 'pizza hawaiana',
        precio: 900,
        ingredientes: ['queso rallado', 'orégano', '4 rodajas de piña', '4 lonchas de jamon cocido'],
    }
]

const sendForm = (e) => {
    e.preventDefault()
    const SEARCHINPUT = inputNum.value
    console.log(`ESTOY LLAMANDO AL ${SEARCHINPUT}`)
}

const init = () => {
    formList.addEventListener('submit', sendForm)
}

init()

const pizzaId = (Pizzas) => {
    if (inputNum.value === Pizzas.id) {
        return `<h2>${Pizzas.nombre}</h2>
                <h3>${Pizzas.precio}</h3>`
    }
}

const PizzasHtml = Pizzas.map((Pizzas) => pizzaId(Pizzas)).join('')

pizzaId.innerHTML = PizzasHtml

pizzaContainer.addEventListener('submit', sendForm)