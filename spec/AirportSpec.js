describe ("Airport", function() {
  // var plane;
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land']);
  });
  it('has no planes by default', function() {
    expect(airport.hangar()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.hangar()).toEqual([plane]);
  });
});
