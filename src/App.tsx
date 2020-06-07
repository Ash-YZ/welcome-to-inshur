import React, { createContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import UserProfile from './interfaces/UserProfile';
import { profileReducer } from './reducers/profile-reducer';
import { getProfile } from './services/Profile';

const initialState: UserProfile = {
  photoUrl: '',
  name: '',
  job: '',
  favoriteFood: ''
};

const AppContext = createContext(initialState);

const App = () => {
  // Using 'useReducer' to allow me to test the state functionality in unit tests
  const [profile, dispatch] = React.useReducer(profileReducer, initialState)

  useEffect(() => {
    // Get profile from API and set in state
    getProfile()
      .then(res => res.json())
      .then(res => {
        const profile = res.data;
        dispatch({ type: 'SET_PROFILE', profile })
      })
  }, []);

  return (
    <AppContext.Provider value={profile} >
      <Header title="Profile Page" />
      <Profile />
    </AppContext.Provider>
  );
}

export const AppContextConsumer = AppContext.Consumer;
export default App;
