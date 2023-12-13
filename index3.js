class Heroi {
    
    constructor (nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        const classesDisponiveis = ["guerreiro", "mago", "monge", "ninja"];
            if(classesDisponiveis.includes(classe)) {
                this.classe = classe;
            } else {
                throw new Error("Escolha uma das classes disponiveis: Guerreiro, Mago, Monge, Ninja");
            }
        }
    
    Atacar(){

        let Ataque = "";

        if(this.classe === "guerreiro") {
            Ataque = "espada";
        } else if(this.classe === "mago") {
            Ataque = "magia";
        } else if(this.classe === "monge") {
            Ataque = "artes marciais";
        } else {
            Ataque = "shuriken";
        }
        
        console.log(`O ${this.classe} atacou usando ${Ataque}`);
    }
}

let heroi1 = new Heroi("Rogério", 25, "guerreiro");
heroi1.Atacar();

let heroi2 = new Heroi("Yudi", 19, "ninja");
heroi2.Atacar();