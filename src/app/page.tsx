'use client'
import Drink from "./components/Drink";
import styles from "./page.module.css";
import Julmust from '../../public/images/julmust.png'
import Påskmust from '../../public/images/påskmust.png'
import Winner from '../app/components/Winner'
import { useState, useEffect } from "react";

export default function Home() {
  const [julmustVotes, setJulmustVotes] = useState<number>(0);
  const [påskmustVotes, setPåskmustVotes] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null)

  const handleVotes = (drink: string): void => {
    drink === 'Julmust' ?
    setJulmustVotes(julmustVotes +1)
    : setPåskmustVotes(påskmustVotes + 1)
}

useEffect (()  => {
  julmustVotes > påskmustVotes ? setWinner('Julmust')
  : påskmustVotes > julmustVotes ? setWinner('Påskmust')
  : setWinner (null)
  console.log(julmustVotes + '|' + påskmustVotes)
}, [julmustVotes, påskmustVotes])

  return (
    <>
      {winner && <Winner winner={winner}/>}
      <main className={styles.main}>
      <Drink title="Julmust" 
            subtitle='Musten som är älskad av alla tomtenissar' 
            className='julmust'image={Julmust} updateFunction={handleVotes}/>
      <Drink title="Påskmust" 
      subtitle='När påskliljorna blommar åker denna must fram' 
      className='påskmust' image={Påskmust} updateFunction={handleVotes}/>
    </main>                   
      </>
  );     
}