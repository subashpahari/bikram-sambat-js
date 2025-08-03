import { ADToBS, BSToAD } from ".."

test("AD to BS conversion", () => {
    expect(ADToBS("2025-08-04")).toBe("2082-04-19")
})

test("BS to AD conversion", () => {
    expect(BSToAD("2076-05-08")).toBe("2019-08-25")
})
