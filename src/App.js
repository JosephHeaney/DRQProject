import './App.css';
import { Component } from 'react';
import { HomePage } from './components/homepage';
import { List } from './components/list';
import { Create } from './components/create'
import { Edit } from './components/edit'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Shopping Assist</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create Your List</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/list' component={List}/>
            <Route path='/create' component={Create}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
