import Head from 'next/head'
import Welcome from '../components/Welcome'
import Caros from '../components/common/Carousal'
import Button from '@material-ui/core/Button';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-red-400 px-4 flex mb-5">
        <h1 className="text-blue-900">Nextjs Boilerplate</h1>
        <Button  className="btn bg-gray-600 w-10 hover:bg-red-500">Texrt</Button>
      </main>
      <Welcome />
      <Caros />
    </div>
    
  )
}
