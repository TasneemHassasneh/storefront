import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import cart from './cart'

const reducer = combineReducers({ products, categories, cart });

const store = configureStore({ reducer });

export default store;