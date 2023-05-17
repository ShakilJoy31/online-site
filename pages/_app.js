import '@/styles/globals.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

export default function App({ Component, pageProps }) {
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
          <div style={{backgroundColor: '#247f9e'}} className='hidden lg:block md:block'>
            <Sidebar></Sidebar>
          </div>
          <div>
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


