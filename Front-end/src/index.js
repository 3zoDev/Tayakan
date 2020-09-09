/*!

=========================================================
* Paper Kit PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';
import 'assets/demo/demo.css';
import 'assets/demo/react-demo.css';
// pages

import AboutUs from 'views/examples/AboutUs.js';

import LoginPage from 'views/examples/LoginPage.js';

import RegisterPage from 'views/examples/RegisterPage.js';

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />

      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);