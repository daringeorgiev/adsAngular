adsApp.controller('UserCtrl', ['$scope', '$route', '$location', 'adsData', 'categoriesData', 'townsData', 'userData', 'notify',
    function($scope, $route, $location, adsData, categoriesData, townsData, userData, notify) {
    var self=this;

    self.pageTitle='User Home';
    self.currentPageIndex=1;
    self.selectedCategoryId=0;
    self.selectedTownId=0;
    self.filterIds={
        categoryId: '',
        townId:''
    };

    self.data=adsData.getAllAds(1);
    self.categories = categoriesData.getCategories();
    self.towns = townsData.getTowns();


    //self.pagesCount=adsData.getAllAds(1).numItems;
    self.pages=[];
    for(var i=1; i<=5 ;i++){
        self.pages.push(i);
    }

    self.setPage = function(pageIndex){
        self.data=adsData.getAllAds(pageIndex);
        self.currentPageIndex=pageIndex;
        //$location.path('/user/home');
        //$route.reload();
    };

    self.categoryClicked= function(index){
        self.selectedCategoryId=index;
        self.filterIds.categoryId=index;
        self.filterAds(self.filterIds);
    };

    self.townClicked= function(index){
        self.selectedTownId=index;
        self.filterIds.townId=index;
        self.filterAds(self.filterIds);
    };

    self.filterAds = function(filter){
        self.data=adsData.filterAds(filter);
    };


    self.logout = function(){
        userData.logout();
            //.then(function(){
            //    $location.path('/home');
            //    notify({ message:'Logout success', classes:'alert-success'});
            //}, function(){
            //    notify({ message:'Logout error', classes:'alert-danger'});
            //}
        //);
        //console.log('logout error');
        //notify('logout');
        //self.currentPageIndex=pageIndex;
    };
}]);