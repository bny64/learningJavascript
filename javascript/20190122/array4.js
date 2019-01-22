const cart = [{name:"Widget", price:9.95},{name:"Gadget", price:22.95}];
const names = cart.map(x=>x.name);
const prices = cart.map(x=>x.price);
console.log(names, prices);

const discountPrices = prices.map(x=>x*0.8);
console.log(discountPrices);

const items = ["Widget", "Gadget"];
const prices2 = [9.95, 22.95];
const cart2 = items.map((x,i)=>({name:x, price:prices2[i]}));
for(value of cart2){
    console.log(value);
}