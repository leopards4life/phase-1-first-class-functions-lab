const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare) {
        let newFare = fareMultiplier * fare;
        return newFare;
    };
};

function fareDoubler(fare) {
   let newFare = (fare * 2);
    return newFare;
}

function fareTripler(fare) {
    let newFare = (fare * 3);
    return newFare;
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}