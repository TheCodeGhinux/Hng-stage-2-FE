import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/profile/Profile'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'
import Layout from './components/Layout';
import './App.css'


const App = () => {
  return (
    // <Main />
    //     <Social />
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/'  element={<Main />} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </Layout>
        </Router> 
  )
}

export default App