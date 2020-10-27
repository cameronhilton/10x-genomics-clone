import React from 'react';
import Card from './Card';
import FacetList from './FacetList';
import withData from './withData';
import styles from '../styles/Results.module.scss'

const Results = ({ data }) => {
  const { facets, hits, nbHits } = data[0];

  return (
    <div className={styles.results}>
      <section className={styles.stats}>
        <div className={styles.facets}>
          <FacetList facets={facets.tags} title='TAGS' />
          <FacetList facets={facets.species} title='SPECIES' />
          <FacetList facets={facets.tissueTypes} title='TISSUE TYPE' />
          <FacetList facets={facets.journal} title='JOURNAL' />
          <FacetList facets={facets.productGroups} title='10X GENOMICS PRODUCT' />
        </div>
      </section>
      <section>
        <div className={styles.cardHeader}>
          <div>{nbHits} RESULTS</div>
        </div>
        <ul>
          {
            Object.keys(hits).map(hit => (
              <Card key={hits[hit].objectID} card={hits[hit]} />
            ))
          }
        </ul>
      </section>
    </div>
  )
};

export default withData(Results);
