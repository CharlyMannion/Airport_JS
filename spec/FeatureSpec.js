describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
  });
  it('planes can be instructed to take off from an airport', function(){
    plane.land(airport)
    plane.takeoff(airport);
    expect(airport.hangar()).not.toContain(plane);
  });
  it('planes cannot takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.hangar()).toContain(plane);
  });
});
