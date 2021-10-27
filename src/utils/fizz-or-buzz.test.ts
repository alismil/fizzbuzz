import { fizzOrBuzz } from "./fizz-or-buzz";

test("should return fizz", () => {
  expect(fizzOrBuzz(3)).toBe("fizz");
  expect(fizzOrBuzz(9)).toBe("fizz");
  expect(fizzOrBuzz(12)).toBe("fizz");
});

test("should return buzz", () => {
  expect(fizzOrBuzz(5)).toBe("buzz");
  expect(fizzOrBuzz(20)).toBe("buzz");
  expect(fizzOrBuzz(55)).toBe("buzz");
});

test("should return fizz", () => {
  expect(fizzOrBuzz(1)).toBe("1");
  expect(fizzOrBuzz(13)).toBe("13");
  expect(fizzOrBuzz(29)).toBe("29");
});
