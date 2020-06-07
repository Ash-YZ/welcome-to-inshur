import React from 'react';
import ReactDOM from "react-dom";
import Header from './Header';

describe('On load', () => {
  it("Header renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Header component', function () {
  var div: HTMLDivElement;

  beforeAll(() => {
    div = document.createElement("div")
    ReactDOM.render(<Header title="Test Title" />, div);
  })

  afterAll(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the logo', () => {
    const logo = div.getElementsByClassName('header-logo');
    expect(logo.length).toEqual(1)
  });

  it('renders the title as "Test Title"', () => {
    const title = div.getElementsByClassName('header-title');
    expect(title.length).toEqual(1)
    expect(title[0].innerHTML).toEqual('Test Title')
  });
});
