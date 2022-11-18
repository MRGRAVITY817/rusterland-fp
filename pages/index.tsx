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

  const cannotFit = () => {
    const redValue = document.getElementById("red-value");
    const redType = document.getElementById("red-type");
    if (redValue && redType) {
      const valueRect = redValue.getBoundingClientRect();
      const valuePos = valueRect.x + valueRect.width / 2;
      const typeRect = redType.getBoundingClientRect();
      const typePos = typeRect.x + typeRect.width / 2;
      animate(
        redValue,
        {
          x: [
            0,
            typePos - valuePos - typeRect.width,
            typePos - valuePos - typeRect.width - 40,
          ],
        },
        { duration: 0.7 }
      );
      animate(
        redType,
        {
          x: [0, -10, 10, 0],
        },
        {
          delay: 0.5,
          duration: 0.3,
          offset: [0, 0.25, 0.75],
        }
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Rust x Functional</title>
      </Head>
      <div className="p-32">
        <div className="flex items-center justify-start gap-x-[200px] mb-32">
          <div
            id="blue-value"
            className="w-[110px] h-[110px] rounded-full bg-blue-400 -z-10"
          />
          <div
            id="blue-type"
            className="w-[100px] h-[100px] rounded-full ring-8 ring-blue-200"
          />
          <button
            onClick={() => fitType()}
            className="py-2 px-4 rounded-md focus:outline-none bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 transition-all text-white text-2xl"
          >
            Fit
          </button>
        </div>
        <div className="flex items-center justify-start gap-x-[200px]">
          <div
            id="red-value"
            className="w-[110px] h-[110px] rounded-full bg-red-400 -z-10"
          />
          <div
            id="red-type"
            className="w-[100px] h-[100px] ring-8 ring-red-200"
          />
          <button
            onClick={() => cannotFit()}
            className="py-2 px-4 rounded-md focus:outline-none bg-slate-500 hover:bg-slate-600 focus:bg-slate-600 transition-all text-white text-2xl"
          >
            Fit
          </button>
        </div>
      </div>
    </div>
  );
}
