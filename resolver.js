let books = [
    { id: "1", title: "Harry Potter and the Sorcerer's stone" },
    { id: "2", title: 'Jurassic Park' },
    { id: "3", title: 'The Lord of the Rings' },
    { id: "4", title: 'The Hobbit' },
    { id: "5", title: 'The Hunger Games' },
    { id: "6", title: 'The Da Vinci Code' }
];
export const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => {
            return books.find(book => book.id === args.id);
        }
    },
    Mutation: {
        addBook: (parent, args) => {
            const book = { id: books.length + 1, title: args.title };
            books.push(book);
            return book;
        },
        deleteBook: (parent, args) => {
            const book = books.find(book => book.id === args.id);
            books = books.filter(book => book.id !== args.id);
            return book;
        },
        updateBook: (parent, args) => {
            const book = books.find(book => book.id === args.id);
            book.title = args.title;
            return book;
        }


    }
};

