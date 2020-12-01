function mockAPI(time, equation) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const timeInSeconds = time / 1000;
            if (equation) {
                return resolve(`Successfully Loaded data in ${timeInSeconds}s`);
            }
            return reject(`Failed to load data in ${timeInSeconds}s`);

        }, time);
    });
}

export default mockAPI