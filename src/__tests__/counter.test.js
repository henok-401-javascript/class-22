import React from 'react';
import {shallow,mount} from 'enzyme';
import counterPage from '../components/Counter';

describe('Can successfully check component' , () =>{
  it('IT successfully check the counter component' , () => {
    const component = shallow(<counterPage/>);
    let fakeData = {count:{polarity:'positive'}};
    let fakeData2 = {count:{polarity:'negative'}}
    component.find('.down clicker').simulate('onClick' , fakeData);
    component.find('.down clicker').simulate('onClick' , fakeData2);
    console.log(fakeData);
    expect(component.counter).toBe('positive');
    expect(component.counter).toBe('negative');

  })
})