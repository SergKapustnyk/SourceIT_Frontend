console.log(`HW02_Task01`);
{
    let a = prompt(`enter number of a =`, ``);
    b = prompt(`enter number of b =`, ``);
    if (a > b)
        console.log(x = a + b / 2 * 4);
    else if (a === b)
        console.log(x = 400);
    else if (a < b)
        console.log(x = a - b + 2 /b * 4)
}
console.log (`HW02_Task02.1`);

{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if ((x >= -4 && x <= 4) && (y >= 0 && y <= 4))
    alert(`Match`);
    else
    alert(`Fail`)
}
console.log (`HW02_Task02.2`);
{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if ((y <= 0 && y <= x && y === x && y >= -1) || (y >= 0 && y <= 1 && y === x && y >= x))
        alert(`Match`);
    else
        alert(`Fail`)
    }
    console.log (`HW02_Task02.3`);
{
    let x = prompt(`enter a coordinate on X-axis`, ``);
    let y = prompt(`enter a coordinate on Y-axis`, ``);
    if (x * x + y * y <= 1)
        alert(`Match`);
    else if (y >= -x - 2 && y <= 0 && x <= 0)
        alert(`Match`);
    else
        alert(`Fail`)
}
console.log(`HW02_Task03`);
    let Day = (prompt(`Enter Day`));
    Day = parseFloat(Day);
    switch (Day) {
        case 1:
            alert(`Monday`);
            break;
        case 2:
            alert(`Tuesday`);
            break;
        case 3:
            alert(`Wednesday`);
            break;
        case 4:
            alert(`Thursday`);
            break;
        case 5:
            alert(`Friday`);
            break;
        case 6:
            alert(`Saturday`);
            break;
        case 7:
            alert(`Sunday`);
            break;
        default:
            result = prompt(`Error: please enter correct number`)
    }
console.log(`HW02_Task04`);
{
    let firstMessage = parseFloat(prompt(`Enter first number`)),
    secondMessage = parseFloat(prompt(`Enter second number`));
    if (firstMessage > secondMessage)
    console.log(`max.number ${firstMessage}`);
    else if (firstMessage === secondMessage)
    console.log(`equality`);
    else
        console.log(`max.number ${secondMessage}`)
    }








    
    













