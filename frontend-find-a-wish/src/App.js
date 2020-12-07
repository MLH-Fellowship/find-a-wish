import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Wishlist from "./components/wishlist.component";
import Profile from "./components/profile.component";
import HomePage from "./components/homepage.component";

class App extends Component {
  /* Constructor for passing down linking and routing data + text */
  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Find a Wish',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Organizations', path: '/organizations'},
        { title: 'Post a Wishlist', path: '/wishlistform'}
      ],
      home: {
        title: 'Find a Wish',
        subTitle: 'Give back to organizations by fulfilling their wish list',
      },
    }
  }
  render() {
    /* Navigation bar that is present on every page + routing */
    return (
      <Router>
        <Navbar bg='transparent' variant='dark' expand="md" fixed="top">
          <Nav className="ml-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/wishlistform'>Post a Wishlist!</Nav.Link>
            <Nav.Link href='/organizations'>Organizations</Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
        <Route path="/organizations" component={Profile} />
        <Route path="/wishlistform" component={Wishlist} />
      </Router>
    );
  }
}

export default App;
