import { useState } from "react";
import { fizzOrBuzz } from "../utils/fizz-or-buzz";

export default function FizzBuzz(): JSX.Element {
  const [result, setResult] = useState<(string | number)[]>([1]);

  const currentValue: number = result.length + 1;

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>{result.join("  -  ")}</p>
      <button onClick={() => setResult([...result, fizzOrBuzz(currentValue)])}>
        NEXT
      </button>
    </>
  );
}
