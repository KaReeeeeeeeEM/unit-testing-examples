import { describe, test, it, expect } from "vitest"
import { factorial, fizzBuzz, max } from "../src/intro"

describe("max", () => {
    it("should return the first argument if it is greater", () => {
        expect(max(2, 1)).toBe(2)
    })

    it("should return the second argument if it is greater", () => {
        expect(max(1, 2)).toBe(2)
    })

    it("should return the first argument if they are equal", () => {
        expect(max(1, 1)).toBe(1)
    })
})

// Exercise
describe("fizzBuzz", () => {
    it("should return FizzBuzz if the number is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })

    it("should return Fizz if the number is divisible by 3", () => {
        expect(fizzBuzz(6)).toBe("Fizz")
    })

    it("should return Buzz if the number is divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })

    it("return the value in string if not divisible by both 3 and 5", () => {
        expect(fizzBuzz(23)).toBe("23")
    })
})

// create a test for the factorial
describe("factorial", () => {
    it("should return 1 if the number is 0", () => {
        expect(factorial(0)).toBe(1)
    })

    it("should return 1 if the number is 1", () => {
        expect(factorial(1)).toBe(1)
    })
    
    it("should return undefined if the number less than 0", () => {
        expect(factorial(-1)).toBeUndefined()
    })

    it("should return the factorial if the number is greater than 1", () => {
        expect(factorial(5)).toBe(120)
    })
})

