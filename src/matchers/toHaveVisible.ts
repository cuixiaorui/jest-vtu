export function toBeVisible(wrapper) {
  const isVisible = wrapper.exists() === true;
  const is = isVisible ? "is" : "is not";
  const message = () => `Received element ${is} visible:`;

  return { message, pass: isVisible };
}
