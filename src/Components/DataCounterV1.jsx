import { useEffect, useState } from "react";

function DataCounterV1() {
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

  // Steps Functions
  const incStep = () => {
    setStep((old) => old + 1);
  };
  const decStep = () => {
    setStep((old) => (old > 1 ? old - 1 : 1));
  };

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

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-b from-orange-100 to-orange-300  font-sans px-4 mx-auto w-1/2 py-5 mb-5 text-black">
      <h1 className="text-4xl font-bold mb-8 ">The Date</h1>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={decStep}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow transition">
          -
        </button>
        <p className="text-2xl font-medium">
          Step: <span className="font-bold ml-2">{step}</span>
        </p>
        <button
          onClick={incStep}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition">
          +
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={decCount}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow transition">
          -
        </button>
        <p className="text-2xl font-medium">
          Count: <span className="font-bold ml-2">{count}</span>
        </p>
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
    </div>
  );
}

export default DataCounterV1;
