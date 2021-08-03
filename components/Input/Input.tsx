import { InputProps } from "./Input.props";
import styles from './Input.module.css'


export default function Input({children, ...props}: InputProps): JSX.Element {
    return (
        <div className={styles.inputwrapper}>{children}<input name='imput' required className={styles.field} pattern={props.pattern} type={props.type} placeholder={props.placeholder} /></div> 
    )
}
