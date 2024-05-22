import styles from './Winner.module.css'

interface WinnerProps {
    winner: string
}

const Winner = ({winner}:WinnerProps) => {
    return(
        <h2 className={styles.winnerContainer}>Bästa musten är... {winner}!</h2>
    )
}

export default Winner