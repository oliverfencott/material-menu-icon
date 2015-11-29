'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuBase = require('./MenuBase');

var _MenuBase2 = _interopRequireDefault(_MenuBase);

var MenuToArrowBack = _react2['default'].createClass({
  displayName: 'MenuToArrowBack',

  getDefaultProps: function getDefaultProps() {
    return {
      back: false,
      style: {},
      onClick: function onClick() {}
    };
  },

  render: function render() {
    var _props = this.props;
    var back = _props.back;
    var style = _props.style;
    var onClick = _props.onClick;

    return _react2['default'].createElement(_MenuBase2['default'], {
      topBarTransform: 'rotate(135deg) scaleX(0.63) translateY(55.9%) translateX(30.9%)',
      middleBarTransform: 'rotate(180deg) scaleX(0.8) translateX(-5.75%)',
      bottomBarTransform: 'rotate(225deg) scaleX(0.63) translateY(-55.9%) translateX(30.9%)',
      alternate: back,
      style: style,
      onClick: onClick
    });
  }
});

exports['default'] = MenuToArrowBack;
module.exports = exports['default'];