import React from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './css/userInputs.module.css';

const UserInputsView = ({ placeholders, handleData, handleAddUsers }) => {
  return (
    <tr>
      {placeholders.map((item) => (
        <td key={item.id}>
          <input
            key={item.id}
            type="text"
            onChange={handleData}
            className={styles.input}
            name={item}
            placeholder={item}
          />

        </td>
      ))}
      <td className={styles.btnTd}>
        <button type="button" onClick={handleAddUsers} className={styles.btn}>add</button>
      </td>
    </tr>
  );
};
UserInputsView.propTypes = {
  placeholders: PropTypes.arrayOf(PropTypes.shape(string)).isRequired,
  handleData: PropTypes.func.isRequired,
  handleAddUsers: PropTypes.func.isRequired,

};
export default UserInputsView;
