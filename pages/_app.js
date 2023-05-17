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
        <div className='flex justify-center'>
          <div>
            <Sidebar></Sidebar>
          </div>
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  )
}


