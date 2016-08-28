   
                angular.module('DemoCtrl', [
            'angular-carousel','ngTouch'
        ])

              

        .controller('DemoCtrl', function($scope, $timeout,$location) {

	    $scope.goTo=function(hash){
		$location.path(hash);
		console.log("in goTo"+ hash);
	    }
	    $scope.goToURL=function(hash){
		window.location.href= "http://54.245.107.178:3005";
		console.log("in goToURL"+ hash);
	    }

            $scope.setMaster = function($event) {
                //console.log("changing page");
                //console.log("before"+ $scope.hidePictures);
                $scope.hidePictures = "true";
                //console.log("after"+ $scope.hidePictures);
                var checkbox = document.getElementById("picCheckbox");
                checkbox.checked = true;
                //$scope = $scope || angular.element(document).scope();
  
                //$scope.$apply();
                //$scope.apply('hidePictures = true');
            }       
            $scope.$watch("hidePictures", function(){
                console.log("change has occured");
                console.log("hidePictures is :" + $scope.hidePictures);

            });

            
                    

            //$scope.hidePictures="FALSE";
            //console.log("hidePictures is"+ $scope.hidePictures);

            $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            function addSlide(target, style) {
                var i = target.length;
                target.push({
                    label: 'slide #' + (i + 1),
                    //img: 'http://lorempixel.com/450/300/' + style + '/' + (i % 10) ,
                    //img: 'http://54.245.107.178/kid1.png',
                    img: 'img/'+ (i+1)+'.png',
                    
                    color: $scope.colors[ (i*10) % $scope.colors.length],
                    odd: (i % 2 === 0)
                });
            };

            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            // 1st ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, 'sports', 9);
            //console.log('in DemoCtrl');

            
        });

        var App = angular.module('App', ["ngRoute","DemoCtrl"]);
        
        App.controller('twitter_controller',function($scope, $http) {
            var twitter_api_url = "/Xpressionz/php/gettweets.php?callback=JSON_CALLBACK";
            function relative_time(time_value) {
      var values = time_value.split(" ");
      time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
      delta = delta + (relative_to.getTimezoneOffset() * 60);
     
      if (delta < 60) {
        return '1m';
      } else if(delta < 120) {
        return '1m';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + 'm';
      } else if(delta < (120*60)) {
        return '1h';
      } else if(delta < (24*60*60)) {
        return (parseInt(delta / 3600)).toString() + 'h';
      } else if(delta < (48*60*60)) {
        //return '1 day';
        return shortdate;
      } else {
        return shortdate;
      }
    };   
                
            $http.jsonp( twitter_api_url ).success(
                function(data, status, headers, config){
                    $scope.tweets = data;

                    for (var i=0; i<data.length; i++) {
                            //$scope.reltime[i]=relative_time(data[i].created_at);
                            $scope.tweets[i].created_at = relative_time(data[i].created_at);
                        };

                    
                    //$scope.reltime=relative_time(data.created_at);
                }
            );
        
        //twitter_controller.$inject = ['$scope', '$http'];
    });

        App.factory('shopFactory', function($http) {
              return {
                getShopAsync: function(callback) {
                    $http.jsonp('http://54.245.107.178:8080/events?callback=JSON_CALLBACK').success(callback)
                }
            };
        });  

    //angular.module('App',['angular-carousel']);

    //var App = angular.module('App', ['ngRoute']);
    //var eshuCarousel= angular.module('eshuCarousel', ['angular-carousel']);
    // configure our routes
    App.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })
            

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .when('/eventsCalendar', {
                templateUrl : 'pages/eventsCalendar.html',
                controller  : 'eventsController'
            })

            .when('/directions', {
                templateUrl : 'pages/directions.html',
                controller  : 'eventsController'
            })

            .when('/tweets', {
                templateUrl : 'pages/tweets.html',
                controller  : 'eventsController'
            });
    });

         App.controller('homeController', function($scope) {
        $scope.message = 'Xpressionz offers the Folsom Summer of Art & Bollywood Dance Camp June/July 2014. We seek to develop and strengthen creative skills, build self-esteem, develop a sense of self-importance and individuality, encourage self-expression and stimulate imagination in children.We specialize in Drawing, Painting and Bollywood Dance classes for children 5+, in Folsom, CA. Bring your child over to attend a FREE session, or come by to observe a class in progress.';
        //console.log('in about');

        
    });

        App.controller('aboutController', function($scope) {
        $scope.message = 'Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in ';
        //console.log('in about');
    });

    App.controller('contactController', function($scope) {
        $scope.message = 'email:eshanis_1@yahoo.com';
        $scope.tel= 'Tel: +1 (916)-761-3118';
        //console.log('in contact');
        //$scope.hidePictures="true";
        //console.log("hidePictures is: "+ $scope.hidePictures);
    });

    App.controller('eventsController', function($q,$scope,shopFactory) {

        $scope.message = 'Summer camps Half Day ($90/week 9am-1pm) and Full Day($120/week 9am-4pm) available starting June through July. Before/After camp options available';
        $scope.event1=[];
        $scope.evt=[];
        
        var date = new Date();
        var d = date.getDate();
        console.log(date.getFullYear());
        var m = date.getMonth();
        var y = date.getFullYear();
         
        deferred = $q.defer();
        shopFactory.getShopAsync(function(results) {
            
            
            //deferred.resolve(results);
            //console.log($scope.event1);
            $scope.event1=results;
            //return deferred.promise;
        });
        

        setTimeout(function() 
            { 
                $scope.evt=JSON.stringify($scope.event1);
                //console.log(evt); 
                //console.log($scope.event1);
        
        //console.log("evt "+ evt);
        var test= [{"title":"Sansrity","start":"2014-10-15"},{"title":"Gujarati Samaj Show","start":"2014-11-15"},{"title":"Summer WorkShop 1","start":"2014-06-01","end":"2014-06-14"},{"title":"Summer WorkShop 2","start":"2014-06-15","end":"2014-06-30"},{"title":"Summer Enrollment Period- Discounted Rate","start":"2014-03-25","end":"2014-04-25"},{"title":"Summer Enrollment Period- Regular Rate","start":"2014-04-26","end":"2014-05-25"}] 

        $('#calendar').fullCalendar({
            editable: true,
            events:  
            //eval($scope.evt)
            
                
                [{
                    title: 'Sansrity',
                    start: new Date(2014, 9, 15)
                },
                {
                    title: 'Gujarati Samaj Show',
                    start: new Date(2014, 10, 15)
                },
                {
                    title: 'Summer WorkShop 1',
                    start: new Date(2014, 5, 2),
                    end: new Date(2014, 5, 6)
                },
                {
                    title: 'Summer WorkShop 1',
                    start: new Date(2014, 5, 9),
                    end: new Date(2014, 5, 13)
                },
                {
                    title: 'Summer WorkShop 2',
                    start: new Date(2014, 5, 16),
                    end: new Date(2014, 5, 20)
                },
                {
                    title: 'Summer WorkShop 2',
                    start: new Date(2014, 5, 23),
                    end: new Date(2014, 5, 27)
                },
                {
                    title: 'Summer WorkShop 3',
                    start: new Date(2014, 5, 30),
                    end: new Date(2014, 6, 4)
                },
                {
                    title: 'Summer WorkShop 3',
                    start: new Date(2014, 6, 7),
                    end: new Date(2014, 6, 11)
                },
                {
                    title: 'Summer WorkShop 4',
                    start: new Date(2014, 6, 14),
                    end: new Date(2014, 6, 18)
                },
                {
                    title: 'Summer WorkShop 4',
                    start: new Date(2014, 6, 21),
                    end: new Date(2014, 6, 25)
                },
                {
                    title: 'Summer WorkShop 5',
                    start: new Date(2014, 6, 28),
                    end: new Date(2014, 7, 1)
                },
                
                {
                    title: 'Summer Enrollment Period- Discounted Rate',
                    start: new Date(2014, 2, 25),
                    end: new Date(2014, 3, 25)
                },

                {
                    title: 'Summer Enrollment Period- Regular Rate',
                    start: new Date(2014, 3, 26),
                    end: new Date(2014, 4, 25)
                }
                
               
                

            ] 
                });
        
            }, 250);

    });


App.directive("btnCheckbox", function(){
    return {
        require:"ngModel",
        link: function(scope, element, attr, ngModel){
                scope.$watch(function(){

                    return ngModel.$modelValue;
                }, function(modelValue){
                    //console.log(modelValue);
                    if (modelValue) {
                        element.addClass("active");
                        //console.log('now val is'+ modelValue);
                    }else{
                        element.removeClass("active");
                        //console.log('now val is'+ modelValue);
                    };
                });
                element.bind("click", function(){
                    scope.$apply(function(){
                        //ngModel.$setViewValue(element.hasClass("active") ? false : true);
                        scope.hidePictures='true';
                        scope.$apply('hidePictures = true');
                        scope.$apply();

                    });
                })
            }
    }
});

