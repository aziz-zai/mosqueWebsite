import React from "react";
import { GebetszeitenTable } from "../component/gebetszeitenTable";

const Gebetszeiten = () => {
  return (
    <>
      <div
        className=" z-1 my-20 flex h-fit flex-col items-start justify-center gap-16 pl-[2rem] sm:my-0 sm:h-[calc(100svh-2rem)] sm:items-center md:flex-row md:justify-start lg:pl-[3rem] xl:pl-[8rem] 2xl:pl-72"
        id="home"
      >
        <div className="relative flex flex-row ">
          <div className="mr-8 mt-10 flex max-w-[40rem] flex-col items-start justify-start  gap-6 sm:mr-0 ">
            <div>
              <div className="absolute right-0 top-0 w-20"></div>
              <h1 className="text-primary font-eudoxus bg-accent-100 mx-0 mb-1 w-fit rounded  text-lg font-bold uppercase sm:mx-auto sm:text-sm md:mx-0 md:text-lg">
                HERZLICH WILKOMMEN
              </h1>
              <h2 className="font-eudoxus text-primaryText text-start text-6xl font-bold sm:text-center  md:text-start lg:text-6xl xl:text-7xl 2xl:text-8xl">
                beim
                <span className="text-gradient"> Afghanischen </span>
                Kulturverein e.V
              </h2>
              <p className="text-primaryText mt-4 text-start text-lg sm:text-center md:text-start">
                Wir freuen uns über Ihr Interesse an unserem Verein, der sich
                für die Förderung der afghanischen Kultur und Gemeinschaft
                einsetzt. Als gemeinnütziger Verein sind wir im religiösen,
                sozialen und kulturellen Bereich aktiv. Unser Ziel ist es, die
                religiöse Betreuung von Muslimen in Deutschland zu gewährleisten
                und zum gesellschaftlichen Zusammenhalt und einem friedlichen
                Zusammenleben beizutragen.
              </p>
            </div>
            <div className="flex w-fit justify-start gap-3 pb-0 sm:w-full sm:justify-center sm:pb-4 md:justify-start lg:gap-5 lg:pb-28 ">
              <a
                href="/#contact"
                className="bg-primary-100 hover:bg-primary-200 rounded  px-6 py-3 text-sm font-bold text-white sm:px-3 sm:py-2 lg:text-base xl:px-6 xl:py-3 "
              >
                Mehr erfahren
              </a>
              <a
                href="/#about"
                className="bg-secondary-0 hover:bg-secondary-100 text-primaryText rounded px-6 py-3 text-sm font-bold sm:px-3 sm:py-2 lg:text-base xl:px-6 xl:py-3 "
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
        <div className="bg-red relative mx-auto hidden w-fit  md:block">
          <div className="flex justify-center">
            <h2 className="text-primary font-eudoxus bg-accent-100 border-primaryText mb-6 w-fit border-b-2 text-center text-5xl">
              Sonntag, 10.03.2024
            </h2>
          </div>
          <GebetszeitenTable />
        </div>
      </div>
    </>
  );
};

export default Gebetszeiten;
