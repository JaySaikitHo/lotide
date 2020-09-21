const assertEqual = require('../assertEqual');

assertEqual("Bootcamp", "Bootcamp"); //should be false
assertEqual(1, "1"); //should be false

assertEqual("Bootcamp", "ABCD");//should be false