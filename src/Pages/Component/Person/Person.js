import React from 'react';
import PropTypes from 'prop-types';

function Person({
  firstName, lastName, date, biography, id,
}) {
  return (
    <>
      <td>{firstName}</td>
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

};
export default Person;
