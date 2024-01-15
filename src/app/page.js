import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 mx-24">
      <Hero />
      {/* <div>Hello</div> */}
    </main>
  )
}
