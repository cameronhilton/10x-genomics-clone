import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updatePublications } from '../redux/publications/publications.actions';
import { selectPublications } from '../redux/publications/publications.selectors';
import PublicationCard from './PublicationCard';
import PublicationModal from './PublicationModal';
import FiltersSection from './FiltersSection';
import styles from '../styles/Results.module.scss'

class Results extends React.Component {
  state = {
    showModal: false,
    publication: null,
  }

  componentDidMount() {
    const { dataSource, updatePublications } = this.props;

    fetch(dataSource)
      .then(response => response.json())
      .then(data => updatePublications(data.results[0]));
  }

  closePublicationModal = () => {
    this.setState(() => ({
      showModal: false,
    }));
  }

  showPublicationModal = (hit) => {
    this.setState(() => ({
      showModal: true,
      publication: hit,
    }));
  }

  render() {
    const { publications } = this.props;
    const { publication, showModal } = this.state;

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
                <PublicationCard
                  key={hits[hit].objectID}
                  publication={hits[hit]}
                  showPublicationModal={this.showPublicationModal}
                />
              ))
            }
          </ul>
        </section>
        { showModal && <PublicationModal publication={publication} closePublicationModal={this.closePublicationModal}/> }
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
