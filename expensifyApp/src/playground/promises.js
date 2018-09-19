const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
    }, 500);
});

promise.then((data) => {
    console.log(data);
});