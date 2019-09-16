// I watched a youtube video to better understand arrays in javascript; https://www.youtube.com/watch?v=KVdY8n6lCy4
// Used various website to figure out the details of the arrays

function HandleSubmit(){
  alert("DUDE");
}

function HandlePress(){
  var content = document.getElementById("Name").value;
  var content2 = document.getElementById("Animal").value;

  var cat = ["Cat", "Kitty", "Tiger", "Mouser", "CatAttack"];
  var dog = ["Dog", "Tyke", "Pup", "Beast", "Pooch", "Mongrel"];
  var bird = ["Bird", "Birb", "Fowl", "Flyaway"];
  var snake = ["Snake", "NopeRope", "Serpent", "Snek"];

  var result = [];

  if(content2 == "Cat")
  {
    for(i=0; i < cat.length; i++)
    {
      result[i] = content + " the " + cat[i]
    }
  }

  if(content2 == "Dog")
  {
    for(i=0; i < dog.length; i++)
    {
      result[i] = content + " the " + dog[i]
    }
  }

  if(content2 == "Bird")
  {
    for(i=0; i < bird.length; i++)
    {
      result[i] = content + " the " + bird[i]
    }
  }

  if(content2 == "Snake")
  {
    for(i=0; i < snake.length; i++)
    {
      result[i] = content + " the " + snake[i]
    }
  }

  document.getElementById("content").innerHTML = result.join("<br/>");
}