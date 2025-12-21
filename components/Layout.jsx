import Titlebar from '../components/Titlebar'
import Sidebar from '../components/Sidebar'
import Explorer from '../components/Explorer'
import Bottombar from '../components/Bottombar'
import Tabsbar from './Tabsbar'
import styles from '../styles/Layout.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Snowfall from 'react-snowfall'

const Layout = ({ children }) => {
  // set scroll to top of main content on url pathname change
  const router = useRouter();
  const [snowfallColor,setSnowFallColor] = useState("white");

  useEffect(()=>{
    const setColorData = setInterval(()=>{
      setSnowFallColor((prev) => prev === "red" ? "white" : "white");
    },1000)

    return () => clearInterval(setColorData)
  },[])

  useEffect(() => {
    const main = document.getElementById('main-editor')
    main.scrollTop = 0
  }, [router.pathname])
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            <Snowfall color={snowfallColor}/>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
