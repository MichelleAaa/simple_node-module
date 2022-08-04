module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) { //first we check to make sure there’s no errors.
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); //the error object is a global object in JS that contains information about an error.
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};