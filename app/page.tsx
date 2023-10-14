import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='text-black dark:text-white'>
      <h1 className='text-black'>Hello</h1>
      <Link href='/users' className='text-black'>Users</Link>
      <ProductCard/>
    </main>
  )
}
