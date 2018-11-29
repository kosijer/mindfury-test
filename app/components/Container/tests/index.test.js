import React from 'react';
import { shallow } from 'enzyme';
import styles from '../styles.scss';

import Container from '../index';

describe('<Container />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<Container />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent.prop('classname')).toEqual(styles.wrapper);
  });
});
