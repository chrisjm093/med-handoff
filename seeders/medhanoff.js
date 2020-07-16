"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        role: "Supervisor",
        unit: "4",
        shift: "Day",
        email: "john@gmail.com",
        password: bcrypt.hashSync("abc", bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Silvia",
        lastName: "David",
        role: "Practitioner",
        unit: "5",
        shift: "Night",
        email: "david@gmail.com",
        password: bcrypt.hashSync("dbe", bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    await queryInterface.bulkInsert("Patients", [
      {
        firstName: "Oak",
        lastName: "sawyer",
        unit: "ICU",
        roomNumber: 5,
        age: 25,
        history: "babababab",
        diagnosis: "hihihih",
        codestatus: "sbdjhadsf",
        tests: "bfjbdf",
        therapies: "dsjfjf",
        soap: "dfdsgfsdgdfgs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Cersie",
        lastName: "Lanister",
        unit: "OP",
        roomNumber: 7,
        age: 30,
        history: "gsdfg",
        diagnosis: "dgs",
        codestatus: "fgd",
        tests: "bfjbdf",
        therapies: "dsjfjf",
        soap: "dfdsgfsdgdfgs",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
