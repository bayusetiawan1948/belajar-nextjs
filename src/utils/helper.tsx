const convertToIDR = (money: number): string => {
  const moneyToString = money.toString().split('');
  let result = 'Rp';
  for (let index = 0; index < moneyToString.length; index++) {
    if (index % 3 === 0) {
      result += '.';
      result += moneyToString[index];
    } else {
      result += moneyToString[index];
    }
  }
  return result;
};

export default { convertToIDR };
