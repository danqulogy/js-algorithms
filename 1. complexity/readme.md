## Big O Notations

* O(1)
* O(n)
* O (n<sup>2</sup>)

## O(1)
For every input the function does exactly one operation

```
export function fastPower(number, power){
    return number ** power;
}

```
**Time Complexity:** O(1)
**Space Complexity:** O(1)

The space complexity is constant of 1 because the number of variables we operate with doesn't depend on the input.



## O(n)
```
export function iterativePower(number, power){
    let result = 1;
    
    for(let i =0; i<power; i+= 1>){
        result *= number;
    }
    return result;
}
```