const { Query } = require('../resolvers/users');
const userResolvers = require('../resolvers/users');

module.exports = {
  Mutation: {
    ...userResolvers.Mutation,
  },

  Query: {
    ...userResolvers.Query,
  },
};
