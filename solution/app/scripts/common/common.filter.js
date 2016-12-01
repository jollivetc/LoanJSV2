(function(){
  angular.module('loanApp.common')
    .filter('picUrl', function () {
        return function (personPic) {
            if(personPic){
                return 'pics/' + personPic;
            }else{
                return undefined;
            }
        };
    });
})();
