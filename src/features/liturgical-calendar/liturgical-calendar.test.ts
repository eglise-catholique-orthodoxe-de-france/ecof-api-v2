import { describe, expect, test } from "bun:test"
import { getEasterDate } from "./liturgical-calendar.utils"

describe("getEasterDate", () => {
  test("returns Easter Sunday for 2026", () => {
    expect(getEasterDate(2026)).toEqual(Temporal.PlainDate.from("2026-04-05"))
  })
})
