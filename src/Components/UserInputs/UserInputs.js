import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserInputsView from './UserInputsView';

function UserInputs({ setArr, setFlag, fullArr }) {
  const [elem, setElem] = useState({
    firstName: '',
    lastName: '',
    id: 0,
    biography: '',
    date: '',
  });
  const placeholders = ['firstName', 'lastName', 'id', 'biography', 'date'];

  const handleData = (evt) => {
    const { value } = evt.target;
    setElem({
      ...elem,
      [evt.target.name]: value,
    });
  };
  const handleAddUsers = () => {
    const newObj = {
      name: {
        firstName: elem.firstName,
        lastName: elem.lastName,
      },
      id: elem.id,
      biography: elem.biography,
      date: elem.date,
      order: fullArr.length + 1,
    };
    setArr(newObj);
    setFlag();
  };

  return (
    <UserInputsView
      placeholders={placeholders}
      handleAddUsers={handleAddUsers}
      handleData={handleData}
    />

  );
}

UserInputs.propTypes = {
  setArr: PropTypes.func.isRequired,
  setFlag: PropTypes.func.isRequired,
  fullArr: PropTypes.array.isRequired,

};
export default UserInputs;
