import React from 'react';

const Pagination = ({
  currentPage,
  todosPerPage,
  totalTodos,
  onPageChange,
  onPerPageChange,
}) => {
  const totalPages = Math.ceil(totalTodos / todosPerPage);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const handlePerPageSelect = (event) => {
    onPerPageChange(event);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <span>Records per page:</span>
      <select
        value={todosPerPage}
        onChange={handlePerPageSelect}
        style={{
          margin: '0 10px',
          padding: '5px',
        }}
      >
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
      </select>
      <button
        className='pagination-button'
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        style={{
          backgroundColor: '#f0f0f0',
          border: 'none',
          padding: '5px 10px',
          margin: '0 5px',
          cursor: 'pointer',
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        ◀
      </button>
      <ul
        className='pagination-list'
        style={{
          listStyle: 'none',
          display: 'flex',
          margin: '0',
          padding: '0',
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <li
              key={number}
              className={`pagination-item ${
                number === currentPage ? 'active' : ''
              }`}
              onClick={() => handlePageClick(number)}
              style={{
                margin: '0 2px',
                padding: '5px',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '3px',
                fontWeight: number === currentPage ? 'bold' : 'normal',
                backgroundColor: number === currentPage ? 'cyan' : 'transparent',
              }}
            >
              {number}
            </li>
          )
        )}
      </ul>
      <button
        className='pagination-button'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        style={{
          backgroundColor: '#f0f0f0',
          border: 'none',
          padding: '5px 10px',
          margin: '0 5px',
          cursor: 'pointer',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
