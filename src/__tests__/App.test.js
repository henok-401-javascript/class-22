import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';

describe('Creating snapshot' , () => {
  it('It successfully',() =>{
    const createHtml = renderer.create(<App/>).toJSON();
    
    expect(createHtml).toMatchSnapshot(); 
  })
})

