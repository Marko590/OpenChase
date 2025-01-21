"use client";
type Participants = {
  contestants: string[];
  chasers: string | string[];
};
import { useState } from "react";
import SetupContainer from "./components/SetupContainer";
import Link from "next/link";
export default function Home() {
  const [nameFieldValue, setNameFieldValue] = useState<string>();
  const [contestantsArray, setContestantsArray] = useState<string[]>([]); // Use useState to track namesArray
  const [chaserArray, setChaserArray] = useState<string[]>([]); // Use useState to track namesArray

  const handleInsertContestant = () => {
    setContestantsArray((prevArray) => [...prevArray, nameFieldValue]);
  };
  const handleInsertChaser = () => {
    setChaserArray((prevArray) => [...prevArray, nameFieldValue]);
  };
  return (
    <div className="lg:p-32 min-h-screen bg-stone-900 flex flex-col items-center justify-center">
      <h1 className="py-5 text-8xl font-bold">DEAD LETTERSĆ </h1>
      <div className="flex flex-col xl:flex-row gap-8 min-h-screen w-full px-4 py-4 bg-stone-900 rounded-lg">
        <div className="flex flex-col gap-8">
          <SetupContainer title="Insert the csv by dragging it here">
            <p>
              Drag your .csv here or{" "}
              <button className="text-blue-500 hover:underline focus:outline-none">
                import it by clicking here
              </button>
            </p>
          </SetupContainer>{" "}
          <SetupContainer title="Insert the csv by dragging it here">
            <p>
              Drag your .csv here or
              <button className="text-blue-500 hover:underline focus:outline-none">
                import it by clicking here
              </button>
            </p>
            <p>
              Drag your .csv here or{" "}
              <button className="text-blue-500 hover:underline focus:outline-none">
                import it by clicking here
              </button>
            </p>
          </SetupContainer>
        </div>
        <div className="flex flex-col gap-8">
          <SetupContainer title="Insert the csv by dragging it here">
            <p>
              Drag your .csv here or{" "}
              <button className="text-blue-500 hover:underline focus:outline-none">
                import it by clicking here
              </button>
            </p>
          </SetupContainer>
          <SetupContainer title="Insert the contestant names">
            <input
              type="text"
              placeholder="Enter something..."
              onChange={(e) => {
                setNameFieldValue(e.target.value);
              }}
              className="w-full p-4 mb-4 bg-[#303134] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  handleInsertContestant();
                }}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Insert contestant
              </button>
              <button
                onClick={() => {
                  handleInsertChaser();
                }}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Insert chaser
              </button>
            </div>
            <div className="flex flex-row justify-between">
              {contestantsArray && contestantsArray.length > 0 ? (
                <ol className="list-decimal pl-6">
                  {contestantsArray.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ol>
              ) : (
                <p>No names available</p>
              )}
              {chaserArray && chaserArray.length > 0 ? (
                <ol className="list-decimal pl-6">
                  {chaserArray.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ol>
              ) : (
                <p>No names available</p>
              )}
            </div>
          </SetupContainer>
        </div>
      </div>
      <Link href="/quiz">Go to next page </Link>
    </div>
  );
}
