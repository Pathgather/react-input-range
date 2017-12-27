'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Slider = exports.Track = undefined;

var _inputRange = require('./input-range/input-range');

var _inputRange2 = _interopRequireDefault(_inputRange);

var _track = require('./input-range/track');

var _track2 = _interopRequireDefault(_track);

var _slider = require('./input-range/slider');

var _slider2 = _interopRequireDefault(_slider);

var _label = require('./input-range/label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
exports.Track = _track2.default;
exports.Slider = _slider2.default;
exports.Label = _label2.default;
//# sourceMappingURL=index.js.map