/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumsIndexController.$inject = ['$http'];


function AlbumsIndexController ( $http ) {
  var vm = this;
  vm.newAlbum ={};
  vm.searchField;
  vm.searchText;
  vm.albums;

   $http({
    method: 'GET',
    url: '/api/albums',
  }).then(function successCallback(response) {
    console.log(response);
    vm.albums = response.data ;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createAlbum = function () {
    // var genres = vm.newAlbum.genres;
    var genres = vm.newAlbum.genres.split(',')
    console.log(genres);
  $http({
    method: 'POST',
    url: '/api/albums',
    data: {name:vm.newAlbum.name,  artistName:vm.newAlbum.artistName , genres:genres , releaseDate:vm.newAlbum.releaseDate},
  }).then(function successCallback(response) {
    console.log(response);
    vm.albums.push(response.data)

  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}

  vm.searchAlbum = function(){
   // console.log(vm.)
    // $http({
    //   method: 'GET',
    //   url: '/api/albums',
    //   data: {},
    //     }).then(function successCallback(response) {

    // });
  vm.alby
  }

}

