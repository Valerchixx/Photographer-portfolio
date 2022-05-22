import React from 'react';
import people from '../../utils/people';
import TableView from './TableView';
import history from '../../utils/history';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      flagSort: false,
      arr: people,
      fullarr: people,
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
    this.setState({ arr: items, fullarr: items });
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
    const { fullarr, update } = this.state;
    const url = `/table?id=${update.id}`;
    const searchElem = fullarr.filter((item) => String(Object.values(item)).includes(update.id));
    this.setState({ arr: searchElem });
    history.push(url);
  };

  updateObj = (index) => {
    this.setState(({ arr, fullarr, update }) => ({
      arr: [...arr.filter((it, i) => i !== index), { ...arr[index], biography: update.biography }],
      fullarr: [...fullarr.filter((it, i) => i !== index),
        { ...fullarr[index], biography: update.biography }],
    }));
  };

  updateFlag = () => {
    this.setState({ flag: false });
  };

  updateArray = (newobj) => {
    this.setState((prevState) => ({
      arr: [...prevState.arr, newobj],
      fullarr: [...prevState.fullarr, newobj],
    }));
  };

  changeFlag = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag });
  };

  sortArray = () => {
    const { arr, flagSort } = this.state;
    const newArr = [...arr];
    if (flagSort) {
      newArr.sort((a, b) => ((a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)));
    } else {
      newArr.sort((a, b) => ((a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));
    }
    this.setState((prevState) => ({
      arr: newArr,
      flagSort: !prevState.flagSort,
    }));
  };

  render() {
    const { flag, arr } = this.state;
    return (
      <TableView
        arr={arr}
        flag={flag}
        handleDelete={this.handleDelete}
        handleGetData={this.handleGetData}
        handleSearch={this.handleSearch}
        updateArray={this.updateArray}
        updateFlag={this.updateFlag}
        updateObj={this.updateObj}
        changeFlag={this.changeFlag}
        sortArray={this.sortArray}
      />

    );
  }
}

export default Table;
