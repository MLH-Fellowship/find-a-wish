import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button ,Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import HomePage from "./components/todos-list.component";

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Find a Wish',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Log In', path: '/login'},
        { title: 'Sign Up', path: '/signup'}
      ],
      home: {
        title: 'Find a Wish',
        subTitle: 'Give back to organizations by fulfilling their wish list',
      },
      login: {
        title: 'Log In'
      },
      signup: {
        title: 'Sign Up'
      }
    }
  }
  render() {
    return (
      <Router>
        <Navbar bg='transparent' variant='dark' expand="md" fixed="top">
          <Nav className="ml-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/login'>Log In</Nav.Link>
            <Nav.Link href='/signup'>Sign Up</Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
        <Route path="/login" component={EditTodo} />
        <Route path="/signup" component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
