import React, { useState, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import withRouter from '../../utils/withRouter';
import TableView from './TableView';
import people from '../../constants/people';

const Table = ({ params }) => {
  const [arr, setArr] = useState(people);
  const [flag, setFlag] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullArr, setFullArr] = useState(people);
  const [flagSort, setFlagSort] = useState(false);
  const [flagSorting, setFlagSorting] = useState(true);
  const [currPerson, setCurrPerson] = useState(null);
  const [activeElem, setActiveElem] = useState(-1);
  const [update, setUpdate] = useState({ id: 0, biography: '' });
  const [searchValue, setSearchValue] = useState('');
  const [flagValide, setFlagValide] = useState(true);
  const navigate = useNavigate();

  const increment = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const decrement = () => {
    setActiveIndex((prev) => (prev < arr.length - 1 ? prev + 1 : prev));
  };
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        increment();
      } else if (e.keyCode === 40) {
        decrement();
      }
    });

    if (Number(params.id)) {
      const searchElem = fullArr.filter((item) => String(item.id).includes(Number(params.id)));
      setArr(searchElem);
      setSearchValue(params.id);
    }
  }, []);

  const handleFlagSorting = () => {
    setFlagSorting(true);
  };

  const handleDelete = (itemId) => {
    const items = fullArr.filter((item) => item.id !== itemId);
    setArr(items);
    setFullArr(items);
  };

  const dragStartHandle = (e, pers) => {
    setCurrPerson(pers);
  };

  const dragLeaveHandle = () => {
    setFlagSorting(false);
  };

  const dragOverHandle = (e, i) => {
    e.preventDefault();
    setActiveElem(i);
  };

  const changeOrder = (item, pers) => {
    if (item.order === pers.order) {
      return { ...item, order: currPerson.order };
    } if (item.order === currPerson.order) {
      return { ...item, order: pers.order };
    }

    return item;
  };

  const dragDropHandle = (e, pers) => {
    e.preventDefault();
    setArr((prev) => [...prev.map((item) => changeOrder(item, pers))].sort((a, b) => ((a.id > b.id) ? 1 : -1)));
    setFlagSorting(false);
    setActiveElem(-1);
  };

  const handleData = (e) => {
    const { value } = e.target;
    setUpdate({
      ...update,
      [e.target.name]: value,
    });
  };

  const updateObj = (index) => {
    setArr((prev) => prev.map((item, i) => (i === index ? { ...item, biography: update.biography } : item)));
    setFullArr((prev) => prev.map((item, i) => (i === index ? { ...item, biography: update.biography } : item)));
  };

  const updateFlag = () => {
    setFlag(false);
  };

  const changeFlag = () => {
    setFlag((prev) => !prev);
  };

  const searching = (id) => {
    const url = `/table/${id}`;
    navigate(url);
    const searchElems = fullArr.filter((item) => String(item.id).includes(id));
    setArr(searchElems);
  };

  const debonceHandle = debounce(searching, 300);

  const handleSearch = (e) => {
    const { value } = e.target;
    let id = '';
    let flagV = null;
    if (Number.isInteger(+value)) {
      id = value;
      flagV = true;
    } else {
      id = '';
      flagV = false;
    }
    setSearchValue(id);
    setUpdate((prev) => ({
      ...prev,
      id
    }));
    debonceHandle(id);
    setFlagValide(flagV);
  };

  const updateArray = (newObj) => {
    setArr((prev) => [...prev, newObj]);
    setFullArr((prev) => [...prev, newObj]);
  };

  const sortArray = () => {
    const newArr = [...fullArr];
    if (flagSort) {
      newArr.sort((a, b) => ((a.id < b.id) ? 1 : -1));
    } else {
      newArr.sort((a, b) => ((a.id > b.id) ? 1 : -1));
    }

    setArr(newArr);
    setFlagSort((prev) => !prev);
  };

  return (
    <TableView
      arr={arr}
      actives={activeIndex}
      fullArr={fullArr}
      flagSorting={flagSorting}
      activeElem={activeElem}
      setSorting={handleFlagSorting}
      handleDelete={handleDelete}
      dragDropHandle={dragDropHandle}
      dragLeaveHandle={dragLeaveHandle}
      dragOverHandle={dragOverHandle}
      dragStartHandle={dragStartHandle}
      handleGetData={handleData}
      updateObj={updateObj}
      changeFlag={changeFlag}
      updateFlag={updateFlag}
      flag={flag}
      searchValue={searchValue}
      flagValide={flagValide}
      setFlagValide={() => setFlagValide(true)}
      updateArray={updateArray}
      sortArray={sortArray}
      handleSearch={handleSearch}
    />

  );
};

Table.propTypes = {
  params: PropTypes.shape({ id: string }).isRequired,
};

export default withRouter(Table);
