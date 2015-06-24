let expect = require('chai').expect;
let Application = require('../../app/application');
let CodeConstants = require('../../app/constants/codeConstants');
let { hasDispatched, createApplication } = require('marty/test-utils');

describe('codeActionCreators', () => {
  describe('#clickLine(lineNumber)', () => {
    let app;
    beforeEach(() => {
      app = createApplication(Application, {
        include: ['codeActionCreators']
      });
      app.codeActionCreators.clickLine(1);
    });

    it('should dispatch CLICK_LINE', function () {
      expect(hasDispatched(app, CodeConstants.CLICK_LINE, 1)).to.be.true;
    });
  })
});
