import { ItemProps } from "./Item.props";
import styles from './Item.module.css'


export default function Item({children}: ItemProps): JSX.Element {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
