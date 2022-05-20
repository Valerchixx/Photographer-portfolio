import React from 'react';
import FooterView from './FooterView';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Valeria Proshachenko',
      date: '2021',
    };
  }

  render() {
    const { name, date } = this.state;
    return (
      <FooterView name={name} date={date} />

    );
  }
}

export default Footer;
