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
  it('can clear planes for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.hangar()).toEqual([]);
  });
  it('can check for stromy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
  describe('under stormy conditions', function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    })
  })
});
