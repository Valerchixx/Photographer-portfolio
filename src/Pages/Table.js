import React from 'react';
import styles from './Component/css/table.module.css';
import people from './Component/utils/people';
import Person from './Component/Person';
import UserInputs from './Component/UserInputs';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      arr: people,
      update: {
        id: 0,
        biography: '',
      },
    };
  }
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

  handleDelete = (itemId) => {
    const { arr } = this.state;
    const items = arr.filter((item) => item.id !== itemId);
    this.setState({ arr: items });
  };

  handleGetData = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      update: {
        ...prevState.update,
        [e.target.name]: value,
      },

    }));
  };

  handleSearch = () => {
    const { update } = this.state;
    const searchElem = people.filter((item) => item.id === +update.id);
    this.setState({ arr: searchElem });
  };

  updateObj = (index) => {
    const { arr, update } = this.state;
    const items = [...arr];
    items[index] = { ...items[index], biography: update.biography };
    this.setState({ arr: items });
  };

  updateFlag = () => {
    this.setState({ flag: false });
  };

  updateArray = (newobj) => {
    this.setState((prevState) => ({
      arr: [...prevState.arr, newobj],
    }));
  };

  render() {
    const { flag, arr } = this.state;
    return (
      <>
        <h1 className={styles.title}>Table</h1>
        <a href="/web-react" className={styles.linkHome}>go home</a>
        <div className={styles.wrapper}>
          <div>
            <button type="button" onClick={() => this.setState({ flag: !flag })} className={styles.addUser}>AddUser</button>
            <input type="text" placeholder="enter id" name="id" onChange={this.handleGetData} className={styles.searchInput} />
            <button type="button" onClick={this.handleSearch} className={styles.btnSearch}>search</button>
          </div>
          <div>
            <input type="text" placeholder="enter biography" name="biography" onChange={this.handleGetData} className={styles.updateInput} />
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
            {flag && <UserInputs arr={arr} setFlag={this.updateFlag} setArr={this.updateArray} />}
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
                  <button type="button" className={styles.btnDel} onClick={() => this.handleDelete(item.id)}>delte user</button>
                  <button type="button" className={styles.btnUpdate} onClick={() => this.updateObj(i)}>update</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>

    );
  }
}

export default Table;
