adsApp.controller('UserCtrl', ['$scope', '$route', '$log', 'adsData', 'categoriesData', 'townsData', function($scope, $route, $log, adsData, categoriesData, townsData) {
    var self=this;

    self.pageTitle='User Home';
    self.currentPageIndex=1;

    self.data=adsData.getAllAds(1);
    self.categories = categoriesData.getCategories();
    self.towns = townsData.getTowns();


    self.pagesCount=adsData.getAllAds(1).numItems;
    self.pages=[];
    for(var i=1; i<=5 ;i++){
        self.pages.push(i);
    }

    self.setPage = function(pageIndex){
        self.data=adsData.getAllAds(pageIndex);
        self.currentPageIndex=pageIndex;
    };

    //self.setPagination = function(){
    //    for(var i=1; i<= adsData.getAllAds(1).numPages ;i++){
    //        self.pages.push(i);
    //    }
    //};


    //self.cat=[];
    //self.cat[0]=self.data;

    //adsData.getAllAds(function (resp) {
    //    self.data = resp;
    //});




    //adsData.getAllTowns(function (resp) {
    //    self.towns = resp;
    //});

    //categoriesData.getCategories(function (resp) {
    //    self.categories = resp;
    //});

    //self.categories = categoriesData.getCategories();

    //self.cat[0]= self.categories;
    //categoriesData.getAllCategories(function (resp){
    //    self.categories = resp;
    //});
    //adsData.getAllCategories(function (resp) {
    //    $scope.categories = resp;
    //});

}]);