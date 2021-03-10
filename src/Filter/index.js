import React from 'react';

const Filter = (props) => {
  const { filter, setFilter } = props;
  return (
    <div>
      select status: 
      <select
        value={ filter }
        onChange={ e => setFilter(e.target.value) }
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  )
}

export default Filter;