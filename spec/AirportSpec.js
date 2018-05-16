'use strict';

describe ("Airport", function(){
  var weather;
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('has no planes by default', function() {
    expect(airport.hangar()).toEqual([]);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });
    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.hangar()).toEqual([plane]);
    });
    it('can clear planes for take off', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.hangar()).toEqual([]);
    });
  });

  describe('under stormy conditions', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for takeoff', function(){
      expect(function(){airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm');
    });
    it('does not clear planes for landing', function(){
      expect(function(){airport.clearForLanding(plane);}).toThrowError('cannot land during storm');
      });
    // });
  });
});
