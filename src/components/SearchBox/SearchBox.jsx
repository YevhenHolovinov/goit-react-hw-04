import { useId } from 'react';

import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    const searchId = useId();
    
    return (
      <div className={css.searchContainer}>
        <label className={css.searchLabel} htmlFor={searchId}>Find contacts by name</label>
        <input
          className={css.searchInput}
          type="search"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </div>
    );
  }