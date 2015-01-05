/**
 * Created by darin on 1/5/2015.
 */
adsApp.directive('leftPublicSidebar', function(){
   return {
       controller: 'HomeCtrl',
       restrict: 'E',
       //template: '<div> dasdsadsadsa </div>',
       templateUrl: '../../templates/public/left-sidebar.html'
       //replace: true
   }
});