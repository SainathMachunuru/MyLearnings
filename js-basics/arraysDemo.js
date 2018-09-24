const numberArray = [1,2,-1,,3];
/*const filter  = numberArray.filter(function(value){
    return value>=0;
});*/
const filtered  = numberArray.filter(n => n >= 0);
console.log('array filter');
console.log(filtered);

console.log('array mapping');
const items = filtered.map(n => '<li>' + n + '</li>');
const html  = '<ul>'+items.join('')+'</ul>'
console.log(html);

const objectItems = filtered.map(n => ({value:n}));
console.log(objectItems);

const chainingItems = numberArray
        .filter(n => n>=0)
        .map(n => ({value:n}))
        .filter(obj => obj.value>1)
        .map(obj => obj.value);

console.log(chainingItems);
//if we dont initialize,it will take first element of array
/*const sum = numberArray.reduce((accumulator,currentVlaue) => {
    return accumulator+currentVlaue;
},0);*/
const sum = numberArray.reduce((accumulator,currentVlaue) => accumulator+currentVlaue );
console.log(sum);

