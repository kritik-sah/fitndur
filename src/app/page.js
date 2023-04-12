import Image from 'next/image'
import { Inter } from 'next/font/google'
import AuthModal from './components/Auth/AuthModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-[90vh]">
      Homes
      <AuthModal/>
    </main>
  )
}
