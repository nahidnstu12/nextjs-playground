import Head from "next/head";
import { Typography } from "@material-ui/core";
import CarrousalGallary from "../components/CarrousalGallary";

export default function Home() {
  
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography className="text-red-500">Profile Collection</Typography>

      <CarrousalGallary />
    </div>
  );
}

