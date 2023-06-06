const numbers = [10, 20, 30, 40, 50];

const newArr = [];


numbers.map((value) => {
    const newArr = [...numbers];
    console.log(value + 1);
})