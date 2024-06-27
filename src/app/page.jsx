import PieChart from "./piechart/page";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1 className="text-center text-4xl font-bold">Apex Charts</h1>
    <div className="p-6 flex justify-between">
      <Link href={'/barchart'}>
        <div className=" h-[320px] card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              width={370}
              src="./bar-chart.png"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">Barchart | Population</h2>
          </div>
        </div>
      </Link>
      <Link href={'/piechart'}>
        <div className=" h-[320px] card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="./piechart.png"
              width={370}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">PieChart | Classwork</h2>
          </div>
        </div>
      </Link>
      <Link href={'/barchart2'}>
        <div className=" h-[320px] card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              width={370}
              src="./bar-chart2.svg"
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">PieChart | Area</h2>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
}
