import withData from './withData';
import styles from '../styles/Results.module.scss'

const Results = ({ data, dataSource }) => (
  <div className={styles.results}>
    <div className={styles.stats}>
      <div>{data[0].nbHits} RESULTS</div>
    </div>
  </div>
);

export default withData(Results);
