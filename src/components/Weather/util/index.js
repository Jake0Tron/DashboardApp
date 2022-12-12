// @flow
export const getTimeFromDate = (date) => {
  const d = new Date(date * 1000);
  return d.toLocaleTimeString();
};
