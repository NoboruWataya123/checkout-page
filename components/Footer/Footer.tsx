import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css'

export default function Footer({children}: FooterProps): JSX.Element {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    )
}
