import { Hero } from "@/components";
import Image from "next/image";
import {SearchBar} from "@/components";
import {CustomFilter} from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-16 padding-x padding-y max-with" id="discover">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl">Car Catalogue</h1>
          <p>Expore the cars that you like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title = "year"/>
            <CustomFilter title = "fuel"/>
          </div>
        </div>
      </div>
    </main>
  );
}
