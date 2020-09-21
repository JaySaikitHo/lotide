const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head(["hello","hi","howdy"]), "hello")
assertEqual(head(["hello"],[]))