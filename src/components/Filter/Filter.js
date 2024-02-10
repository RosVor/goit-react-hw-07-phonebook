import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { getFilter } from 'components/redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className='filter-label'>
      Фільтрувати контакти:
      <input
        className='filter-input'
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;


