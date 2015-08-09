
// data initialization:

var art = [
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


/**
 * @param {Node} container
 * @param {Object[]} pictures
 * @param {number} [opt_defaultPictureIndex=0]
 * @constructor
 */
function Slider(container, pictures, opt_defaultPictureIndex) {
  if (-1 !== this.initialized.indexOf(container)) {
    throw new Error("You cannot deploy Slider in the same container twice");
  } else {
    this.initialized.push(container);
  }

  this.container = container;
  this.pictures = pictures;

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


  this.defaultPictureIndex = opt_defaultPictureIndex || 0;
  this.currentPictureIndex = this.defaultPictureIndex;

  this.listeners = [
    {element: left, fn: this.clickLeftHandler.bind(this)},
    {element: right, fn: this.clickRightHandler.bind(this)},
    {element: subject, fn: this.clickSubjectHandler.bind(this)}
  ];
  this.listeners.forEach(function(listener) {
    listener.element.addEventListener("click", listener.fn);
  });

  this.switchPictureTo(pictures[this.currentPictureIndex]);
}

Slider.prototype.initialized = [];

Slider.prototype.clickLeftHandler = function() {
  if (0 === this.currentPictureIndex) {
    this.currentPictureIndex = this.pictures.length - 1;
  } else {
    this.currentPictureIndex -= 1;
  }
  this.switchPictureTo(this.pictures[this.currentPictureIndex]);
  console.log(this.currentPictureIndex);
};

Slider.prototype.clickRightHandler = function() {
  if (this.currentPictureIndex === this.pictures.length - 1) {
    this.currentPictureIndex = 0;
  } else {
    this.currentPictureIndex += 1;
  }
  this.switchPictureTo(this.pictures[this.currentPictureIndex]);
  console.log(this.currentPictureIndex);
};

Slider.prototype.clickSubjectHandler = function() {
  this.currentPictureIndex = this.defaultPictureIndex;
  this.switchPictureTo(this.pictures[this.currentPictureIndex]);
  console.log(this.pictures[this.currentPictureIndex]);
};

Slider.prototype.switchPictureTo = function(piece) {
  this.subject.innerHTML = piece.name;

  // update current image
  if (this.currentImage) {
    this.picture.removeChild(this.currentImage);
  }
  this.currentImage = document.createElement("img");
  this.currentImage.setAttribute("class", "images");
  this.currentImage.setAttribute("src", piece.pic);
  this.picture.appendChild(this.currentImage);
};

Slider.prototype.destroy = function() {
  this.listeners.forEach(function(listener) {
    listener.element.removeEventListener("click", listener.fn);
  });
  this.container.innerHTML = "";
  this.initialized.splice(this.initialized.indexOf(this.container), 1);
};

var slider_instance_one = new Slider(document.getElementById("container-first"), art, 1);
var slider_instance_two = new Slider(document.getElementById("container-second"), art);

// add class link to stylesheet.
