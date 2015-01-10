/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('HomeCtrl', ['$scope', '$route', 'adsData', 'categoriesData', 'townsData', function($scope, $route, adsData, categoriesData, townsData) {
    var self=this;

    self.pageTitle='Home';
    //self.currentNav='home';
    self.currentPageIndex=1;
    self.selectedCategoryId='';
    self.selectedTownId='';
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
    self.setHomePage= function(){
        self.currentPageIndex=1;
        self.selectedCategoryId='';
        self.selectedTownId='';
        self.filterIds={
            categoryId: '',
            townId:''
        };
        self.data=adsData.filterAds(self.filterIds);
    };

    self.setPage = function(pageIndex){
        self.data=adsData.getAllAds(pageIndex);
        self.currentPageIndex=pageIndex;
        console.log(self.data.numPages);
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
        self.currentPageIndex=1;
    };
}]);