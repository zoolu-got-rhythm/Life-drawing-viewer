
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
  }
];

// pseudo code.

var Slider = {};

Slider.switchPictureTo = function(piece) {
  this.subject.innerHTML = piece.name;

  // update current image
  if (this.currentImage) {
    this.picture.removeChild(this.currentImage);
  }
  this.currentImage = document.createElement("img");
  this.currentImage.setAttribute("id", "image");
  this.currentImage.setAttribute("class", "images");
  this.currentImage.setAttribute("src", piece.pic);
  this.picture.appendChild(this.currentImage);
};


Slider.init = function(container, pictures) {
  var left = document.createElement("button");
  var right = document.createElement("button");
  var arrow = document.createElement("div");
  var subject = document.createElement("div");
  var frame = document.createElement("div");
  var picture = document.createElement("div");

  this.picture = picture;
  picture.setAttribute("class", "picture");
  frame.appendChild(picture);

  left.innerHTML = "left";
  left.setAttribute("class", "left");
  container.appendChild(left);
  right.innerHTML = "right";
  right.setAttribute("class", "right");
  container.appendChild(right);
  arrow.setAttribute("class", "arrow");
  container.appendChild(arrow);
  this.subject = subject;
  subject.setAttribute("class", "subject");
  container.appendChild(subject);
  frame.setAttribute("class", "frame");
  container.appendChild(frame);


  var DEFAULT_PICTURE = 1;
  var currentPictureIndex = 1;

  this.switchPictureTo(pictures[currentPictureIndex]);

  var self = this;

  left.addEventListener("click",  function() {
    if (0 === currentPictureIndex) {
      currentPictureIndex = pictures.length - 1;
    } else {
      currentPictureIndex -= 1;
    }
    self.switchPictureTo(pictures[currentPictureIndex]);
    console.log(currentPictureIndex);
  });

  right.addEventListener("click", function() {
    if (currentPictureIndex === pictures.length - 1) {
      currentPictureIndex = 0;
    } else {
      currentPictureIndex += 1;
    }
    self.switchPictureTo(pictures[currentPictureIndex]);
    console.log(currentPictureIndex);
  });

  subject.addEventListener("click", function() {
    currentPictureIndex = DEFAULT_PICTURE;
    self.switchPictureTo(pictures[currentPictureIndex]);
    console.log(pictures[currentPictureIndex]);
  });
};

Slider.init(document.getElementById("container"), work);

// add class link to stylesheet.
