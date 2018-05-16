'use strict';

function Airport(weather) {
  this._weather = new Weather();
  this._hangar = [];
};

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};

// Airport.prototype.isStormy = function() {
//   return false;
// };
