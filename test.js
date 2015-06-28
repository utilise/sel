var expect = require('chai').expect
  , d3 = global.d3 = require('d3')
  , client = require('client')
  , shim = !client && polyfill()
  , sel = require('./')

describe('sel', function() {

  before(function(){
    /* istanbul ignore next */
    node = !client
      ? document.body.firstElementChild
      : document.body.appendChild(document.createElement('div'))
  })

  after(function(){
    node.parentNode.removeChild(node)
  })

  it('should d3 select node', function() {
    expect(sel(node).node() == node).to.be.ok
  })

})

function polyfill(){
  window = require("jsdom").jsdom('<div>').defaultView
  global.document = window.document
}