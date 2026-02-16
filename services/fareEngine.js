function platformFare(base, perKm, perMin, distance, time, surge) {
    const price = (base + (perKm * distance) + (perMin * time)) * surge;
    return {
    min: Math.round(price * 0.95),
    max: Math.round(price * 1.1)
    };
    }
    
    
    exports.calculate = (distance, time) => {
    const surge = (time > 18 && time < 22) ? 1.4 : 1.0;
    
    
    return {
    uber: platformFare(50, 12, 1.5, distance, time, surge),
    ola: platformFare(45, 11, 1.4, distance, time, surge),
    rapido: platformFare(30, 9, 1.2, distance, time, surge)
    };
    };