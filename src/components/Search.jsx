import React from 'react'

const Search = ({filter,handleChange}) => {
  return (
    <div className='search container flex-col'>
      <label htmlFor="filter">Search
      </label>
      <input name='filter' value={filter} onChange={handleChange} />

      </div>
  )
}

export default Search