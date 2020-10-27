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

const Card = ({ card }) => {
  const journalDate = getJournalDate(card.date, card.ePubDate);

  return (
    <li className={styles.card}>
      <div className={styles.articleInfo}>
        <div>{card.journal}, {journalDate}</div>
        <div>{card.title}</div>
        <div>{card.productGroups ? card.productGroups[0] : 'No product group given'}</div>
        <div>
          {card.doi &&
            <a href={`https://doi.org/${card.doi}`}>{`DOI: ${card.doi}`}</a>}
        </div>
      </div>
      <div className={styles.hitInfo}>
            HITS
      </div>
    </li>
  );
}

export default Card;
