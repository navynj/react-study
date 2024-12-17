export const createElement = (
  type: keyof HTMLElementTagNameMap,
  props: any,
  ...children: any[]
) => {
  // Q: 어떤 객체를 반환해야 하나요?
  return {
    type,
    props,
    children,
  };
};
