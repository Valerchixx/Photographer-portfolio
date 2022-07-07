import React, { useState } from 'react';
import i18n from '../../i18n';
import FooterView from './FooterView';

const Footer = () => {
  const [name] = useState('Valeria Proshachenko');
  const [date] = useState('2022');

  const changeLang = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FooterView name={name} date={date} changeLang={changeLang} />

  );
};

export default Footer;
