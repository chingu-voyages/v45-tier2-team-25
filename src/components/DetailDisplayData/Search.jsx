import React from 'react'

const Search = ({ filterData }) => {
        const handleSearch = (e) => {
          const searchTerm = e.target.value.toLowerCase();
          filterData(searchTerm);
        };
      
        return (
          <div className='my-3'> 
            <input
              type="text"
              placeholder="Search by name..."
              className="input join-item input-bordered w-full border-base-300"
              onChange={handleSearch}
            />
          </div>
        );
      };


export default Search
