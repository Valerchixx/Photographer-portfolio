import React from 'react';
import PropTypes from 'prop-types';
import arrowUp from '../../images/arrowUp.svg';
import arrowDown from '../../images/arrowDown.svg';
import styles from '../../css/table.module.css';
import Person from '../../Components/Person/Person';
import UserInputs from '../../Components/UserInputs/UserInputs';

class TableView extends React.PureComponent {
  render() {
    const {
      arr, flag, handleDelete, updateObj, handleGetData, updateArray,
      updateFlag, changeFlag, sortArray, searching, increment, actives,
      decrement, dragStartHandle, dragLeaveHandle, dragOverHandle, dragEndHandle,
      dragDropHandle, sortPersons,
    } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Table</h1>
        <a href="/web-react" className={styles.linkHome}>go home</a>
        <div className={styles.wrapper}>
          <div>
            <button type="button" onClick={changeFlag} className={styles.addUser}>AddUser</button>
            <input type="text" placeholder="enter id" name="id" onChange={(e) => searching(e)} className={styles.searchInput} />
          </div>
          <div>
            <input type="text" placeholder="enter biography" name="biography" onChange={handleGetData} className={styles.updateInput} />
          </div>
          <button type="button" className={styles.btnSort} onClick={sortArray}>Sort</button>
        </div>
        <div className={styles.arrows}>
          <button onClick={increment} className={styles.arrowUp} type="button"><img className={styles.arrUp} src={arrowUp} alt="" /></button>
          <button onClick={decrement} className={styles.arrowDown} type="button"><img src={arrowDown} className={styles.arrDown} alt="" /></button>

        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.title}>firstName</th>
              <th className={styles.title}>LastName</th>
              <th className={styles.title}>Id</th>
              <th className={styles.title}>Biograhy</th>
              <th className={styles.title}>Date</th>
              <th className={styles.title}>Del and upd</th>
            </tr>
          </thead>
          <tbody>
            {flag && <UserInputs arr={arr} setFlag={updateFlag} setArr={updateArray} />}
            {arr.sort(sortPersons).map((item, i) => (
              <Person
                key={item.id}
                firstName={item.name.firstName}
                lastName={item.name.lastName}
                id={item.id}
                biography={item.biography}
                date={item.date}
                active={actives}
                index={i}
                handleDelete={handleDelete}
                updateObj={updateObj}
                dragStartHandle={dragStartHandle}
                dragLeaveHandle={dragLeaveHandle}
                dragOverHandle={dragOverHandle}
                dragEndHandle={dragEndHandle}
                dragDropHandle={dragDropHandle}
                pers={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
TableView.propTypes = {
  arr: PropTypes.array.isRequired,
  flag: PropTypes.bool.isRequired,
  updateArray: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleGetData: PropTypes.func.isRequired,
  updateObj: PropTypes.func.isRequired,
  updateFlag: PropTypes.func.isRequired,
  changeFlag: PropTypes.func.isRequired,
  sortArray: PropTypes.func.isRequired,
  searching: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  actives: PropTypes.number.isRequired,
  dragDropHandle: PropTypes.func.isRequired,
  dragStartHandle: PropTypes.func.isRequired,
  dragLeaveHandle: PropTypes.func.isRequired,
  dragOverHandle: PropTypes.func.isRequired,
  dragEndHandle: PropTypes.func.isRequired,
  sortPersons: PropTypes.func.isRequired,

};
export default TableView;
