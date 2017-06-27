const route = require("express").Router();
const models = require('../models');
var Promise = require('bluebird');

route.get('/', function(req, res, next) {

  var findingHotels = models.Hotel.findAll({
    include: [models.Place]
  });

  var findingActivities = models.Activity.findAll({
    include: [models.Place]
  });

  var findingRestaurants = models.Restaurant.findAll({
    include: [models.Place]
  });

  Promise.all([
    findingHotels,
    findingActivities,
    findingRestaurants
  ])
  .spread(function(hotels, activities, restaurants) {
    res.render('index', {
      hotels: hotels,
      activities: activities,
      restaurants: restaurants
    });
  })
  .catch(next);

});

module.exports = route;
