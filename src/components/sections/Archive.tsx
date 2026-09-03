import { archives } from '../../data/archives';
import styles from './Archive.module.css';

export default function Archive() {
  return (
    <section
      className={styles.archive}
      data-channels={archives.channels.length}
    />
  );
}
