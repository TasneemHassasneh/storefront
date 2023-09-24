import React from 'react';

import { Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import Storefront from './components/storefront/storefront';
import Cart from './components/cart/checkout';
import Product from './components/product/details';
import Header from './components/header/header';
import Footer from './components/footer/footer';

export default function Album() {

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Route exact path="/" component={Storefront} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </main>
      <Footer />
    </>
  );
}
