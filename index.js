const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(-2);
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier (mult) {
    return (function (fare) {return (fare * mult)});
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (driversArray, func) {
    return (func(driversArray));
}