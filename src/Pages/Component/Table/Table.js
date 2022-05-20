/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import people from '../../../utils/people';
import TableView from './TableView';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
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
    this.setState({ arr: items });
    this.setState({ fullarr: items });
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
    const searchElem = fullarr.filter((item) => item.id === +update.id);
    this.setState({ arr: searchElem });
  };

  updateObj = (index) => {
    this.setState(({ arr, update }) => ({
      arr: [...arr.filter((it, i) => i !== index), { ...arr[index], biography: update.biography }],

    }));
    this.setState(({ fullarr, update }) => ({
      arr: [...fullarr.filter((it, i) => i !== index), { ...fullarr[index], biography: update.biography }],

    }));
  };

  updateFlag = () => {
    this.setState({ flag: false });
  };

  updateArray = (newobj) => {
    this.setState((prevState) => ({
      arr: [...prevState.arr, newobj],
    }));
    this.setState((prevState) => ({
      fullarr: [...prevState.fullarr, newobj],
    }));
  };

  changeFlag = () => {
    const { flag } = this.state;
    this.setState({ flag: !flag });
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
      />

    );
  }
}

export default Table;
