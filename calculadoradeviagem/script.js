
let nome=prompt("Digite seu nome");
let distancia= parseInt(prompt("Digite sua distancia média"));
let velocidade=parseInt(prompt("Digite sua velocidade média"));
let consumo=parseInt(prompt("Digite o consumo do carro"));
let preco=parseInt(prompt("Digite o preço da gasolina"));

let tempo = distancia / velocidade;
let litros = distancia / consumo;
let custo = litros * preco;

alert("resultado"+tempo);
alert("resultado"+litros);
alert("resultado"+custo);



