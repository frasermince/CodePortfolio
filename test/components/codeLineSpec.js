let CodeLine = require('../../app/components/codeLine');
let React = require('react');
let { expect } = require('chai');
let testTree = require('react-test-tree');

describe('CodeLine', () => {
  let element;
  let table = <table><tbody></tbody></table>
  beforeEach(() => {
    element = testTree(
      <CodeLine lineNumber={1} content={'This is the content'} />,
      { context: {table: table}}
    );
  });
  it('should contain a LineNumber and a LineBody', () => {
    console.log('children', element.children[0].getClassName());
  });
});
