import BikramSambat from "./BikramSambat"

export const BSToAD = (date: string): string => {
    const result = new BikramSambat().setDate(date, "BS").toAD()
    return result
}

export const ADToBS = (date: Date | string): string => {
    const result = new BikramSambat().setDate(date, "AD").toBS()
    return result
}
