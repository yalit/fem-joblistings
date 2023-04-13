import { syncBuiltinESMExports } from 'module';
import styles from './header.module.css';

export default function Header() {
    return (
        <div id={styles.header} role="banner"></div>
    )
}