import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Footer } from './container';
import { Home } from './pages/home/Home';
import { Navbar } from './components';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Shop from './pages/shop/shop';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

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
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
