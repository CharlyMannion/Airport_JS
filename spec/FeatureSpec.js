'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
  });
  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
  });
    it('planes can be instructed to take off from an airport', function(){
      plane.land(airport)
      plane.takeoff();
      expect(airport.hangar()).not.toContain(plane);
    });
  });

  describe('under stormy conditions',function(){

    it('planes cannot takeoff when weather is stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
      expect(airport.hangar()).toContain(plane);
    });
    it('planes cannot land when the weather is stormy', function(){
      // plane.land(airport)
      // plane.takeoff(airport)
      // spyOn(airport._weather,'isStormy').and.returnValue(true);
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.hangar()).not.toContain(plane);
    });
  });
});
