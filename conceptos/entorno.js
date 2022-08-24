/*Un valor que no vaya dentro del software?*/

//Variables de entorno (OR para valor por defecto)
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web'
console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

// NOMBRE=Axel node conceptos/entorno.js
// NOMBRE=Axel WEB=baserex.com node conceptos/entorno.js

//Variables de entorno que vienen desde afuera se ponen en mayúscula. Sin 2 palabras MI_WEB 