import styles from './Drink.module.css'

interface DrinkProps {
    title: string,
    subtitle: string,
    className: string  
}

const Drink = ({title, subtitle, className}:DrinkProps) => {
    return(
        <div className={`${styles.drinkContainer} ${styles[className]}`}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div></div>
            <div></div>
        </div>
    )
}

export default Drink