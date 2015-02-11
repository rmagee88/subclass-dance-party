describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
    CarltonDancer = new MakePopDancer(100, 100, timeBetweenSteps);
    MichaelJacksonInstance = new MichaelJacksonDancer(100, 100, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(MakeBlinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("MichaelJacksonDancer", function() {
    it("should have duration of 800", function() {
      expect(MichaelJacksonInstance.duration).to.be.equal(800);
    });
    it("should inherit style property of swing", function() {
      expect(MichaelJacksonInstance.style).to.be.equal("swing");
    });
  });

  describe("CarltonDancer", function() {
    it("should have duration of 500", function() {
      expect(CarltonDancer.duration).to.be.equal(500);
    });
    it("should inherit lineUp function", function() {
      expect(CarltonDancer.lineUp);
    });
  });

});
