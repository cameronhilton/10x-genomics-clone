import React from 'react';
import withData from './withData';
import styles from '../styles/Results.module.scss'

const FacetList = ({ facets, title }) => {
  return (
    <div>
      <div className={styles.facetType}>{title}</div>
      <div className={styles.facetTypeContainer}>
        {
          Object.keys(facets).map((facet) => (
            <div className={styles.facetType}>{facet} ({facets[facet]})</div>
          ))
        }
      </div>
    </div>
  );
};

const Results = ({ data, dataSource }) => (
  <div className={styles.results}>
    <div className={styles.stats}>
      <section className={styles.facets}>
        <FacetList facets={data[0].facets.tags} title='TAGS' />
        <FacetList facets={data[0].facets.species} title='SPECIES' />
        <FacetList facets={data[0].facets.tissueTypes} title='TISSUE TYPE' />
        <FacetList facets={data[0].facets.journal} title='JOURNAL' />
        <FacetList facets={data[0].facets.productGroups} title='10X GENOMICS PRODUCT' />
      </section>
      <section>{data[0].nbHits} RESULTS</section>
    </div>
  </div>
);

export default withData(Results);
