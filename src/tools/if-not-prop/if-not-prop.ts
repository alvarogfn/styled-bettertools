import type { GenericFunction, Needles } from "@/types/styled-types.js";

import { ifProp } from "../if-prop/if-prop.js";

/**
 * Returns `pass` if prop is truthy. Otherwise returns `fail`
 * @template Props The type of the component props.
 * @param test the needles that will define whether the test passed or failed
 * @param pass The value to return or execute if the test is truthy.
 * @param fail The value to return or execute if the test is falsy.
 *
 * @example
 * import styled from "styled-components";
 * import { ifNotProp } from "styled-bettertools"; // or "styled-bettertools/if-not-prop"
 *
 * const Button = styled.button`
 *   font-size: ${ifNotProp("large", "20px", "30px")};
 * `;
 */
export function ifNotProp<Props, Pass, Fail>(
  test: Needles<Props>,
  pass: Pass | string = "",
  fail: Fail | string = "",
): GenericFunction<Props> {
  return ifProp<Props, Fail, Pass>(test, fail, pass);
}
