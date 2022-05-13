/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import people from './utils/people';
import styles from './css/table.module.css';
import Person from './Person';
import UserInputs from './UserInputs';

function Table() {
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState(people);
  const [update, setUpdate] = useState({
    id: 0,
    biography: '',
  });
  // sorting without sort function
  // function sorting(arr) {
  //   let done = false;
  //   while (!done) {
  //     done = true;
  //     for (let i = 1; i < arr.length; i += 1) {
  //       if (arr[i - 1].id > arr[i].id) {
  //         done = false;
  //         const tmp = arr[i - 1].id;
  //         arr[i - 1].id = arr[i].id;
  //         arr[i].id = tmp;
  //       }
  //     }
  //   }
  //   return arr;
  // }

  const handleDelete = (itemId) => {
    const items = arr.filter((item) => item.id !== itemId);
    setArr(items);
  };

  const handleGetData = (e) => {
    const { value } = e.target;
    setUpdate({
      ...update,
      [e.target.name]: value,
    });
  };

  const handleSearch = () => {
    const searchElem = people.filter((item) => item.id === +update.id);
    setArr(searchElem);
  };

  return (
    <>
      <h1 className={styles.title}>Table</h1>
      <button type="button" onClick={() => setFlag(!flag)} className={styles.addUser}>AddUser</button>
      <input type="text" placeholder="enter id" name="id" onChange={handleGetData} className={styles.searchInput} />
      <button type="button" onClick={handleSearch} className={styles.btnSearch}>search</button>
      <input type="text" placeholder="enter biography" name="biography" onChange={handleGetData} className={styles.updateInput} />
      <button type="button" className={styles.btnUpdate}>update</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.title}>firstName</th>
            <th className={styles.title}>LastName</th>
            <th className={styles.title}>Id</th>
            <th className={styles.title}>Biograhy</th>
            <th className={styles.title}>date</th>
          </tr>
        </thead>
        <tbody>
          {flag && <UserInputs arr={arr} setArr={setArr} setFlag={setFlag} />}
          {arr.sort((a, b) => ((a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))).map((item) => (
            <tr key={item.id}>
              <Person
                key={item.id}
                firstName={item.name.firstName}
                lastName={item.name.lastName}
                id={item.id}
                biography={item.biography}
                date={item.date}
              />
              <td className={styles.btnTd}><button type="button" className={styles.btnDel} onClick={() => handleDelete(item.id)}>delte user</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
