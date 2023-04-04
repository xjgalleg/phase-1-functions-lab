

function distanceFromHqInBlocks(blocks){
    const headquarters = 42
    return Math.abs(blocks-headquarters);
}

function distanceFromHqInFeet(feet){
    const headquarters = 42
    return Math.abs(feet-headquarters)*264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return((start - destination)*264)
    }
    else
        return((destination - start)*264)
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0;
    } else if (distance >= 400 && distance <= 2000){
        return Math.abs(distance - 400)*0.02;
    } else if (distance >= 2000 && distance <= 2500){
        return 25;
    } else if (distance > 2500){
        return 'cannot travel that far';
    }
}