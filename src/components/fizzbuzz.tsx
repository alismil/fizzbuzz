import { useState } from "react";
import { fizzOrBuzz } from "../utils/fizz-or-buzz";

export default function FizzBuzz(): JSX.Element {
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<(string | number)[]>([1]);

  const currentValue: number = storedValuesFromCurrentRender.length + 1;

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>{storedValuesFromCurrentRender.join("  -  ")}</p>
      <button
        onClick={() =>
          queueRerenderWithNewStoredValues([
            ...storedValuesFromCurrentRender,
            fizzOrBuzz(currentValue),
          ])
        }
      >
        NEXT
      </button>
    </>
  );
}
