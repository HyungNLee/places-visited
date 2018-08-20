function Place(name, location, year, lengthStay, dish) {
  this.name = name;
  this.location = location;
  this.year = year;
  this.lengthStay = lengthStay;
  this.dish = dish;
}

Place.prototype.placeName = function() {
  return this.name + " in " + this.location + ".";
}

//User Interface
$(document).ready(function() {

  var disneyWorld = new Place("Disney World", "Orlando, Florida", "2014", "10 days", "Turkey Drumsticks");
  var lotteWorld = new Place("Lotte World", "Seoul, Korea", "2003", "One day", "Cold noodles");
  var universalStudios = new Place("Universal Studio", "Orlando, Florida", "2014", "10 days", "Butter Beer");

  $("#nameOne").text(disneyWorld.name);
  $("#locationOne").text(disneyWorld.location);
  $("#yearOne").text(disneyWorld.year);
  $("#lengthStayOne").text(disneyWorld.lengthStay);
  $("#dishOne").text(disneyWorld.dish);

  $("#nameTwo").text(lotteWorld.name);
  $("#locationTwo").text(lotteWorld.location);
  $("#yearTwo").text(lotteWorld.year);
  $("#lengthStayTwo").text(lotteWorld.lengthStay);
  $("#dishTwo").text(lotteWorld.dish);

  $("#nameThree").text(universalStudios.name);
  $("#locationThree").text(universalStudios.location);
  $("#yearThree").text(universalStudios.year);
  $("#lengthStayThree").text(universalStudios.lengthStay);
  $("#dishThree").text(universalStudios.dish);
})
