import React from 'react';
import { shallow } from 'enzyme';
import styles from '../styles.scss';

import InfoCard from '../index';

describe('<InfoCard />', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'BitCoin',
      myAmount: 20,
      localCurrency: 'GBP',
      rate: 0.123456789,
      usdToGbp: 0.78,
    };
  });

  it('should render the component and its children', () => {
    const renderedComponent = shallow(<InfoCard {...props} />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent.prop('classname')).toEqual(styles.infoCard);
    expect(renderedComponent.children().length).toEqual(3);
    expect(renderedComponent.childAt(0).type()).toEqual('h4');
    expect(renderedComponent.childAt(1).type()).toEqual('span');
    expect(renderedComponent.childAt(2).type()).toEqual('p');
  });

  it('should render the content of h4 element', () => {
    const renderedComponent = shallow(<InfoCard {...props} />);
    const h4 = renderedComponent.childAt(0);
    const calc = ((props.myAmount * props.rate) / props.usdToGbp).toFixed(2);
    expect(h4.text()).toContain(calc);
    expect(h4.text()).toContain(props.localCurrency);
  });

  it('should render the content of span element', () => {
    const renderedComponent = shallow(<InfoCard {...props} />);
    const span = renderedComponent.childAt(1);
    expect(span.text()).toContain('in');
    expect(span.text()).toContain(props.name);
  });

  it('should render the content of p element', () => {
    const renderedComponent = shallow(<InfoCard {...props} />);
    const p = renderedComponent.childAt(2);
    // eslint-disable-next-line prettier/prettier
    expect(p.text()).toContain(`1 ${props.name} = ${props.rate / props.usdToGbp} ${props.localCurrency}`);
    // eslint-disable-next-line prettier/prettier
    expect(p.text()).toContain(`1 ${props.localCurrency} = ${1 / (props.rate * props.usdToGbp)} ${props.name}`);
  });
});
