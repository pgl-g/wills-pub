/*
 * @Brief: 
 * @Description: 
 * @Author: yangjianming
 * @Date: 2022-08-25 18:52:13
 */
'use strict';
const program = require('commander')

program
  .version('1.0.9')
  .description('骑迹前端工作流集成解决方案')
  .usage('<command> [options]')


program.command('pub [path] [options]', '部署发布目录(默认dist/)下文件到CDN。若指定path(默认./)，将只发布指定文件(夹)')
program.command('init [options]', '初始化一个react全家桶项目')

program.parse(process.argv)
if (!program.args.length) program.help()

