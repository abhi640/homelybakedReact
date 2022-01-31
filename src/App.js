import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Footer } from './container';
import { Home } from './pages/home/Home';
import { Navbar } from './components';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Shop from './pages/shop/shop';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/login" element={<SignInSignUp />} />

          <Route path="/shop" element={<Shop />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default App;
