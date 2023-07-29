class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.books = []
        
    }

    addBook (bookName, bookAuthor){
        let newBook = {
            bookName,
            bookAuthor,
            payed: false,
        }
       
        if( this.books.length >= this.capacity ){
            return `Not enough space in the collection.`
        }else{
            this.books.push(this.newBook);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`

        }

        
    }

    payBook( bookName ){
        
    }



}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));