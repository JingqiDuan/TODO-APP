import {shallow} from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json'
import Header from '../../src/components/Header';

test('should render Header correctly',()=>{
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
