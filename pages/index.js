import Head from "next/head";
import CarrousalGallary from "../components/CarrousalGallary";
import NeatCarousal from "../components/bannar/NeatBannar";
import SectionHeader from "../components/common/SectionHeader";
// import FlickBannar from "../components/bannar/FlickBannar";

export default function Home() {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionHeader isWhite={true} text="We" colorText="Made" />
      {/* <FlickBannar /> */}
      <CarrousalGallary />
      <NeatCarousal />
    </div>
  );
}
