import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updatePublications } from '../redux/publications/publications.actions';
import { selectPublications } from '../redux/publications/publications.selectors';
import Card from './Card';
import FiltersSection from './FiltersSection';
import styles from '../styles/Results.module.scss'

class Results extends React.Component {
  componentDidMount() {
    const { dataSource, updatePublications } = this.props;

    fetch(dataSource)
      .then(response => response.json())
      .then(data => updatePublications(data.results[0]));
  }

  render() {
    const { publications } = this.props;

    if (!publications.nbHits) {
      return <div>LOADING</div>;
    }

    const { hits, nbHits } = publications;

    return (
      <div className={styles.results}>
        <FiltersSection />
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
});

const mapDispatchToProps = dispatch => ({
  updatePublications: publications => dispatch(updatePublications(publications)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
