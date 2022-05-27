import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/person.module.css';

function Person({
  firstName, lastName, date, biography, id, active, index,
}) {
  return (
    <>
      <td className={index === active ? styles.active : styles.td}>{firstName}</td>
      <td>{lastName}</td>
      <td>{id}</td>
      <td>{biography}</td>
      <td>{date}</td>
    </>
  );
}
Person.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  biography: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,

};
export default Person;
