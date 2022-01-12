let nombreSupermercado: string = "Hernan";
console.log("El nombre del supermercado es", nombreSupermercado);

let producto1: string = "fideos";
let precioProducto1: number = 45;
let stockProducto1: number = 200;
console.log(
  "El producto1 es",
  producto1,
  ",su costo unitario es de $",
  precioProducto1,
  ",su stock es de",
  stockProducto1,
  "unidades"
);

let producto2: string = "azucar";
let precioProducto2: number = 70;
let stockProducto2: number = 120;
console.log(
  "El producto2 es",
  producto2,
  ",su costo unitario es de $",
  precioProducto2,
  ",su stock es de",
  stockProducto2,
  "unidades"
);

let producto3: string = "cafe";
let precioProducto3: number = 140;
let stockProducto3: number = 250;
console.log(
  "El producto3 es",
  producto3,
  ",su costo unitario es de $",
  precioProducto3,
  ",su stock es de",
  stockProducto3,
  "unidades"
);

let producto4: string = "doritos";
let precioProducto4: number = 180;
let stockProducto4: number = 200;
console.log(
  "El producto4 es",
  producto4,
  ",su costo unitario es de $",
  precioProducto4,
  ",su stock es de",
  stockProducto4,
  "unidades"
);

//En esta parte se adquieren los productos

let cantidadAdquirida1: number = 3;
let cantidadAdquirida2: number = 2;
let cantidadAdquirida3: number = 1;
let cantidadAdquirida4: number = 2;
console.log(
  "El precio total de la compra es de $",
  precioProducto1 * cantidadAdquirida1 +
    precioProducto2 * cantidadAdquirida2 +
    precioProducto3 * cantidadAdquirida3 +
    precioProducto4 * cantidadAdquirida4
);

//En esta parte se determina cuantos productos quedan en stock

console.log("Quedaron", stockProducto1 - cantidadAdquirida1, "fideos en stock");
console.log("Quedaron", stockProducto2 - cantidadAdquirida2, "azucar en stock");
console.log("Quedaron", stockProducto3 - cantidadAdquirida3, "cafe en stock");
console.log(
  "Quedaron",
  stockProducto4 - cantidadAdquirida4,
  "doritos en stock"
);
