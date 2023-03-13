import { Inter } from 'next/font/google'
import styles from './page.module.css'
import getTreeData from '@/lib/getTreeData'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import ToggleDarkMode from './ToggleDarkMode'
// import Navtree from './components/Navtree'
const inter = Inter({ subsets: ['latin'] })

const Navigation = dynamic(() => import("./components/NavTree"), {
  suspense: true,
});

export default async function Home() {

  const getData = await getTreeData()

  return (
    <main className={`${styles.main} flex-row justify-between`}>
      <ToggleDarkMode />
      <h1 className='py-2'>Welcome to my website!</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar data = {getData}/>
      {/* <Navigation treeData={getData}/> */}
      </Suspense>

    </main>
  )
}
