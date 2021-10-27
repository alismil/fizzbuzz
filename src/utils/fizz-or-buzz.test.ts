import { fizzOrBuzz } from "./fizz-or-buzz";

test("should return Fizz", () => {
  expect(fizzOrBuzz(3)).toBe("Fizz");
  expect(fizzOrBuzz(9)).toBe("Fizz");
  expect(fizzOrBuzz(12)).toBe("Fizz");
});

test("should return Buzz", () => {
  expect(fizzOrBuzz(5)).toBe("Buzz");
  expect(fizzOrBuzz(20)).toBe("Buzz");
  expect(fizzOrBuzz(55)).toBe("Buzz");
});

test("should return input number", () => {
  expect(fizzOrBuzz(1)).toBe(1);
  expect(fizzOrBuzz(13)).toBe(13);
  expect(fizzOrBuzz(29)).toBe(29);
});
