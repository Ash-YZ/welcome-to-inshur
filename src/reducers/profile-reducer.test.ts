import { profileReducer } from './profile-reducer'

describe('Profile reducer', () => {
  it('SET_PROFILE should set the profile data', () => {
    const initialState = { photoUrl: '', name: '', job: '', favoriteFood: '' };
    const profile = {
      photoUrl: 'https://test.url.com',
      name: 'Test Name',
      job: 'Test Job',
      favoriteFood: 'Test Food'
    };

    const newState = profileReducer(initialState, {
      type: 'SET_PROFILE', profile
    })
    expect(newState).toEqual(profile)
  });
});
