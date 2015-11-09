angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.sounds = ['sound/whale1.mp3', 'sound/whale2.mp3', 'sound/whale3.mp3', 'sound/whale4.mp3', 'sound/whale5.mp3'];

  // $scope.sounds = ['img/adam.jpg', 'img/max.png', 'img/perry.png', 'img/mike.png', 'img/ben.png'];

  // $scope.sounds = [ '1', '2', '3']

  $scope.translate = function(sounds) {
    console.log('this is where translate happens');
     var randomsound= Math.round(Math.random()*($scope.sounds.length-1));
    $scope.currentSound = angular.copy($scope.sounds[randomsound]);
    // alert("I was clicked!!!");
    console.log($scope.currentSound);
    console.log(randomsound);
    console.log($scope.sounds);
  }
///create five views pulling random sound
})

.controller('TransCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

