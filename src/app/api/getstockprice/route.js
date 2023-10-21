//1. Import Area



//2. Define Area 
async function GET(){
    //await

    //Every fucnction return something
    const min = 124;
    const max = 126;
    var stockprice =(Math.random() * (max - min ) + min).toFixed(2);
    stockprice = parseFloat(stockprice);
    return Response.json({
        //property:value
        price:stockprice
    });
}


//3. Export Area
module.exports = { GET:GET }
