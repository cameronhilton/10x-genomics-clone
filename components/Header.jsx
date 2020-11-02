import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>0.1X GENOMICS</div>
      <div className={styles.menuItems}>
        <div>Products</div>
        <div>Research Areas</div>
        <div>Resources</div>
        <div>Support</div>
        <div>Company</div>
        <div>Careers</div>
      </div>
    </div>
  );
};
