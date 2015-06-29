let CodeBlock = require('../../app/components/codeBlock');
let sinon = require('sinon');
let React = require('react');
let { expect } = require('chai');
let Application = require('../../app/application');
let { fetch } = require('marty');
let { createStore, createApplication } = require('marty/test-utils');
let testTree = require('react-test-tree');

describe('CodeBlock', () => {
  let app, element, getFile, expectedResult;
  beforeEach(() => {
    getFile = sinon.stub();
    expectedResult = {
      lines: ['these', 'are', 'lines']
    }
    getFile.returns(fetch.done(expectedResult));
    app = createApplication(Application, {
      stub: {
        codeStore: createStore({
          getFile: getFile
        })
      }
    });
    let username = 'frasermince', project = 'test', path = '/index';
    element = testTree(<CodeBlock username={username} project={project} path={path}/>, {
      context: {app: app}
    });
  });
  describe('when fetch is done', () => {
    it('should contain CodeLines', () => {
      expect(element.innerComponent).to.exist;
    })
  });
});
