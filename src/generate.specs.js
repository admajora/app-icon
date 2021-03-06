const expect = require('chai').expect;
const generate = require('./generate');

const sourceIcon = 'icon.png';

describe('generate', () => {
  it('should be able to generate React Native icons', () => {
    //  Delete all of the files we're expecting to create, then generate them.
    return generate(sourceIcon, './test/ReactNativeIconTest').then((results) => {
      //  TODO: Check we found the manifests etc etc
      expect(results).not.to.equal(null);
    });
  });
});
