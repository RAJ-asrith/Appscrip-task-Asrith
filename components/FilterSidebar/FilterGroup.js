// components/FilterSidebar/FilterGroup.js
'use client';
import { useState } from 'react';
import styles from './FilterSidebar.module.css';

export default function FilterGroup({ title, options }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const displayOptions = showAll ? options : options.slice(0, 3);

  return (
    <div className={styles.filterGroup}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>{title}</h3>
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
        >
          {isExpanded ? '∧' : '∨'}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.filterOptions}>
          <button className={styles.selectAll}>All</button>
          
          {displayOptions.map((option, index) => (
            <label key={index} className={styles.optionLabel}>
              <input
                type="checkbox"
                name={title}
                value={option}
                className={styles.checkbox}
              />
              <span className={styles.optionText}>{option}</span>
            </label>
          ))}

          {options.length > 3 && (
            <button
              className={styles.showMoreButton}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? '- Show Less' : '+ Show More'}
            </button>
          )}
        </div>
      )}

      <div className={styles.divider}></div>
    </div>
  );
}
