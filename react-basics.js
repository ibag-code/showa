// console.log ("My name is Abdulahi");
    const print = console.log

    let productCost;

    let socksPack = 100;
    let tShirt = 23;
    let tShirtEach = 2 * tShirt;

    productCost = socksPack + tShirtEach;
    print (productCost)



    let totalCost;

    let shippingCost = 5;

    totalCost = `${productCost + shippingCost}`;

    print (totalCost)


    print (shippingCost)


    let date = dayjs()
    let todaysDate = date.format('MMMM D')
    let currentTime = date.format('HH:mm:ss')


    print (todaysDate)
    print (currentTime)

  let element = document.querySelector('span');


    setInterval(() => {
        // recalculate
        currentTime = dayjs().format('HH:mm:ss');  
        root.render(division);
    }, 1000);

    print(updatedTime)


