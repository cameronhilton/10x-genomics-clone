import React from 'react';
import PublicationCard from './PublicationCard';
import styles from '../styles/PublicationModal.module.scss';

class PublicationModal extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.props.closePublicationModal();
    }
  };

  render() {
    const { publication, closePublicationModal } = this.props;

    return (
      <div className={styles.publicationModal} onClick={closePublicationModal}>
        <button className={styles.closeBtn}>X</button>
        <PublicationCard publication={publication} isModal={true} />
      </div>
    );
  }
};

export default PublicationModal;
