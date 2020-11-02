import React from 'react';
import styles from '../styles/PublicationCard.module.scss';

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

class PublicationCard extends React.Component {
  // Author may be string or Object
  getAuthorName = (author) => {
    return (
      `${typeof author === 'string' ? author : author.foreName || ''} ${author.lastName || ''}`
    );
  }

  render() {
    const { publication, isModal=false, showPublicationModal } = this.props;
    const journalDate = getJournalDate(publication.date, publication.ePubDate);
    const author = publication.authors?.[0];

    return (
      <li className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.articleInfo}>
          <cite>
            <span>{publication.journal}, {journalDate}</span>
            {
              !isModal &&
                <span>{author &&
                  this.getAuthorName(author)}
                  {publication.authors?.length > 1 && ' et al.'}
                </span>
            }
          </cite>
          <div
            className={styles.articleTitle}
            onClick={() => !isModal && showPublicationModal(publication)}
            style={{
              cursor: isModal ? 'default' : 'pointer',
            }}
          >
            {publication.title}
          </div>
          <cite>
            <div>{publication.productGroups ? publication.productGroups[0] : 'No product group given'}</div>
            <span>
              {publication.doi &&
                <a
                  href={`https://doi.org/${publication.doi}`}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {`DOI: ${publication.doi}`}
                </a>}
            </span>
            <span>
              {publication.pmid &&
                <a
                  href={`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}`}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {`PubMed: ${publication.pmid}`}
                </a>}
            </span>
          </cite>
          {
          isModal &&
            <div>
              <div className={styles.abstract}>
                ABSTRACT
                <p>{publication?._highlightResult?.abstract?.value}</p>
              </div>
              <div className={styles.authors}>AUTHORS</div>
              {
                Object.keys(publication.authors).map((author, idx) => {
                  let authorStr = this.getAuthorName(publication.authors[author]);
                  if (idx < publication.authors.length - 1) {
                    authorStr += ', '
                  }
                  return authorStr;
                })
              }
            </div>
          }
        </div>

        <div className={styles.rightContainer}>
          {
            isModal &&
              <button
                className={styles.pubMedBtn}
                onClick={() => window.open(`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}`, '_blank')}
              >
                View on Pubmed
              </button>
          }
          <ul className={styles.hitInfo}>
            {publication.tags && <Hits hitList={publication.tags} title='TAGS' />}
            {publication.species && <Hits hitList={publication.species} title='SPECIES' />}
            {publication.tissueTypes && <Hits hitList={publication.tissueTypes} title='SAMPLE TYPES' />}
          </ul>
        </div>
      </li>
    );
  }

}

export default PublicationCard;
