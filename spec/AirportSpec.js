describe ("Airport", function() {
  // var plane;
  var airport;

  beforeEach(function(){
    // plane = new Plane();
    airport = new Airport();
  });
  it('has no planes by default', function() {
    expect(airport.hangar()).toEqual([]);
  });

  // describe('Landing a Plane', function() {
  //   it('can land land a plane', function() {
  //     plane.land(airport)
  //     expect(airport.hangar()).toContain(plane);
  //   });
  // });

});
