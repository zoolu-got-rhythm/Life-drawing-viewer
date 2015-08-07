
// data initialization:

var work = [
  {
    name:1,
    info: "lorem ipsum 1",
    pic: "life-drawings/20141002160122_001.jpg"
  },
  {
    name:2,
    info: "lorem ipsum 2",
    pic: "life-drawings/20141002160021_001.jpg"
  },
  {
    name:3,
    info: "lorem ipsum 3",
    pic: "life-drawings/20141002155947_001.jpg"
  },
  {
    name:4,
    info: "lorem ipsum 4",
    pic: "life-drawings/20141002155847_001.jpg"
  },
  {
    name: "Graceful",
    info: "lorem ipsum 5",
    pic: "life-drawings/20141002155816_001.jpg"
  },
  {
    name: "boooooooooooooooo ooooooo sdfsafsda sadfsadfsad fdsafdsafasa",
    info: "lorem ipsum 6",
    pic: "life-drawings/20141002155735_001.jpg"
  },
  {
    name:7,
    info: "lorem ipsum 7",
    pic: "life-drawings/20141002155658_001.jpg"
  },
  {
    name:8,
    info: "lorem ipsum 8",
    pic: "life-drawings/20141002155611_001.jpg"
  },
  {
    name:9,
    info: "lorem ipsum 9",
    pic: "life-drawings/20141002155505_001.jpg"
  },
];




var i = 1;

// pseudo code.

function CurrentPicture(piece, direction){


  var insertImage = document.getElementById("picture");

  if( insertImage.children.length > 0 ){
    while ( insertImage.firstChild ) {
      var imageNode = insertImage.firstChild;
      insertImage.removeChild(imageNode);
    }


    console.log("remove pic");
    console.log("there's " + insertImage.children.length + " image node currently here. ");
  }



  var insert = document.getElementById("subject");
  insert.innerHTML = piece.name;

  // create and append image from data initialization
  // can probably abstract this away.
  var currentImage = document.createElement("img");
  currentImage.classList.add("images");
  currentImage.setAttribute("src", piece.pic);
  insertImage.appendChild(currentImage);


  if(i === 0){
    i = 1;
    return;
  }


  // incrementation and decrementation
  if(direction === "up"){
    i+=1;
  }else{
    i-=1;
  }



  // closure
  return function(){
    //insert.removeChild(childNode[0]);
  //  insert.innerHTML = piece.info;
    insert.innerHTML = work[i].info;
  }
}



// this saves the argument at the moment it was passed
// into memory.
// var description = CurrentPicture(work[i]);

// re-cap on closures.
var description = CurrentPicture(work[i]);

// if user clicks on title , call the closure.
// description();

// event target elements.
var
  left = document.getElementById("left"),
  right = document.getElementById("right"),
  head = document.getElementById("subject");

left.addEventListener("click",
 function(){
   CurrentPicture(work[i]);
   console.log(i);
 }
 );

right.addEventListener("click",
  function(){
    CurrentPicture(work[i], "up");
    console.log(i);
  }
);

head.addEventListener("click",
  function(){
    description();
    console.log(i);
  }
);


// add class link to stylesheet.
