import React from 'react'
import './assets/login.css';
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App