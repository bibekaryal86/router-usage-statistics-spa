export const getSelectedForNoSelection = () => {
  const currentDateTime = new Date();
  const currentYear = currentDateTime.getFullYear();
  const currentMonth = currentDateTime.getMonth() + 1;
  const currentMonthMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
  return currentYear + '-' + currentMonthMonth;
};
