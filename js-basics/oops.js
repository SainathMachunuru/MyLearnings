//create object using object literal way
const circle = {
    raduis: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('creating an object using object literal way');
    }
};

circle.draw();
//create object using factory method
function creatCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('creating an object using factory method');
        }

    };

}
const circleUsingFactory = creatCircle(1);
circleUsingFactory.draw();

//creating object using constructor method
//starting letter of the function  should be capital 
function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0,y:0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    Object.defineProperty(this,defaultLocation,{
        get:function(){
            return defaultLocation;
        },
        set: function(value){
            defaultLocation = value;
        }
    });
    this.draw = function(){
        console.log('creating an object using constructor method');
    }

}
const circleUsingConstructor = new Circle(1);
circleUsingConstructor.draw();

const circleUsingBuiltInFunction = new Function('radius',`
this.radius = radius;
this.draw = function(){
console.log('creating an object using built-in function');
}`);

const circle1 = new circleUsingBuiltInFunction(1);
circle1.draw();

/*add/remove properties

circle1.location = 'xyz';
delete circle1.radius;

*/
console.log("looping object: ");
for(let key in circle1){
    if(typeof circle1[key] !== 'function'){
       console.log(key,circle1[key]);
    }
}

const keys = Object.keys(circle1);
console.log(keys);
if('radius' in circle1){
    console.log("yes circle has radius");
}

const tempCircle = new Circle(2);
//console.log('using getters: '+tempCircle.getDefaultLocation);
tempCircle.defaultLocation = {x:1,y:1};
console.log('using getters: '+tempCircle.defaultLocation);
console.log(tempCircle);

//cloning object
const clonedObject = Object.assign({},circle);
const clonedObject2 = {...circle}
console.log('cloning objects');
console.log(clonedObject);
console.log(clonedObject2);
    


