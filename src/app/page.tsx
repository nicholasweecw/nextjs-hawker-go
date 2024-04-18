import Image from "next/image";
import { Searchbar } from "./components";

export default function Home() {
  return (
    <div className="hero">
      <div className="banner">
        <Image src="/eagle.png" alt="site-logo" width={50} height={50} />
        <h1>HAWKERGO</h1>
      </div>
      <Searchbar />
    </div>
  );
}
