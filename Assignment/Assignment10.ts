let dayPerPrice: number[] = [7, 1, 5, 3, 6, 4];

let min = dayPerPrice[0]; // buy price

for (let i = 1; i < dayPerPrice.length; i++) {

    if (dayPerPrice[i] < min) {
        min = dayPerPrice[i]; // update buy price
    }

    if (dayPerPrice[i] - min === 5) {
        console.log(min + " is buy price and " + dayPerPrice[i] + " is sell price");
    }
}