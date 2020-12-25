import matchers from "expect/build/matchers";

expect.extend({
  toHaveClass,
  toHaveAttribute,
  toBeVisible,
  toHaveTextContent,
  toBeExist,
});

function toHaveClass(wrapper, className) {
  return matchers.toContain(wrapper.classes(), className);
}

function toHaveAttribute(wrapper, attr: string, value?: any) {
  if (arguments.length === 2) {
    return matchers.toHaveProperty(wrapper.attributes(), attr);
  }

  return matchers.toBe(wrapper.attributes(attr), value);
}

function toBeVisible(wrapper) {
  if (!wrapper.isVisible) {
    throw new Error("wrapper must be DomWrapper");
  }

  return matchers.toBe(wrapper.isVisible(), true);
}

function toHaveTextContent(wrapper, text: string) {
  return matchers.toContain(wrapper.text(), text);
}

function toBeExist(wrapper) {
  return matchers.toBe(wrapper.exists(), true);
}
