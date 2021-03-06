'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsKnown_paths = require('../utils/known_paths');

var _utilsKnown_paths2 = _interopRequireDefault(_utilsKnown_paths);

var _utilsOptions_parser = require('../utils/options_parser');

var _utilsOptions_parser2 = _interopRequireDefault(_utilsOptions_parser);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsErrors = require('../utils/errors');

var FilterSubGenerator = (function () {
  function FilterSubGenerator(generator) {
    _classCallCheck(this, FilterSubGenerator);

    this.wrapper = generator;
  }

  _createClass(FilterSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'filter'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var feature = _utilsOptions_parser2['default'].getFeature(this.wrapper.options);
      var name = this.wrapper.name;

      if (!feature.length) throw new _utilsErrors.FeatureMissingError();

      this.wrapper.template('filter.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + feature + '/filters/' + name + '.filter.js', { name: name });
      this.wrapper.template('filter_test.js', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + feature + '/filters/' + name + '.filter_test.js', { name: name });
    }
  }]);

  return FilterSubGenerator;
})();

exports.FilterSubGenerator = FilterSubGenerator;