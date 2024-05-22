import styles from './Votes.module.css'

interface röstProps {
    julmustVotes: number,
    påskmustVotes: number
}

const Votes = ({julmustVotes, påskmustVotes}:röstProps) => {
    return (
        <div className={styles.voteContainer}>
            <p>Julmust: {julmustVotes}</p>
            <p>Påskmust: {påskmustVotes}</p>
        </div>
    )
}

export default Votes