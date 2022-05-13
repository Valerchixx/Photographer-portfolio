import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './css/userInputs.module.css';

function UserInputs({ setArr, setFlag }) {
  const [elem, setElem] = useState({
    firstName: '',
    lastName: '',
    id: 0,
    biography: '',
    date: '',
  });
  const placeholders = ['firstName', 'lastName', 'id', 'biography', 'date'];

  const handleData = (evt) => {
    const { value } = evt.target;
    setElem({
      ...elem,
      [evt.target.name]: value,
    });
  };
  const handleAddUsers = () => {
    const newObj = {
      name: {
        firstName: elem.firstName,
        lastName: elem.lastName,
      },
      id: elem.id,
      biography: elem.biography,
      date: elem.date,
    };
    setArr((array) => [...array, newObj]);
    setFlag(false);
  };

  return (
    <tr>
      {placeholders.map((item) => (
        <td key={item.id}>
          <input key={item.id} type="text" onChange={handleData} className={styles.input} name={item} placeholder={item} />

        </td>
      ))}
      <td className={styles.btnTd}><button type="button" onClick={handleAddUsers} className={styles.btn}>add</button></td>
    </tr>
  );
}

UserInputs.propTypes = {
  setArr: PropTypes.func.isRequired,
  setFlag: PropTypes.func.isRequired,

};
export default UserInputs;
