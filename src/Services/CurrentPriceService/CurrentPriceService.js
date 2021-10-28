import ApiBaseMethod from "../ApiBaseUrl";

const getSelectedCoinPrice = (selectedCoin) => {
  return ApiBaseMethod.get("/currentprice.json");
};

const getSelectedCoinLineChart = (selectedOption, selectedCoins = {}) => {
  let todayDate = new Date();
  console.log(todayDate, "to");
  let startDate = calculateDateAgoFromNow(selectedOption.id === 1 ? 6 : 30);
  let endDate = `${todayDate.getFullYear()}-${addZeroOnIntital(
    todayDate.getMonth() + 1
  )}-${addZeroOnIntital(todayDate.getDate())}`;
  const currencyIcon = selectedCoins?.code ? selectedCoins.code : "EUR";
  return ApiBaseMethod.get(
    `/historical/${currencyIcon}.json?start=${startDate}&end=${endDate}`
  );
};

const calculateDateAgoFromNow = (daysMinus) => {
  let date = new Date();
  let last = new Date(date.getTime() - daysMinus * 24 * 60 * 60 * 1000);
  let day = addZeroOnIntital(last.getDate());
  let month = addZeroOnIntital(last.getMonth() + 1);
  let year = last.getFullYear();
  return `${year}-${month}-${day}`;
};

const addZeroOnIntital = (monthNumber) => {
  return monthNumber <= 9 ? `0${monthNumber}` : monthNumber;
};

const CurrentPriceService = {
  getSelectedCoinPrice,
  getSelectedCoinLineChart,
};

export default CurrentPriceService;
