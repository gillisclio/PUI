var picts = ["minihorse1.jpg", "minihorse2.jpg", "minihorse3.jpeg"]
var name = ["Carrot", "Cloud", "Claude", "Cow", "Chloe"]
var age = [2, 1, 5, 8, 3]



class Animal{
    
//    takes in img, name and age
    constructor(img, name, age) {
//        assigning inputs to property within the object
        this.pic = img
        this.name = name
        this.age = age
    }
}

function random(length)
{
    return Math.floor(Math.random()*length);
}
//convetionally put at the bottom becuase of style convention, allows us to start taking advantage of vars and classes 
$(document).ready(()=>{
    console.log("ready")
})

var animal = new Animal(picts[random(3)], name[random(5)], age[random(5)])
//prints in the console that youve declared the object
console.log(animal)
$("#animal-img").attr("src", animal.pic);
$("#animal-name").html(animal.age)

