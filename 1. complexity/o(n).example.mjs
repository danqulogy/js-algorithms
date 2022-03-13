/**
 *  Raise number to power
 * 
 * @param {number} number 
 * @param {number} power 
 * @returns {number}
 */
export function iterativePower(number, power){
    let result =  1;

    for(let i=0; i < power; i+=1){
        result *= number;
    }

    return result;
}

export function factorial(number){
    if(number === 0){
        return 1
    }

    return factorial(number -1) * number
}


console.log("factorial of 5 is", factorial(5))

