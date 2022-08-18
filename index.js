
class Pizza {
    constructor (id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}



const pizzas = [
    new Pizza (1, 'Muzzarella', ['Muzzarella ', ' Orégano', ' Aceitunas Verdes'], 400),
    new Pizza (2, 'Fugazzetta', ['Muzzrell', 'Cebolla', 'Orégano', 'Aceitunas Negras'], 600),
    new Pizza (3, 'Provolone', ['Provolone', 'Tomate', 'Aceitunas Negras'], 800),
    new Pizza (4, 'Mediterranea', ['Burrata', 'Albahaca', 'Aceite de oliva', 'Jamón Crudo'], 1200),
    new Pizza (5, 'Jamón y Morrones', ['Muzzarella', 'Jamón', 'Morrones', 'Aceitunas Verdes'], 550),
    new Pizza (6, 'Tremenda', ['Cheddar', 'Bacon', 'Huevo Frito', 'Papas Fritas'], 2000)
];


//a) Las pizzas que tengan un id impar.

pizzas.forEach((pizzaId)=> {
    pizzaId.id % 2 !==0? console.log (`La pizza ${pizzaId.nombre} tiene un id impar.`)
    : null;
})



//b) ¿Hay alguna pizza que valga menos de $600?

pizzas.forEach((pizzaPrecio)=>{
    pizzaPrecio.precio <= 600? console.log(`La pizza ${pizzaPrecio.nombre} tiene un precio de $${pizzaPrecio.precio}`)
    : null;
})


// c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach((pizzaNombrePrecio)=> console.log(`${pizzaNombrePrecio.nombre} $${pizzaNombrePrecio.precio}`));


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). 

pizzas.forEach ((pizza)=>{
    console.log(`La Pizza ${pizza.nombre} tiene: `);
    pizza.ingredientes.forEach((ingrediente)=>{
        console.log(`- ${ingrediente}`)
    })
})


