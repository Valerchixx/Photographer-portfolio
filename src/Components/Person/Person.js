import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import styles from './person.module.css';

const Person = ({
  firstName, lastName, date, biography, id, active, index, updateObj, handleDelete,
  pers, dragStartHandle, dragLeaveHandle, dragDropHandle, dragOverHandle,
  activeElem,
}) => {
  return (
    <tr
      className={index === activeElem ? `${styles.person} ${styles.select}` : styles.person}
      draggable
      onDragStart={(e) => dragStartHandle(e, pers)}
      onDragLeave={(e) => dragLeaveHandle(e)}
      onDragOver={(e) => dragOverHandle(e, index)}
      onDrop={(e) => dragDropHandle(e, pers)}
    >
      <td className={index === active ? styles.active : styles.td}>{firstName}</td>
      <td>{lastName}</td>
      <td>{id}</td>
      <td>{biography}</td>
      <td>{date}</td>
      <td className={styles.btnTd}>
        <button type="button" className={styles.btnDel} onClick={() => handleDelete(id)}>delte user</button>
        <button type="button" className={styles.btnUpdate} onClick={() => updateObj(index)}>update</button>
      </td>
    </tr>
  );
};
Person.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  biography: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  updateObj: PropTypes.func.isRequired,
  pers: PropTypes.shape({
    biography: string,
    date: string,
    id: number,
    name: PropTypes.shape({ firstName: string, lastName: string }),
    order: number
  }).isRequired,
  dragDropHandle: PropTypes.func.isRequired,
  dragStartHandle: PropTypes.func.isRequired,
  dragLeaveHandle: PropTypes.func.isRequired,
  dragOverHandle: PropTypes.func.isRequired,
  activeElem: PropTypes.number.isRequired,

};
export default Person;
