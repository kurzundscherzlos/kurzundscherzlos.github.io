// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  return n + '.';
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['jan', 'feb', 'mär', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};
