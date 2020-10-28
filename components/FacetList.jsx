import React from 'react';
import styles from '../styles/FacetList.module.scss'

const FacetList = ({ expanded, facets, title }) => {
  let facetList = Object.keys(facets);

  if (!expanded) {
    facetList = facetList.slice(0, 5)
  }

  return (
    <div>
      <div className={styles.facetTitle}>{title}</div>
      <div className={styles.facetTypeContainer}>
        {
          facetList.map((facet) => (
            <div key={facet} className={styles.facetType}>
              <span className={styles.facetName}>{facet}</span> <span>({facets[facet]})</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FacetList;
