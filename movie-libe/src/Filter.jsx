import React from 'react';

function Filter({ onFilterChange }) {
  const handleFilterChange = () => {
    const title = document.getElementById('title-filter').value.toLowerCase();
    const rating = parseFloat(document.getElementById('rating-filter').value);

    onFilterChange({ title, rating });
  };

  return (
    <div id="filter">
      <label htmlFor="title-filter">Title:</label>
      <input type="text" id="title-filter" placeholder="Filter by title" />
      <label htmlFor="rating-filter">Rating:</label>
      <input type="number" id="rating-filter" placeholder="Filter by rating" />
      <button onClick={handleFilterChange}>Filter</button>
    </div>
  );
}

export default Filter;
