let is_ok = true;

const promiseDetail = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the promesaDetail :(");
            }
        }, time);
    });
}

export default promiseDetail;