let is_ok = true;


let Products = (task) => {

    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(task)
            }, 2000);
        } else {
            reject("Error")
        }
    });
}

export default Products   