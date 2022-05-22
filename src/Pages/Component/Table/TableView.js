/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../css/table.module.css';
import Person from '../Person/Person';
import UserInputs from '../UserInputs/UserInputs';

class TableView extends React.PureComponent {
  render() {
    const {
      arr, flag, handleDelete, updateObj, handleGetData, updateArray, handleSearch,
      updateFlag, changeFlag, sortArray,
    } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Table</h1>
        <a href="/web-react" className={styles.linkHome}>go home</a>
        <div className={styles.wrapper}>
          <div>
            <button type="button" onClick={changeFlag} className={styles.addUser}>AddUser</button>
            <input type="text" placeholder="enter id" name="id" onChange={handleGetData} className={styles.searchInput} />
            <button type="button" onClick={handleSearch} className={styles.btnSearch}>search</button>
          </div>
          <div>
            <input type="text" placeholder="enter biography" name="biography" onChange={handleGetData} className={styles.updateInput} />
          </div>
          <button type="button" className={styles.btnSort} onClick={sortArray}>Sort</button>
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
            {arr.map((item, i) => (
              <tr key={item.id}>
                <Person
                  key={item.id}
                  firstName={item.name.firstName}
                  lastName={item.name.lastName}
                  id={item.id}
                  biography={item.biography}
                  date={item.date}
                />
                <td className={styles.btnTd}>
                  <button type="button" className={styles.btnDel} onClick={() => handleDelete(item.id)}>delte user</button>
                  <button type="button" className={styles.btnUpdate} onClick={() => updateObj(i)}>update</button>
                </td>
              </tr>
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
  handleSearch: PropTypes.func.isRequired,
  updateObj: PropTypes.func.isRequired,
  updateFlag: PropTypes.func.isRequired,
  changeFlag: PropTypes.func.isRequired,
  sortArray: PropTypes.func.isRequired,

};
export default TableView;
