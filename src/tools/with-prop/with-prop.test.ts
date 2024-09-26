import type { Needles } from "@/types/utility.js";

import { describe, expect, it } from "vitest";

import { withProp } from "./with-prop.js";

function makeSut<Props, Interpolation>(props: Props, needle: Needles<Props>, fn: (...args: any[]) => Interpolation) {
  return withProp<Props, Interpolation>(needle, fn)(props);
}

const testCases = [
  {
    expected: false,
    fn: (type: any) => type === "foo",
    needle: "type",
    props: {},
    title: "return false when called with needle type == 'foo' and no props",
  },
  {
    expected: false,
    fn: (type: any) => type === "foo",
    needle: "type",
    props: { type: "bar" },
    title: "return false when called with needle type === 'foo' and props { type: bar }",
  },
  {
    expected: true,
    fn: (type: any) => type === "foo",
    needle: "type",
    props: { type: "foo" },
    title: "return true when called with needle type === 'foo' and props { type: 'foo' }",
  },
  {
    expected: false,
    fn: (bar: any) => bar === "foo",
    needle: "foo.bar",
    props: {},
    title: "return false when called with needle foo.bar, bar === 'foo' and no props",
  },
  {
    expected: false,
    fn: (bar: any) => bar === "foo",
    needle: "foo.bar",
    props: { foo: {} },
    title: "return false when called with needle foo.bar, bar === 'foo' and no props",
  },
  {
    expected: false,
    fn: (bar: any) => bar === "foo",
    needle: "foo.bar",
    props: { foo: { bar: "bar" } },
    title: "return false when called with needle foo.bar, bar === 'foo' and no props",
  },
  {
    expected: true,
    fn: (bar: any) => bar === "foo",
    needle: "foo.bar",
    props: { foo: { bar: "foo" } },
    title: "return false when called with needle foo.bar, bar === 'foo' and no props",
  },
  {
    expected: [undefined, undefined],
    fn: (...args: any) => args,
    needle: ["foo", "bar"],
    props: {},
    title: "return ['foo', undefined] when called with needle is array and props {foo: 'foo'}",
  },
  {
    expected: ["foo", undefined],
    fn: (...args: any) => args,
    needle: ["foo", "bar"],
    props: { foo: "foo" },
    title: "return ['foo', undefined] when called with needle is array and props {foo: 'foo'}",
  },
  {
    expected: [undefined, "bar"],
    fn: (...args: any) => args,
    needle: ["foo", "bar"],
    props: { bar: "bar" },
    title: "return [undefined, 'bar'] when called with needle is array and props {bar: 'bar'}",
  },
  {
    expected: ["foo", "bar"],
    fn: (...args: any) => args,
    needle: ["foo", "bar"],
    props: { bar: "bar", foo: "foo" },
    title: "return ['foo', 'bar'] when called with needle is array and props {bar: 'bar', foo: 'foo'}",
  },
  {
    expected: false,
    fn: (type: any) => type === "foo",
    needle: (props: any) => props.type,
    props: {},
    title: "return false when called with needle is function and no props",
  },
  {
    expected: false,
    fn: (type: any) => type === "foo",
    needle: (props: any) => props.type,
    props: { type: "bar" },
    title: "return false when called with needle is function",
  },
  {
    expected: true,
    fn: (type: any) => type === "foo",
    needle: (props: any) => props.type,
    props: { type: "foo" },
    title: "return true when called with needle is function",
  },
  {
    expected: true,
    fn: ({ type }: any) => type === "foo",
    needle: { type: true },
    props: { type: "foo" },
    title: "return true when called with needle object",
  },
  {
    expected: true,
    fn: ({ type }: any, { bar }: any) => Boolean(type && bar),
    needle: [{ type: "foo" }, { bar: "bar" }],
    props: { bar: "bar", type: true },
    title: "return true when called with needle object array",
  },
  {
    expected: false,
    fn: ({ type }: any) => Boolean(type),
    needle: { type: (value: any) => value === false },
    props: { type: true },
    title: "return true when called with needle object array",
  },
];

describe("[Tools]: with-prop", () => {
  it.each(testCases)("$title", ({ expected, fn, needle, props }) => {
    expect(makeSut(props, needle, fn)).toEqual(expected);
  });
});
