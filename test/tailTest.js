const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"]; 
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
  it("returns empty array [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });

});
