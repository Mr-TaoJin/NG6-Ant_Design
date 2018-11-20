import { Component } from '@angular/core';


// 组件装饰器(相当于ng-controller)控制器注册
// angular
//   .module("movieHunter")
//   .controller("MovieListCtrl",
//               ["movieService",
//                MovieListCtrl]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 控制器函数
// Controller function
// function MovieListCtrl(movieService) {
// }

export class AppComponent {
  title = '测试ng7';
}
