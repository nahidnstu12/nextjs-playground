import Head from 'next/head'
import { Typography } from '@material-ui/core';
export default function Home() {
  return (
    <div className="flex py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography className="text-red-500">Text</Typography>

     
    </div>
    
  )
}
