import Head from "next/head";
import { animate } from "motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    animate("#blue-value", { transform: "rotate(45deg)" }, { duration: 0.5 });
  }, []);

  const fitType = () => {
    const blueValue = document.getElementById("blue-value");
    const blueType = document.getElementById("blue-type");
    if (blueType && blueValue) {
      const valueRect = blueValue.getBoundingClientRect();
      const valuePos = valueRect.x + valueRect.width / 2;
      const typeRect = blueType.getBoundingClientRect();
      const typePos = typeRect.x + typeRect.width / 2;
      animate(
        "#blue-value",
        {
          transform: `translateX(${typePos - valuePos}px)`,
        },
        { duration: 0.5 }
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Rust x Functional</title>
      </Head>
      <div className="p-32">
        <div className="flex items-center justify-start gap-x-6">
          <div className="w-[300px] flex flex-col items-center justify-center gap-6">
            <div
              id="blue-value"
              className="w-[110px] h-[110px] rounded-full bg-blue-400 -z-10"
            />
            <p className="text-4xl text-center">This is a value</p>
          </div>
          <div className="w-[300px] flex flex-col items-center justify-center gap-6">
            <div
              id="blue-type"
              className="w-[100px] h-[100px] rounded-full ring-8 ring-blue-200"
            />
            <p className="text-4xl text-center">This is a type</p>
          </div>
          <button
            onClick={() => fitType()}
            className="py-2 px-4 rounded-md focus:outline-none bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 transition-all text-white text-2xl"
          >
            Fit
          </button>
        </div>
      </div>
    </div>
  );
}
