let Clickable = require('../../app/components/clickable');
let sinon = require('sinon');
let React = require('react');
let { expect } = require('chai');
let Application = require('../../app/application');
let { createStore, createApplication } = require('marty/test-utils');
let testTree = require('react-test-tree');

describe('Clickable', () => {

  let app, childContent, element, clickLine;
  beforeEach(() => {
    clickLine = sinon.stub();
    app = createApplication(Application, {
      stub: {
        codeActionCreators: {
          clickLine: clickLine
        }
      }
    });
    childContent = 'This is the content';
    element = testTree(<Clickable children={childContent}/>, {
      context: { app : app }
    })
  });

  it('should have inner content', ()=> {
    expect(element.innerText).to.equal(childContent);
  });

  describe('handleClick()', () => {
    it('should call clickLine on codeActionCreators', () => {
      element.click();
      expect(clickLine.called).to.be.true
    });
  });

});
