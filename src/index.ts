// jest matchers for vtu
import { toHaveClass, toBeVisible } from "./matchers";

expect.extend({
  toHaveClass,
  toBeVisible,
});
