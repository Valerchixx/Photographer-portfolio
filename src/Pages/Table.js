import React, { useState } from 'react';
import people from './Component/utils/people';
import styles from './Component/css/table.module.css';
import Person from './Component/Person';
import UserInputs from './Component/UserInputs';

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

  const updateObj = (index) => {
    const items = [...arr];
    items[index] = { ...items[index], biography: update.biography };
    setArr(items);
  };

  return (
    <>
      <h1 className={styles.title}>Table</h1>
      <a href="/web-react" className={styles.linkHome}>go home</a>
      <div className={styles.wrapper}>
        <div>
          <button type="button" onClick={() => setFlag(!flag)} className={styles.addUser}>AddUser</button>
          <input type="text" placeholder="enter id" name="id" onChange={handleGetData} className={styles.searchInput} />
          <button type="button" onClick={handleSearch} className={styles.btnSearch}>search</button>
        </div>
        <div>
          <input type="text" placeholder="enter biography" name="biography" onChange={handleGetData} className={styles.updateInput} />
        </div>
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
          {flag && <UserInputs arr={arr} setArr={setArr} setFlag={setFlag} />}
          {arr.sort((a, b) => ((a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))).map((item, i) => (
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
    </>
  );
}

export default Table;
