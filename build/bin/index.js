#!/usr/bin/env node
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var createProject = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(name, options) {
        var root, initProject, installPackages, generatorDir;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        root = _path2.default.resolve(name);

                        console.log(_chalk2.default.yellow('\u7B2C\u4E00\u6B65\u4F7F\u7528\u5B98\u65B9\u7684react-native\u521D\u59CB\u5316\u9879\u76EE'));
                        // 初始化项目
                        initProject = _crossSpawn2.default.sync('react-native', ['init', projectName], { stdio: 'inherit' });
                        _context.prev = 3;

                        if (!(initProject.status == 0)) {
                            _context.next = 16;
                            break;
                        }

                        console.log(_chalk2.default.yellow('\u7B2C\u4E8C\u6B65\u81EA\u5B9A\u4E49\u4F9D\u8D56\u5E93\u5B89\u88C5\uFF01'));
                        // 安装依赖包
                        process.chdir(root);
                        installPackages = _crossSpawn2.default.sync('yarn', ['add'].concat(packages), { stdio: 'inherit' });

                        if (!(installPackages.status == 0)) {
                            _context.next = 16;
                            break;
                        }

                        console.log(_chalk2.default.green('\u81EA\u5B9A\u4E49\u4F9D\u8D56\u5E93\u5B89\u88C5\u5B8C\u6210\uFF01'));
                        console.log(_chalk2.default.yellow('\u7B2C\u4E09\u6B65\u62F7\u8D1D\u811A\u624B\u67B6\uFF01'));
                        // console.log("执行shell命令的绝对路径:", process.cwd());
                        generatorDir = _path2.default.resolve(__dirname, '../..');
                        // console.log("js文件执行的绝对路径", generatorDir);

                        _context.next = 14;
                        return _fsExtra2.default.copy(_path2.default.join(generatorDir, 'template'), process.cwd());

                    case 14:
                        console.log(_chalk2.default.green('\u9879\u76EE ' + name + ' \u521B\u5EFA\u6210\u529F\uFF01'));
                        process.exit();

                    case 16:
                        _context.next = 21;
                        break;

                    case 18:
                        _context.prev = 18;
                        _context.t0 = _context['catch'](3);

                        process.exit();

                    case 21:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 18]]);
    }));

    return function createProject(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _progress = require('progress');

var _progress2 = _interopRequireDefault(_progress);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 自定义依赖包
var pkgs = JSON.parse(_fsExtra2.default.readFileSync(_path2.default.resolve(__dirname, '../pkgs.json')));

/*
 * @Author: uncoder 
 * @Date: 2018-01-24 11:57:17 
 * @Last Modified by: uncoder
 * @Last Modified time: 2018-01-25 15:33:13
 */

var packages = [];
(0, _keys2.default)(pkgs).forEach(function (item) {
    var pv = item + '@' + pkgs[item];
    packages.push(pv);
});
// 获取参数
var options = (0, _minimist2.default)(process.argv.slice(2));
// 项目名称
var projectName = options._[1];

// 检查是否已经存在
var exitStatus = _fsExtra2.default.pathExistsSync(projectName);
if (exitStatus) {
    _prompt2.default.start();

    var property = {
        name: 'yesno',
        message: '目录 ' + projectName + ' 已经存在了,是否继续(y or n)?',
        validator: /y[es]*|n[o]?/,
        warning: '你必须回答 yes or no',
        default: 'no'
    };

    _prompt2.default.get(property, function (err, result) {
        if (result.yesno[0] === 'y') {
            var rm = _crossSpawn2.default.sync('rm', ['-rf', projectName]);
            createProject(projectName, options);
        } else {
            console.log('项目初始化终止');
            process.exit();
        }
    });
} else {
    createProject(projectName, options);
}
//# sourceMappingURL=index.js.map