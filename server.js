const express = require('express');
const cors = require('cors');

const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected...');
    return server.listen({ port: process.env.PORT || 8080 }).then((res) => {
      console.log(`...Server running on ${res.url}`);
    });
  });
