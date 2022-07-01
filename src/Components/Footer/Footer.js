import React, { useState } from 'react';
import FooterView from './FooterView';

const Footer = () => {
  const [name] = useState('Valeria Proshachenko');
  const [date] = useState('2021');

  return (
    <FooterView name={name} date={date} />

  );
};

export default Footer;
