// Declarando uma classe
class Book {
    //construtor
    constructor(name, editor, pag){
        this.name = name;
        this.editor = editor;
        this.pag = pag;
    }
    //metodos da class
    anunciarTitulo(){
        console.log(`Titulo: ${this.name}`)
    }
    descreverTitulo(){
        console.log(`${this.name} é um livro da editora ${this.editor} e tem ${this.pag} páginas`)
    }
}


const livreto = new Book('Catarina e seu Romeu', 'Editora Boga', 1849);
livreto.anunciarTitulo();
livreto.descreverTitulo();


//herança

class bookCollection extends Book{ 
    constructor(name, nameCollection){
        super(name)
        this.nameCollection = nameCollection;
    }

    describeCollection(){
        console.log(`O livro ${this.name} faz parte da coleção ${this.nameCollection}`);
    };
};

const bookLogic = new bookCollection('Logic Program', 'Start programing');
bookLogic.describeCollection();
