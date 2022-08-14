"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\ntype User {\n    id: ID!\n    name: String!\n    phone: String!\n    email: String!\n    password: String!\n    type: String!\n    balance: Int!\n    currency: String!\n    createdAt: String!\n}\n\ntype UserResponse {\n    user: User!\n    token: String\n}\ntype LoginResponse {\n    user: User!\n    token: String\n}\ntype Transaction {\n    id: ID!\n    phone: String!\n    amount: Int!\n    narration: String!\n    accountType: String!\n    transactionType: String!\n    userId: String!\n    currency: String!\n    channel: String!\n    balanceAfter: Int!\n    createdAt: String!\n}\n\ntype Query {\n    users: [User!]!\n}\n\ntype Mutation {\n    createTransaction(phone: String!, amount: Int!, narration: String!, channel:String!,accountType: String!, transactionType: String!,): Transaction!\n    createUser(name: String!, phone: String!, email:String! password: String!, type: String!,): UserResponse\n    login(phone: String!, password: String!): LoginResponse\n}\n\n    \n    schema {\n        query: Query\n        mutation: Mutation\n    }\n    ");
exports["default"] = schema;