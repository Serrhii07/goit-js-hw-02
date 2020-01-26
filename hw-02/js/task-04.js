const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  }

  let stringArray = string.split('');
  stringArray.splice(40);
  stringArray = stringArray.join('');

  return `${stringArray}...`;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
