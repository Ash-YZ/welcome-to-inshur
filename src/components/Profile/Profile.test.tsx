import React from 'react';
import ReactDOM from "react-dom";
import Profile from './Profile';

describe('On load', () => {
  it("Profile renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Profile />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Profile component', function () {
  var div: HTMLDivElement;

  beforeAll(() => {
    div = document.createElement("div")
    ReactDOM.render(<Profile />, div);
  })

  afterAll(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders profile image', () => {
    const images = div.getElementsByClassName('profile-image');
    expect(images.length).toEqual(1)
  });

  it('renders all 3 sections', () => {
    const images = div.getElementsByClassName('profile-section');
    expect(images.length).toEqual(3)
  });
});
