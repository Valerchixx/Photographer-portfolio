import React from 'react';
import PropTypes from 'prop-types';
import arrowUp from '../../images/arrowUp.svg';
import arrowDown from '../../images/arrowDown.svg';
import styles from './table.module.css';
import Person from '../../Components/Person/Person';
import UserInputs from '../../Components/UserInputs/UserInputs';

class TableView extends React.PureComponent {
  render() {
    const {
      arr, flag, handleDelete, updateObj, handleGetData, updateArray,
      updateFlag, changeFlag, sortArray, searching, increment, actives,
      decrement, dragStartHandle, dragLeaveHandle, dragOverHandle,
      dragDropHandle, sortPersons, fullArr, flagSorting, setSorting,
      searchValue, validateId, flagValide, setFlagValide,
    } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Table</h1>
        <a href="/web-react" className={styles.linkHome}>go home</a>
        <div className={styles.wrapper}>
          <div>
            <button type="button" onClick={changeFlag} className={styles.addUser}>AddUser</button>
            <input
              type="text"
              placeholder="enter id"
              name="id"
              value={searchValue}
              onChange={(e) => { searching(e); validateId(e); }}
              onBlur={setFlagValide}
              className={flagValide ? styles.searchInput : `${styles.searchInput} ${styles.wrong}`}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter
             biography"
              name="biography"
              onChange={handleGetData}
              className={styles.updateInput}
            />
          </div>
          <button type="button" className={styles.btnSort} onClick={() => { sortArray(); setSorting(); }}>Sort</button>
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
            {flag && <UserInputs fullArr={fullArr} setFlag={updateFlag} setArr={updateArray} />}
            { flagSorting ? arr.map((item, i) => (
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
                dragDropHandle={dragDropHandle}
                pers={item}
              />
            )) : arr.sort(sortPersons).map((item, i) => (
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
                dragDropHandle={dragDropHandle}
                pers={item}
              />
            )) }
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
  sortPersons: PropTypes.func.isRequired,
  fullArr: PropTypes.array.isRequired,
  flagSorting: PropTypes.bool.isRequired,
  setSorting: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  validateId: PropTypes.func.isRequired,
  flagValide: PropTypes.bool.isRequired,
  setFlagValide: PropTypes.func.isRequired,

};
export default TableView;
