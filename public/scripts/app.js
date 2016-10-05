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
    console.log(vm.newAlbum.name , vm.newAlbum.artistName , vm.newAlbum.genres , vm.newAlbum.releaseDate);
  $http({
    method: 'POST',
    url: '/api/albums',
    data: {name:vm.newAlbum.name,  artistName:vm.newAlbum.artistName , genres:vm.newAlbum.genres , releaseDate:vm.newAlbum.releaseDate},
  }).then(function successCallback(response) {
    console.log(response);
    vm.albums.push(response.data)

  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}

}

