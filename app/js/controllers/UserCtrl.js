adsApp.controller('UserCtrl', ['$scope', '$route', '$location', 'adsData', 'categoriesData', 'townsData', 'userData', 'notify', 'authentication',
    function ($scope, $route, $location, adsData, categoriesData, townsData, userData, notify, authentication) {
        var self = this;

        self.pageTitle = 'User Home';
        self.currentPageIndex = 1;
        self.selectedCategoryId = '';
        self.selectedTownId = '';
        self.filterIds = {
            categoryId: '',
            townId: ''
        };

        self.data = adsData.getAllAds(1);
        self.categories = categoriesData.getCategories();
        self.towns = townsData.getTowns();

        self.user=authentication.getUser();

        //ToDo
        self.pages = [];
        for (var i = 1; i <= 5; i++) {
            self.pages.push(i);
        }


        self.setHomePage = function () {
            self.currentPageIndex = 1;
            self.selectedCategoryId = '';
            self.selectedTownId = '';
            self.filterIds = {
                categoryId: '',
                townId: ''
            };
            self.data = adsData.filterAds(self.filterIds);
        };

        self.setPage = function (pageIndex) {
            self.data = adsData.getAllAds(pageIndex);
            self.currentPageIndex = pageIndex;
            console.log(self.data.numPages);
            //$location.path('/user/home');
            //$route.reload();
        };

        self.categoryClicked = function (index) {
            self.selectedCategoryId = index;
            self.filterIds.categoryId = index;
            self.filterAds(self.filterIds);
        };

        self.townClicked = function (index) {
            self.selectedTownId = index;
            self.filterIds.townId = index;
            self.filterAds(self.filterIds);
        };

        self.filterAds = function (filter) {
            self.data = adsData.filterAds(filter);
            self.currentPageIndex = 1;
        };


        self.logout = function () {
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