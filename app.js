let order = 1;

const myPromise = new Promise((resolve, reject) => {
    // `setTimeout` executes its callback function (the first parameter)
    // after the time in milliseconds (second parameter) has completed.

    console.log(`${order}: myPromise started running`);
    order++

    try {
        setTimeout(() => {
            // log here so we can see when this actually executes
            console.log(`${order}: myPromise\'s async work executing`),
                // resolve with a value that we can access in a `.then` block below
                resolve('Surprise!');
        }, 3000);
        // if anything goes wrong, we'll reject, returning the error
    } catch (err) {
        reject(err);
    }
});

myPromise
    .then(result => {
        console.log(`First promise result is: ${result}`);

        //***********Question !: How does "${result}" know to refer to the resolve parameter from myPromise?***********
        //*********** Is it because it wouldn't make sense for reject?***********

    });

function synchronousWork() {
    console.log(`synchronous working going`);
}

synchronousWork();
synchronousWork();


//**********Question 2: In the output on the Native Browser Javascript on the line**********
//**********after the second "synchronous working going", why does it say "=> undefined"?**********


//********** Question 3: How does "${result}" know to refer to the resolve parameter and "${err}"**********
//********** know to refer to the reject parameter?*********
