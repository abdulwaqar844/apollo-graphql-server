
export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
    }
    type Query {
        books: [Book]
        book(id: ID!): Book
    }
    type Mutation {
        addBook(title: String!): Book
        deleteBook(id: ID!): Book
        updateBook(id: ID!, title: String!): Book
    }
`;

 