import Image, { StaticImageData } from 'next/image'
import styles from './Drink.module.css'

interface DrinkProps {
    title: string,
    subtitle: string,
    className: string,
    image: StaticImageData,
    updateFunction: (drink:string) => void
}

const Drink = ({title, subtitle, className, image, updateFunction}:DrinkProps) => {
    const handleClick = ():void => {
        updateFunction(title)
    }
    
    return (
        <div className={`${styles.drinkContainer} ${styles[className]}`}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div className={styles.imageContainer}>
                <Image src={image} alt={title}
                style={{width: '100%', height: 'auto'}}
                sizes="(min-width: 768px) 50vw, 100vw)"/>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleClick} className={styles.voteButton}>{title} är bäst</button>
                </div>
        </div>
    )
}

export default Drink