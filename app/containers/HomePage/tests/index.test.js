import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../../components/Container';
import Banner from '../../../components/Banner';
import Main from '../../Main';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the component and its children', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.type()).toEqual(Container);
    expect(renderedComponent.children().length).toEqual(2);
    expect(renderedComponent.childAt(0).type()).toEqual(Banner);
    expect(renderedComponent.childAt(1).type()).toEqual(Main);
  });
});
