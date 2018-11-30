# MyExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



C/S架构的优缺点：
*优点：
1.客户端因为是独立设计，所以可以实现个性化
2.因为客户端是需要进行安装的，可以不需要重复安装和加载
3.因为客户端是独立开发的，所以有能力对客户端进行安全设计
4.如果遇到不同的操作系统，需要为不同的操作系统各开发一套客户端
*缺点：
1.因为客户端是不需要重复安装，所以用户可以不更新与升级，增加了维护成本。
2.因为需要开发客户端和服务器两套程序，所以开发成本会增加
B/S架构的优缺点：
*优点：
1.因为B/S架构具备通用性，所以开发成本较低。
2.因为不需要安装客户端，所以客户端不需要进行升级，只需要更新后台代码即可实现所有客户端的更新。
3.因为B/S架构多用WEB网页进行开发，所以增、删功能也非常容易，只需要修改网页即可完成
*缺点：
1.耗流量，每次都要加载全部的内容（不过有缓存可以降低流量损耗）
2.因为没有独立的客户端，所以无法实现个性化（通过账号体系可以实现）
3.因为没有独立设计客户端，所以客户端难以实现安全控制（HTTPS、控件）。
4.难以实现特殊的操作（删本地文件），所以所有的杀毒软件都是C/S架构的。
B/S架构更多的时候是使用了HTTP协议、而C/S架构更多的时候使用的WinSocket协议（TCP、UDP）
