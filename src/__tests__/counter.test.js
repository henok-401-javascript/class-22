import React from 'react';
import {shallow,mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterPage from '../components/Counter.js';
configure({ adapter: new Adapter() });

describe('Can successfully check component' , () =>{
  it('IT successfully check the counter works' , () => {
    let component = shallow(< CounterPage />);
    expect(component.state('count')).toBe(0);

  })
  it('It successfully add' , () => {
    let component = shallow(< CounterPage />);
    component.find('span.up-clicker').simulate('Click' , {});
    expect(component.state('count')).toBe(1);
    expect(component.state('polarity')).toBe('positive');
  })
  it('It successfully subtracted' , () =>{
    let component = shallow(< CounterPage />);
    component.find('span.down-clicker').simulate('Click' , {});
    expect(component.state('count')).toBe(-1);
    expect(component.state('polarity')).toBe('negative');
  })
})