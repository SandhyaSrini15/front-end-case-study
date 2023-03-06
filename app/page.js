import { Inter } from 'next/font/google'
import styles from './page.module.css'
import getTreeData from '@/lib/getTreeData'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Navtree from './components/Navtree'
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const getData = await getTreeData()

  return (
    <main className={`${styles.main} flex-row justify-between`}>
      <h1 className='py-2'>Welcome to my website!</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <Navbar data = {getData}/> */}
      <Navtree treeData={getData}/>
      </Suspense>

    </main>
  )
}
