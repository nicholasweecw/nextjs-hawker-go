import Image from "next/image";
import { HawkerCard, Searchbar } from "./components";
import { fetchHawkerCentres } from "../../utils";
import Counter from "./components/Counter";

export default async function Home() {
  return (
    <div className="hero">
      <div className="banner">
        <Image src="/eagle.png" alt="site-logo" width={50} height={50} />
        <h1>HAWKERGO</h1>
      </div>
      <Searchbar />
      <Counter />
    </div>
  );
}
