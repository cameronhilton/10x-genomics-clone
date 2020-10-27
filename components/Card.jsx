import styles from '../styles/Card.module.scss';

// Get correct journal date (date may be invalid)
const getJournalDate = (date, ePubDate) => {
  let splitChar = '-';
  let validDate = date;

  if ((date && date.includes('9999')) && ePubDate) {
    validDate = ePubDate;
    splitChar = '/';
  }

  const journalDate = validDate ? new Date(validDate.split(splitChar)) : 'Unknown Date';
  const dateStr = journalDate.toLocaleString('default', { year: "numeric", month: 'short' });

  return dateStr;
};

// Info displayed on right side of Card
const Hits = ({ hitList, title }) => (
  <li className={styles.hitType}>
    <div className={styles.hitTypeTitle}>{title.toLocaleUpperCase()}</div>
    {hitList.map((val, idx) =>
      <div key={val} className={styles.hitTypeItem}>
        {val}{idx < hitList.length - 1 && ','}
      </div>)}
  </li>
);

const Card = ({ card }) => {
  const journalDate = getJournalDate(card.date, card.ePubDate);

  return (
    <li className={styles.card}>
      <div className={styles.articleInfo}>
        <div>{card.journal}, {journalDate}</div>
        <div className={styles.articleTitle}>{card.title}</div>
        <cite>
          <div>{card.productGroups ? card.productGroups[0] : 'No product group given'}</div>
          <span>
            {card.doi &&
              <a
                href={`https://doi.org/${card.doi}`}
                rel='noopener noreferrer'
                target='_blank'
              >
                {`DOI: ${card.doi}`}
              </a>}
          </span>
          <span>
            {card.pmid &&
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${card.pmid}`}
                rel='noopener noreferrer'
                target='_blank'
              >
                {`PubMed: ${card.pmid}`}
              </a>}
          </span>
        </cite>
      </div>
      <ul className={styles.hitInfo}>
        {card.tags && <Hits hitList={card.tags} title='TAGS' />}
        {card.species && <Hits hitList={card.species} title='SPECIES' />}
        {card.tissueTypes && <Hits hitList={card.tissueTypes} title='SAMPLE TYPES' />}
      </ul>
    </li>
  );
}

export default Card;
