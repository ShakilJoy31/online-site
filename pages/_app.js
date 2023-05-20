import '@/styles/globals.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <div>
      <Navbar></Navbar>
      <div style={{
        backgroundImage: "linear-gradient(45deg, #BFEAF5, #FEA1BF)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
      }} className='min-h-screen'
      >
        <div className='flex'>
          <div className='hidden h-auto lg:block md:block'>
            <Sidebar></Sidebar>
          </div>

          <div className={`${(router.pathname == '/profile' || router.pathname == '/login' || router.pathname == '/signup' || router.pathname == '/tradeBot' || router.pathname == '/alpha' || router.pathname == '/myTrade' || router.pathname == '/withdrawal' || router.pathname == '/internalTransfer' ) ? 'w-full' : ''}`}>
            <Component {...pageProps} />
          </div>
        </div>
        
        <div style={{
          position:'fixed',
          bottom: '0px',
          backgroundColor: '#247f9e'
        }} className='block w-full lg:hidden md:hidden'>
            <Sidebar></Sidebar>
          </div>
      </div>
    </div>
  )
}


