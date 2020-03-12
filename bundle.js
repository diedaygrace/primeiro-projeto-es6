"use strict";

//operações com Array em ES6+
var array = [1, 3, 4, 5, 8, 9]; //Map: percorre o array e retorna um valor

var novoArray = array.map(function (item, index) {
  return item * 2;
});
console.log(novoArray); //Reduce: consumir todo o vetor e transformar em uma única informação

var soma = array.reduce(function (total, proximoValor) {
  return total + proximoValor;
});
console.log(soma); //Filter: filtrar somente os itens que queremos

var filterPares = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var usuarios = [{
  nome: "Usuario 1",
  idade: 10
}, {
  nome: "Usuario 2",
  idade: 15
}, {
  nome: "Usuario 3",
  idade: 18
}];
var novosUsuarios = usuarios.filter(function (usuario) {
  return usuario.idade >= 15;
});
console.log(novosUsuarios); //Find: encontra um item do array

var find = usuarios.find(function (item) {
  return item.nome === "Usuario 1";
});
console.log(find); //forEach: percorre o array porem não precisa retornar um valor

usuarios.forEach(function (item, index) {
  console.log(item);
});
