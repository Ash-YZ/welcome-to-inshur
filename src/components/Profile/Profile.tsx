import React from 'react';
import { AppContextConsumer } from '../../App';
import './styles.css';

const Profile = () => {

  return (
    <AppContextConsumer>
      {({ name, photoUrl, job, favoriteFood }) => (
        <div className="profile-container">

          <div className="profile-image-container">
            <img className="profile-image"
              src={photoUrl}
              title="Profile image"
              alt="Person" />
          </div>

          <div className="profile-text-container">
            <div className="profile-section profile-section-border">
              <h3 className="profile-header">Name:</h3>
              <h3 className="profile-data">{name}</h3>
            </div>

            <div className="profile-section profile-section-border">
              <h3 className="profile-header">Job:</h3>
              <h4 className="profile-data">{job}</h4>
            </div>

            <div className="profile-section">
              <h3 className="profile-header">Favorite Food:</h3>
              <h4 className="profile-data">{favoriteFood}</h4>
            </div>
          </div>
        </div>
      )}
    </AppContextConsumer>
  );
}

export default Profile;
