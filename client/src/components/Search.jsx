import React from 'react'
import Wrapper from '../assets/wrappers/Dropdown'
const Search = ({
  suggestions,
  handleSuggestionSelect,
  selectedSuggestion,
}) => {
  return (
    <Wrapper>
      <ul className='dropdown-content'>
        {suggestions.map((suggestion) => (
          <li
            style={{
              cursor: 'pointer',
              padding: '5px',
              border: '.5px solid #2cb1bc',
              textTransform: 'uppercase',
            }}
            key={suggestion._id}
            onClick={() => handleSuggestionSelect(suggestion.name)}
          >
            {suggestion.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Search
