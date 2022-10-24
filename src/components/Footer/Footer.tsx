import styles from './Footer.module.scss';
import { ReactComponent as LogoAluroni } from 'assets/logoAluroni.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoAluroni />
    </footer>
  );
}