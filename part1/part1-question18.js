let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars: 5,
        blackCars: 40,
        rareCars: 2
};

for (var i in statistics) { // loops through the objects
        if (statistics[i] % 2 || i.startsWith("r")) { // checks if value is odd or if key starts with r
                console.log(statistics[i])
        }
}