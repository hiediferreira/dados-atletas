class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    obtemCategoria(){
        //retorna a categoria do atleta
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        } else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        } else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        } else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    obtemIMC(){
        //retorna o IMC do atleta
        let imc = this.peso/this.altura**2
        return imc
    }

    obtemMediaValida(){
        //retorna a média válida do atleta
        let soma = this.notas.reduce(function(total, atual){
            return total + atual;
        }, 0)
        return soma / this.notas.length;
    }
    
    obtemNomeAtleta(){
        //retorna o nome do atleta
        return this.nome;
    }

    obtemIdadeAtleta(){
        //retorna a idade do atleta
        return this.idade;
    }
    
    obtemPesoAtleta(){
        //retorna o peso do atleta
        return this.peso;
    }

    obtemNotasAtleta(){
        //retorna as notas do atleta
        return this.notas.join(", ");
    }

    infoAtleta(){
        return `
        Nome: ${this.obtemNomeAtleta()}
        Idade: ${this.obtemIdadeAtleta()}
        Peso: ${this.obtemPesoAtleta()}
        Altura: ${this.altura}
        Notas: ${this.obtemNotasAtleta()}
        Categoria: ${this.obtemCategoria()}
        IMC: ${this.obtemIMC()}
        Média válida: ${this.obtemMediaValida()}
        `
    }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.infoAtleta())
