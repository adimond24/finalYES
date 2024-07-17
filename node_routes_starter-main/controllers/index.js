const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const myFavoriteFood = (req, res) =>{
  res.send("I have many favorite foods.")
}

module.exports = { awesomeFunction, tooeleTech, myFavoriteFood };
