// components/FilterSidebar/FilterSidebar.js
'use client';
import { useState } from 'react';
import FilterGroup from './FilterGroup';
import styles from './FilterSidebar.module.css';

export default function FilterSidebar({ categories }) {
  const [filtersVisible, setFiltersVisible] = useState(true);

  const filterGroups = [
    {
      id: 'ideal-for',
      title: 'IDEAL FOR',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'occasion',
      title: 'OCCASION',
      options: ['Casual', 'Formal', 'Party', 'Sport'],
    },
    {
      id: 'work',
      title: 'WORK',
      options: ['Office', 'Remote', 'Outdoor', 'Field'],
    },
    {
      id: 'fabric',
      title: 'FABRIC',
      options: ['Cotton', 'Silk', 'Polyester', 'Denim', 'Wool'],
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      options: ['Luxury', 'Premium', 'Standard', 'Budget'],
    },
    {
      id: 'suitable-for',
      title: 'SUITABLE FOR',
      options: ['Summer', 'Winter', 'Spring', 'All Season'],
    },
    {
      id: 'raw-materials',
      title: 'RAW MATERIALS',
      options: ['Organic Cotton', 'Recycled Polyester', 'Leather', 'Synthetic'],
    },
    {
      id: 'pattern',
      title: 'PATTERN',
      options: ['Solid', 'Striped', 'Checked', 'Printed', 'Embroidered'],
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizableSection}>
        <input 
          type="checkbox" 
          id="customizable" 
          className={styles.checkbox}
        />
        <label htmlFor="customizable" className={styles.customizableLabel}>
          CUSTOMIZABLE
        </label>
      </div>

      <div className={styles.divider}></div>

      {filterGroups.map((group) => (
        <FilterGroup
          key={group.id}
          title={group.title}
          options={group.options}
        />
      ))}
    </aside>
  );
}
