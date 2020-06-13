import React from 'react';
import {shallow,mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterPage from '../components/Counter.js';
configure({ adapter: new Adapter() });

describe('Can successfully check component' , () =>{
  it('IT successfully check the counter component' , () => {
    let component = shallow(< CounterPage />);
    expect(component.state('count')).toBe(0);

    // let fakeData = {count:{polarity:'positive'}};
    // let fakeData2 = {count:{polarity:'negative'}}
    // component.find('.down clicker').simulate('onClick' , fakeData);
    // component.find('.down clicker').simulate('onClick' , fakeData2);
    // console.log(fakeData);
    // expect(component.counter).toBe('positive');
    // expect(component.counter).toBe('negative');

  })
})