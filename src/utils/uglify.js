import data from "../data";

const uglyData = [...data];
const rng = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// random val syntax, excludes 5
// const rngVal = rng(1, 5);

const getRandomProperty = (obj) => {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
};

const dateIncorrectFormatter = (date, style) => {
  // date starts in ISO Standard YYYY-MM-DD
  let newDate = "";
  let dateArr = date.split("-");
  let dontChange = false;

  switch (style) {
    case "MM-DD-YYYY":
      // formats to MM-DD-YYYY
      newDate = `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`;
      break;
    case "MM/DD/YYYY":
      // formats to MM/DD/YYYY
      newDate = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
      break;
    case "YYYY/MM/DD":
      // formats to YYYY/MM/DD
      newDate = `${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`;
      break;
    case "long":
      // formats to long date (Month Day, Year)
      switch (dateArr[1]) {
        case "01":
          dateArr[1] = "January";
          break;
        case "02":
          dateArr[1] = "February";
          break;
        case "03":
          dateArr[1] = "March";
          break;
        case "04":
          dateArr[1] = "April";
          break;
        case "05":
          dateArr[1] = "May";
          break;
        case "06":
          dateArr[1] = "June";
          break;
        case "07":
          dateArr[1] = "July";
          break;
        case "08":
          dateArr[1] = "August";
          break;
        case "09":
          dateArr[1] = "September";
          break;
        case "10":
          dateArr[1] = "October";
          break;
        case "11":
          dateArr[1] = "November";
          break;
        case "12":
          dateArr[1] = "January";
          break;
        default:
          console.warn(
            `Hit a weird value, returning original DOB as a precaution.`
          );
          newDate = date;
          dontChange = true;
          break;
      }
      if (!dontChange) newDate = `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
      break;

    default:
      console.warn(
        `Hit a weird value, returning original DOB as a precaution.`
      );
      newDate = date;
  }

  // will become empty string if hits default case- choosing to keep, adds more randomness to bad data
  return newDate;
};

const uglyDataGenerator = (arr) => {
  arr.forEach((item) => {
    item.formatted = { color: 'black' };
    const prop = getRandomProperty(item);
    const rngVal1 = rng(1, 5);
    const rngVal2 = rng(1, 5);

    if (
      prop !== "profile" &&
      prop !== "id" &&
      prop !== "apiKey" &&
      rngVal1 <= 5 &&
      rngVal1 >= 3.5
    ) {
      item[prop] = "";
      item.formatted = { color: 'red' };
    } else if (
      prop !== "profile" &&
      prop !== "id" &&
      prop !== "apiKey" &&
      rngVal1 <= 1.5 &&
      rngVal1 >= 0
    ) {
      item[prop] = undefined;
      item.formatted = { color: 'red' };
    }

    if (prop === "profile" && rngVal1 <= 4 && rngVal1 >= 3) {
      let nestedProp = getRandomProperty(item[prop]);
      // date starts in ISO Standard YYYY-MM-DD
      let newDate = "";

      if (nestedProp === "dob") {
        switch (rngVal2) {
          case 1:
            // formats to MM-DD-YYYY
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "MM-DD-YYYY"
            );
            break;
          case 2:
            // formats to MM/DD/YYYY
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "MM/DD/YYYY"
            );
            break;
          case 3:
            // formats to YYYY/MM/DD
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "YYYY/MM/DD"
            );
            break;
          case 4:
            // formats to long date (Month Day, Year)
            newDate = dateIncorrectFormatter(item[prop][nestedProp], "long");
            break;
          default:
            console.warn(
              `1 Hit a weird value for rngVal2, returning original DOB as a precaution.`,
              rngVal2
            );
            newDate = item[prop][nestedProp];
            break;
        }

        // will become empty string if hits default case- choosing to keep, adds more randomness to bad data
        item[prop][nestedProp] = newDate;
        item.formatted = { color: 'red' };
      }
    } else if (prop === "profile" && rngVal1 < 3 && rngVal1 >= 1) {
      let nestedProp = getRandomProperty(item[prop]);
      // date starts in ISO Standard YYYY-MM-DD
      let newDate = "";

      if (nestedProp === "dob") {
        switch (rngVal2) {
          case 1:
            // formats to MM-DD-YYYY
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "MM-DD-YYYY"
            );
            break;
          case 2:
            // formats to MM/DD/YYYY
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "MM/DD/YYYY"
            );
            break;
          case 3:
            // formats to YYYY/MM/DD
            newDate = dateIncorrectFormatter(
              item[prop][nestedProp],
              "YYYY/MM/DD"
            );
            break;
          case 4:
            // formats to long date (Month Day, Year)
            newDate = dateIncorrectFormatter(item[prop][nestedProp], "long");
            break;
          default:
            console.warn(
              `2 Hit a weird value for rngVal2, returning original DOB as a precaution.`,
              rngVal2
            );
            newDate = item[prop][nestedProp];
            break;
        }

        // will become empty string if hits default case- choosing to keep, adds more randomness to bad data
        item[prop][nestedProp] = newDate;
        item.formatted = { color: 'red' };
      }
    }
  });

  return arr;
};

const _uglyData = uglyDataGenerator(uglyData);

export default _uglyData;
