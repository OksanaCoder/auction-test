import logo from './logo.svg';
import './App.css';
// import PubNubReact from 'pubnub';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';
import Products from './components/Products/Products'
import User from './components/User/User'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Link as BrowserLink, useHistory } from 'react-router-dom'

const data = [
  {
    img: 'https://nahodim.com.ua/uploads/blog/blog_img/jhJn5YzjTsJiWEc/hgo3KV4aBzy19HhJqvoYXIzm.jpg',
    title: 'Bmw',
    startPrice: 3000,
    description: 'Cool car!'
  },
  {
    img: 'https://nahodim.com.ua/uploads/blog/blog_img/jhJn5YzjTsJiWEc/hgo3KV4aBzy19HhJqvoYXIzm.jpg',
    title: 'Mazda',
    startPrice: 4000,
    description: 'Cool car 100%!'
  },
  {
    img: 'https://nahodim.com.ua/uploads/blog/blog_img/jhJn5YzjTsJiWEc/hgo3KV4aBzy19HhJqvoYXIzm.jpg',
    title: 'Smart',
    startPrice: 5000,
    description: 'Cool car 200%!'
  }
]


function App() {
  const history = useHistory()
  // const [pubnub, setPubNub] = useState(
  //   new PubNubReact({
  //     publishKey: 'pub-c-c57ba641-5516-4228-9f2a-7118c18c27ed',
  //     subscribeKey: 'sub-c-f51e5e1e-9f9c-11eb-8d7b-b642bba3de20'
  //   })
  // )
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [signed, setSigned] = useState(false)

  const openModal = () => {
    setShow(true)
  }
  const handeClose = () => {
    setShow(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(false)
    localStorage.setItem('name', name)
    setSigned(true)

    console.log(name, 'name')
  }


  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Auction</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><BrowserLink to='/'>Home</BrowserLink></Nav.Link>
          <Nav.Link><BrowserLink to='/products'>Products</BrowserLink></Nav.Link>
          <Nav.Link><BrowserLink to='/user'>User</BrowserLink></Nav.Link>
          <Nav.Link><BrowserLink to='/dashboard'>Dashboard</BrowserLink></Nav.Link>
        </Nav>
        <Button onClick={openModal}>Sign Up</Button>
      </Navbar>
      <Router>


        <Modal onHide={handeClose} show={show}>
          <form>
            <Modal.Header closeButton>Live Bidding Registration</Modal.Header>
            <Modal.Body>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" onClick={handleSubmit} color="success" className="btn btn-success">Sign Up</Button>
              <Button color="danger" onClick={handeClose}>Cancel</Button>
            </Modal.Footer>
          </form>
        </Modal>
        {signed ? (
          <h3 className='pl-3'>Welcome, {localStorage.getItem('name')}</h3>
        ) : (null)}



        <Route exact path='/' component={App} />
        <Route
          path="/products"
          exact
          render={() => <Products data={data} />}
        />


        <Route
          path="/user"
          exact
          render={() => <User />}
        />
        <Route
          path="/dashboard"
          exact
          render={() => <Dashboard />}
        />


      </Router>

    </>
  );
}

export default App;
