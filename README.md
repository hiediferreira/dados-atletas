**Projeto desenvolvido na trilha 1 do DEVstart** ️️

# 🎓 Projeto de certificação 2 - Dados dos atletas

### Resumo do projeto 
Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

### Introdução
Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

### Especificações
Você deverá criar uma **classe Atleta** para concentrar os atributos e métodos dos atletas.  
:purple_circle: A classe deverá receber os seguintes atributos:  
:heavy_check_mark:nome  
:heavy_check_mark:idade  
:heavy_check_mark:peso  
:heavy_check_mark:altura  
:heavy_check_mark:notas  

:purple_circle: A classe deverá possuir os seguintes métodos:  
:heavy_check_mark:calculaCategoria(), para calcular a categoria do atleta;  
:heavy_check_mark:calculaIMC(), para calcular o IMC do atleta;  
:heavy_check_mark:calculaMediaValida(), para calcular a média válida do atleta.  
:heavy_check_mark:obtemNomeAtleta(), que retorna o nome do atleta  
:heavy_check_mark:obtemIdadeAtleta(), que retorna a idade do atleta  
:heavy_check_mark:obtemPesoAtleta(), que retorna o peso do atleta  
:heavy_check_mark:obtemNotasAtleta(), que retorna as notas do atleta  
:heavy_check_mark:obtemCategoria(), que retorna a categoria do atleta  
:heavy_check_mark:obtemIMC(), que retorna o IMC do atleta  
:heavy_check_mark:obtemMediaValida(), que retorna a média válida do atleta  

:purple_circle: Utilize as seguintes regras:    
1. Para calcular a categoria:  
Infantil: 9 a 11 anos;    
Juvenil: 12 e 13 anos;  
Intermediário: 14 e 15 anos;  
Adulto: 16 a 30 anos;  
Sem categoria: demais idades.  

2. Para calcular o IMC:  
Fórmula: imc = peso / (altura x altura)  

3. Para calcular a média válida:  
Método: Utilize o metodologia abordada no Projeto de Certificação 1.  

:purple_circle: Exemplo de entrada  
// Declara o atleta
const atleta = new Atleta("Cesar Abascal",  
    30, 80, 1.70,  
    [10, 9.34, 8.42, 10, 7.88]);  

:purple_circle: Exemplo de saída  
Nome: Cesar Abascal  
Idade: 30  
Peso: 80  
Altura: 1.7  
Notas: 10,9.34,8.42,10,7.88  
Categoria: Adulto  
IMC: 27.68166089965398  
Média válida: 9,25333333
