import React from 'react';
import debounce from 'lodash.debounce';
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
        id: '',
        biography: '',
      },
      activeIndex: 0,
      currPerson: null,
      flagSorting: true,
      searchValue: '',
      flagValide: true,
      activeElem: -1,
    };
    this.debonceHandleSearch = debounce(this.handleSearch, 300);
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

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        this.increment();
      } else if (e.keyCode === 40) {
        this.decrement();
      }
    });
  }

  dragStartHandle = (e, pers) => {
    this.setState({ currPerson: pers });
  };

  dragDropHandle = (e, pers) => {
    e.preventDefault();
    this.setState(({ arr }) => ({
      arr: [...arr.map((item) => this.changeOrder(item, pers))]
        .sort((a, b) => ((a.id > b.id) ? 1 : -1)),
      flagSorting: false,
      activeElem: -1,
    }));
  };

  dragLeaveHandle = () => {
    this.setState({ flagSorting: false });
  };

  dragOverHandle = (e, i) => {
    e.preventDefault();
    this.setState({ activeElem: i });
  };

  validateId = (e) => {
    const { value } = e.target;
    let id = '';
    let flag = null;
    if (Number.isInteger(+value)) {
      id = value;
      flag = true;
    } else {
      id = '';
      flag = false;
    }
    this.setState({ searchValue: id, update: { id }, flagValide: flag });
  };

  changeOrder = (item, pers) => {
    const { currPerson } = this.state;
    if (item.order === pers.order) {
      return { ...item, order: currPerson.order };
    } if (item.order === currPerson.order) {
      return { ...item, order: pers.order };
    }

    return item;
  };

  handleDelete = (itemId) => {
    const { fullarr } = this.state;
    const items = fullarr.filter((item) => item.id !== itemId);
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
    const searchElem = fullarr.filter((item) => String(item.id).includes(update.id));
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

  searching = (e) => {
    this.handleGetData(e);
    this.debonceHandleSearch();
  };

  sortArray = () => {
    const { fullarr, flagSort } = this.state;
    const newArr = [...fullarr];
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

  increment = () => {
    const { activeIndex } = this.state;
    this.setState(() => ({
      activeIndex: activeIndex > 0 ? activeIndex - 1 : activeIndex,
    }));
  };

  decrement = () => {
    const { activeIndex, arr } = this.state;
    this.setState((prevState) => ({
      activeIndex: activeIndex < arr.length - 1 ? prevState.activeIndex + 1 : activeIndex,
    }));
  };

  setFlagSorting = () => {
    this.setState({ flagSorting: true });
  };

  setFlagValide = () => {
    this.setState({ flagValide: true });
  };

  render() {
    const {
      flag, arr, activeIndex, fullarr, flagSorting, searchValue,
      flagValide, activeElem,
    } = this.state;
    return (
      <TableView
        arr={arr}
        flag={flag}
        handleDelete={this.handleDelete}
        handleGetData={this.handleGetData}
        updateArray={this.updateArray}
        updateFlag={this.updateFlag}
        updateObj={this.updateObj}
        changeFlag={this.changeFlag}
        sortArray={this.sortArray}
        searching={this.searching}
        increment={this.increment}
        decrement={this.decrement}
        actives={activeIndex}
        dragStartHandle={this.dragStartHandle}
        dragLeaveHandle={this.dragLeaveHandle}
        dragOverHandle={this.dragOverHandle}
        dragDropHandle={this.dragDropHandle}
        fullArr={fullarr}
        flagSorting={flagSorting}
        setSorting={this.setFlagSorting}
        searchValue={searchValue}
        validateId={this.validateId}
        flagValide={flagValide}
        setFlagValide={this.setFlagValide}
        activeElem={activeElem}

      />

    );
  }
}

export default Table;
