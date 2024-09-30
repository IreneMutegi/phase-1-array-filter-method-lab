function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === lowerCaseName;
    });
}

const drivers1 = ['Alice', 'Bob', 'Charlie', 'alice', 'bob'];
const matchingDrivers1 = findMatching(drivers1, 'alice');
console.log(matchingDrivers1); // Output: ['Alice', 'alice']

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(query.toLowerCase());
    });
}

const drivers2 = ['Alice', 'Bob', 'Charlie', 'Alfred', 'alice'];
const matchingDrivers2 = fuzzyMatch(drivers2, 'Al');
console.log(matchingDrivers2); 

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        const driverName = driver.name.toLowerCase();
        const searchName = name.toLowerCase();
        return driverName === searchName;
    });
}

const drivers3 = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' },
    { name: 'alice', hometown: 'Miami' }
];

const matchingDrivers3 = matchName(drivers3, 'alice');
console.log(matchingDrivers3); 
