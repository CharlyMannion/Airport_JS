function Airport() {
  this._hangar = [];
};

Airport.prototype.hangar = function() { return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) { this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) { this._hangar = [];
};
