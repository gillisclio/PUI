var picts = ["minihorse1.jpg", "minihorse2.jpg", "minihorse3.jpeg"]
var names = ["Carrot", "Cloud", "Claude", "Cow", "Chloe"]
var ages = [2, 1, 5, 8, 3]


function random(length)
{
    return Math.floor(Math.random()*length);
}

class Animal{

  constructor(img, name, age)
  {
    this.pic = img
    this.name = name
    this.age = age
  }
}


$(document).ready(()=>{
  console.log("ready")

  var animal = new Animal(picts[random(3)], names[random(5)], ages[random(5)])
  console.log(animal)
  $("#animal-img").attr("src", animal.pic);
  $("#animal-name").html(animal.name);
  $("#animal-age").html(animal.age+" years old");
})