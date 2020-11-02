import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FacetList from './FacetList';
import { updateFacets } from '../redux/publications/publications.actions';
import { selectFacets } from '../redux/publications/publications.selectors';
import styles from '../styles/FiltersSection.module.scss'

class FiltersSection extends React.Component {
  state = {
    filterMenuExpanded: false,
    gotMoreFilters: false,
  }

  getMoreFilters = () => {
    if (this.state.gotMoreFilters === true) {
      this.setState({filterMenuExpanded: !this.state.filterMenuExpanded});
      return;
    }

    // Mocking out API call results
    fetch('get_more_facets.json')
      .then(response => response.json())
      .then(data => this.props.updateFacets(data.results[0].facets));

    this.setState({
      filterMenuExpanded: true,
      gotMoreFilters: true,
    });
  }

  render() {
    const { filterMenuExpanded } = this.state;
    const { facets } = this.props;

    return (
      <section className={styles.filters}>
        <div className={styles.facets}>
          <FacetList expanded={filterMenuExpanded} facets={facets.tags} title='TAGS' />
          <FacetList expanded={filterMenuExpanded} facets={facets.species} title='SPECIES' />
          <FacetList expanded={filterMenuExpanded} facets={facets.tissueTypes} title='TISSUE TYPE' />
          <FacetList expanded={filterMenuExpanded} facets={facets.journal} title='JOURNAL' />
          <FacetList expanded={filterMenuExpanded} facets={facets.productGroups} title='0.1X GENOMICS PRODUCT' />
        </div>
        <div className={styles.filtersButtonContainer}>
          <button
            type='button'
            className={styles.filtersButton}
            onClick={this.getMoreFilters}
          >
            {this.state.filterMenuExpanded
              ? <span>&and; Show fewer filters</span>
              : <span>&or; Show more filters</span>}
          </button>
        </div>

      </section>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  facets: selectFacets,
});

const mapDispatchToProps = dispatch => ({
  updateFacets: facets => dispatch(updateFacets(facets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
