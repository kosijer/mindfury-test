import React from 'react';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import Main from '../Main';

export default class HomePage extends React.Component {
  render() {
    return (
      <Container align="center">
        <Banner />
        <Main />
      </Container>
    );
  }
}
