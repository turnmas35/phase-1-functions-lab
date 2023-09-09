function distanceFromHqInBlocks(street) {
    const hqStreet = 42
    return Math.abs(street - hqStreet);
  }

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
    
    if (distanceInFeet <= 400) {
        return 0;
    }   else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }   else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    }   else {
        return 'cannot travel that far';
    }
  }