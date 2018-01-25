#!/usr/bin/env node

/*
 * @Author: uncoder 
 * @Date: 2018-01-24 11:57:17 
 * @Last Modified by: uncoder
 * @Last Modified time: 2018-01-25 15:33:13
 */
import ProgressBar from 'progress';
import minimist from 'minimist';
import spawn from 'cross-spawn';
import path from 'path';
import chalk from 'chalk';
import fse from 'fs-extra';
import prompt from 'prompt';

// 自定义依赖包
const pkgs = JSON.parse(fse.readFileSync(path.resolve(__dirname, '../pkgs.json')));
const packages = [];
Object.keys(pkgs).forEach(item => {
    const pv = `${item}@${pkgs[item]}`
    packages.push(pv);
});
// 获取参数
const options = minimist(process.argv.slice(2));
// 项目名称
const projectName = options._[1];

// 检查是否已经存在
const exitStatus = fse.pathExistsSync(projectName);
if (exitStatus) {
    prompt.start();

    var property = {
        name: 'yesno',
        message: '目录 ' + projectName + ' 已经存在了,是否继续(y or n)?',
        validator: /y[es]*|n[o]?/,
        warning: '你必须回答 yes or no',
        default: 'no'
    };

    prompt.get(property, function (err, result) {
        if (result.yesno[0] === 'y') {
            const rm = spawn.sync('rm', ['-rf', projectName]);
            createProject(projectName, options);
        } else {
            console.log('项目初始化终止');
            process.exit();
        }
    });
} else {
    createProject(projectName, options);
}

async function createProject(name, options) {
    const root = path.resolve(name);
    console.log(chalk.yellow(`第一步使用官方的react-native初始化项目`));
    // 初始化项目
    const initProject = spawn.sync('react-native', ['init', projectName], { stdio: 'inherit' });
    try {
        if (initProject.status == 0) {
            console.log(chalk.yellow(`第二步自定义依赖库安装！`));
            // 安装依赖包
            process.chdir(root);
            const installPackages = spawn.sync('yarn', ['add'].concat(packages), { stdio: 'inherit' });
            if (installPackages.status == 0) {
                console.log(chalk.green(`自定义依赖库安装完成！`));
                console.log(chalk.yellow(`第三步拷贝脚手架！`));
                // console.log("执行shell命令的绝对路径:", process.cwd());
                const generatorDir = path.resolve(__dirname, '../..');
                // console.log("js文件执行的绝对路径", generatorDir);
                await fse.copy(path.join(generatorDir, 'template'), process.cwd());
                console.log(chalk.green(`项目 ${name} 创建成功！`));
                process.exit();
            }
        }
    } catch (error) {
        process.exit();
    }
}


