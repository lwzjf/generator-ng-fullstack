import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {ServiceSubGenerator} from '../../_ng/client/sub_generators_service';

describe('ServiceSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){return 'ng1'}
        }
      };
      let _ssg = new ServiceSubGenerator(_gen);

      expect(_ssg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument(){},
        config: {
          get(){return 'ng1'}
        }
      };

      sinon.mock(_gen.argument);

      let _ssg = new ServiceSubGenerator(_gen);

      _ssg.initializing();

      expect(_ssg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    describe('ng1', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){return 'ng1'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = ['ng1/service.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/services/' + _gen.name + '.service.js', {name: _gen.name}]
        let _secondCall = ['ng1/service_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/services/' + _gen.name + '.service_test.js', {name: _gen.name}]

        _ssg.writing();

        expect(_ssg.wrapper.writing).to.have.been.called;
        expect(_ssg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })

    describe('ng2', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: sinon.spy(),
          config: {
            get(){return 'ng2'}
          }
        };

        let _ssg = new ServiceSubGenerator(_gen);

        let _firstCall = ['ng2/service.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/' + _gen.name + '_service.ts', {name: _gen.name}]
        let _secondCall = ['ng2/service_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/' + _gen.name + '_service_test.ts', {name: _gen.name}]

        _ssg.writing();

        expect(_ssg.wrapper.writing).to.have.been.called;
        expect(_ssg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_ssg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
      });
    })
  });
});
