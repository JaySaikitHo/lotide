const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head(["hello","hi","howdy"]), "hello") //should be true
assertEqual(head(["hello"],[])) //should be false