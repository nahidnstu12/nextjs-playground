import Head from "next/head";
import CarrousalGallary from "../components/CarrousalGallary";
import NeatCarousal from "../components/bannar/NeatBannar";
import SectionHeader from "../components/common/SectionHeader";
import Example from "../components/dummy/Test2";
// import { RenderNavLinks } from "../components/common/SingleComponent";
// import Navbar from "../components/nav/Navbar";
import FlickBannar from "../components/bannar/FlickBannar";
import Navbar from '../components/nav/Navbar'
import MultilevelCategory from '../components/nav/MultiLevelCategory'

export default function Home() {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MultilevelCategory />
      <SectionHeader isWhite={true} text="We" colorText="Made" />
      <FlickBannar />
      <Example />
      <CarrousalGallary />
      <NeatCarousal />
    </div>
  );
}
