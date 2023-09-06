// Animations Declear
export const ZoomInAnimation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 },
};
export const ZoomOutAnimation = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 2 },
};
export const RightInAnimation = {
  visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  hidden: { x: 1000, opacity: 0 },
};
export const LeftInAnimation = {
  visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  hidden: { x: -1000, opacity: 0 },
};
export const OpacityAnimation = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};
// ******************************
