import { useEffect, useState } from "react";

function DataCounterV2() {
  const date = new Date();
  function formattedDate(date) {
    return Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [newDate, setNewDate] = useState(formattedDate(date));
  // Count Functions
  const incCount = () => {
    setCount((old) => old + step);
  };
  const decCount = () => {
    setCount((old) => old - step);
  };
  useEffect(() => {
    const newDateInstance = new Date(date); // Create a new Date instance
    newDateInstance.setDate(newDateInstance.getDate() + count); // Modify the date
    setNewDate(formattedDate(newDateInstance)); // Format and set newDate
  }, [count, date]); // Include `date` dependency for consistency

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-orange-100 to-orange-300  font-sans px-4 mx-auto w-1/2 py-5 mb-5 text-black">
      <h1 className="text-4xl font-bold mb-5 ">The Date</h1>
      <div>
        <div className="flex items-center justify-center mb-5">
          <input
            type="range"
            name="steps"
            id="steps"
            min={0}
            max={10}
            value={step}
            onChange={(e) => {
              setStep(+e.target.value);
            }}
          />
          <span className="ml-1 font-sans text-[18px] font-semibold">
            {step}
          </span>
        </div>
        <div className="flex items-center justify-center gap-5 mb-5">
          <button
            onClick={decCount}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow transition">
            -
          </button>
          <input
            type="number"
            id="number-input"
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value)); // Update state with the entered value
            }}
            className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={incCount}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition">
            +
          </button>
        </div>

        <p className="text-xl text-center">
          {count === 0
            ? "Today"
            : `${Math.abs(count)} days ${
                count < 0 ? "ago was" : "from today is"
              }`}{" "}
          <span className="font-bold">{newDate}</span>
        </p>

        {count !== 0 || step !== 1 ? (
          <div className="flex items-center justify-center my-5 py-1">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition"
              onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DataCounterV2;
