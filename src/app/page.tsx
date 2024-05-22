import Image from "next/image";
import Drink from "./components/Drink";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Drink title="Julmust" 
            subtitle='Älskad av alla tomtenissar' 
      className='julmust'></Drink>
      <Drink title="Påskmust" 
      subtitle='När påskliljorna blommar åker denna must fram' 
      className='påskmust'></Drink>
    </main>
  );
}
