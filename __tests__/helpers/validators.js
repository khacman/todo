import { isNotEmptyOrThrowError } from "../../src/helpers/validators";

test("isNotEmpty logic", () => {
    const cases = [
        {
            input: ["sample", 2, false],
            expect: true
        },
        {
            input: ["sample", true, 0],
            expect: true
        },
        {
            input: [""],
            expect: false
        },
        {
            input: ["sample", null, "aoeu"],
            expect: false
        },
        {
            input: ["sample", true, undefined],
            expect: false
        }
    ];

    cases.forEach(c => {
        if (c.expect) {
            expect(isNotEmptyOrThrowError(...c.input)).toEqual(true);
        } else {
            expect(() => isNotEmptyOrThrowError(...c.input)).toThrow();
        }
    });
});
