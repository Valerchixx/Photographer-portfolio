/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import people from '../../constants/people';
import TableView from './TableView';

const TableF = () => {
  const [arr, setArr] = useState(people);
  const [fullArr, setFullArr] = useState(people);
  const [update, setUpdate] = useState({ id: 0, biography: '' });

  const handleDelete = (itemId) => {
    const items = fullArr.filter((item) => item.id !== itemId);
    setArr(items);
    fullArr(items);
  };

  const handleGetData = (e) => {
    const { value } = e.target;
    setUpdate((prev) => ({ ...prev, [e.target.name]: value }));
    console.log(update);
  };

  const updateObj = (index) => {
    setArr((prev) => [prev.filter((it, i) => i !== index), { ...prev[index], biography: update.biography }]);
    setFullArr((prev) => [prev.filter((it, i) => i !== index), { ...prev[index], biography: update.biography }]);
  };

  return (
    <TableView
      arr={arr}
      handleDelete={handleDelete}
      handleGetData={handleGetData}
      updateObj={updateObj}
    />

  );
};

export default TableF;
