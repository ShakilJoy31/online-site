import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter(); 
  useEffect(()=>{
    const localStorageSavedUser = localStorage.getItem('tradingUser');
    const localStorageUnSavedUser = localStorage.getItem('savedUser');
    if(localStorageUnSavedUser && localStorageSavedUser){
      router.push('/dashboard')
    }
    else{
      router.push('/login')
    }
  },[]);
  return (
    <>
      <Head>
        <title>Online Treading</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
