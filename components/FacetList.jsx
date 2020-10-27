import React from 'react';
import styles from '../styles/Results.module.scss'

const FacetList = ({ facets, title }) => {
  return (
    <div>
      <div className={styles.facetType}>{title}</div>
      <div className={styles.facetTypeContainer}>
        {
          Object.keys(facets).map((facet) => (
            <div key={facet} className={styles.facetType}>{facet} ({facets[facet]})</div>
          ))
        }
      </div>
    </div>
  );
};

export default FacetList;
