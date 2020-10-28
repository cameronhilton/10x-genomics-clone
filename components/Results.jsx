import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updatePublications } from '../redux/publications/publications.actions';
import { selectFacets, selectPublications } from '../redux/publications/publications.selectors';
import Card from './Card';
import FacetList from './FacetList';
import styles from '../styles/Results.module.scss'

class Results extends React.Component {
  componentDidMount() {
    const { updatePublications } = this.props;

    fetch(this.props.dataSource)
      .then(response => response.json())
      .then(data => {updatePublications(data.results[0])});
  }

  render() {
    const { publications, facets } = this.props;

    if (!publications.nbHits) {
      return <div>LOADING</div>;
    }

    const { hits, nbHits } = publications;

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
          <ul className={styles.cards}>
            {
              Object.keys(hits).map(hit => (
                <Card key={hits[hit].objectID} card={hits[hit]} />
              ))
            }
          </ul>
        </section>
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  publications: selectPublications,
  facets: selectFacets,
});

const mapDispatchToProps = dispatch => ({
  updatePublications: publications => dispatch(updatePublications(publications)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
