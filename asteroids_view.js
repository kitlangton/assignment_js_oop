var view = {
  init: function() {
    model.generateAsteroids(3);

    this.render();
  },

  two: function() {
    if (this.asteroidField) {
      return this.asteroidField;
    } else {
      var params = {height: model.boardY, width: model.boardX};
      var asteroidField = new Two(params);
      var gameField = document.getElementById('asteroid-field');
      asteroidField.appendTo(gameField);
      $('#asteroid-field > svg').addClass('game')
      return this.asteroidField = asteroidField;
    }
  },

  render: function() {
    var asteroidCollection = model.asteroidCollection;
    var asteroidField = this.two();
    asteroidField.clear();
    asteroidCollection.forEach( function(asteroid) {
      var asteroidObject = asteroidField.makeRectangle(asteroid.x, asteroid.y, 30, asteroid.size*5);
      asteroidObject.stroke = '#FFFFFF';
      asteroidObject.fill = null;
      asteroidField.bind('update', function() {
        asteroidObject.translation.set(asteroid.x, asteroid.y);
        asteroidObject.rotation += 2 * Math.PI / 360;
      })
    });

    asteroidField.play();
  }
}