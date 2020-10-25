import React from 'react';
import styles from '../styles/Search.module.scss'

export default class Search extends React.Component {
  state = {
    query: '',
  }

  render () {
    const { query } = this.state;

    return (
      <div className={styles.search}>
        <form>
          <span className={styles.searchIcon}>&#128269;</span>
          <input
            className={styles.searchBox}
            type='search'
            name='Publication search'
            placeholder='Search abstracts, sample types, and more'
            value={query}
            onChange={(e) => this.setState({query: e.target.value})}
          />
        </form>
      </div>
    );
  }

};
