const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { ApolloError } = require('apollo-server-errors');

module.exports = {
  Mutation: {
    async createUser(
      _,
      {
        userInput: {
          firstName,
          lastName,
          userName,
          email,
          address,
          city,
          state,
          postalCode,
          phone,
          password,
        },
      }
    ) {
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new ApolloError(
          `Sorry, ${email} has already been registered`,
          'USER_ALREADY_EXISTS'
        );
      }
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        address: address,
        city: city,
        state: state,
        postalCode: postalCode,
        phone: phone,
        email: email,
        password: bcrypt.hashSync(password, 12),
        createdBy: userName,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
      console.log('res: ', res); //TODO: remove/comment
      return {
        id: res.id,
        ...res._doc,
      };
    },
  },

  Query: {
    user: (_, { ID }) => User.findById(ID),
  },
};
