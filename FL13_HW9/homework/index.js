function convert(...array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      array[i] = String(array[i]);
    } else {
      array[i] = +array[i];
    }
  }
  return array;
}

function executeforEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function mapArray(array, func) {
  let result = [];
  executeforEach(array, (el) => {
    result.push(func(+el));
  });
  return result;
}

function filterArray(array, func) {
  let result = [];
  executeforEach(array, (el) => {
    if (func(el)) {
      result.push(el);
    }
  });
  return result;
}

function containsValue(array, val) {
  let contains = false;
  executeforEach(array, (el) => {
    if (el === val) {
      contains = true;
    }
  });
  return contains;
}

function flipOver(string) {
  let flipString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    flipString += string[i];
  }
  return flipString;
}

function makeListFromRange(array) {
  let resultArr = [];
  let length = array[1] - array[0] + 1;
  for (let i = 0; i < length; i++) {
    resultArr.push(array[0]);
    array[0] += 1;
  }
  return resultArr;
}

function getArrayOfKeys(array, key) {
  let arrayOfKeys = [];
  executeforEach(array, (el) => {
    arrayOfKeys.push(el[key]);
  });
  return arrayOfKeys;
}

function substitute(array) {
  return mapArray(array, (el) => {
    if (el > 10 && el < 20) {
      el = `*`;
    }
    return el;
  });
}

function getPastDay(date, days) {
  let resultDate = new Date(date);
  resultDate.setDate(date.getDate() - days);
  return resultDate.getDate();
}

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
