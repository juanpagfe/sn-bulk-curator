  'use strict';
  
  angular.module('snBulkCurator')
  .controller(
    'TwitterCtrl', [
    '$scope',
    '$http', 
    '$window',
    function($scope, $http, $window)
    {
        const TWITTER_URL = 'https://twitter.com'

        $http.get('/api/tweets').then(
            function(res){
                if(res.status == 200){
                    $scope.tweets = res.data
                }
            })
        $scope.dateFormat = 'YYYY.MM.dd'

        var parseUsers = function(tweet){
            var tag = '<a href="'+TWITTER_URL+'/$1" target="_blank" class="tw-user">@$1</a>'
            tweet = tweet.replace(/@([A-Za-z0-9_]+)/,tag)
            return tweet
        }

        var parseUrls = function(tweet){
            var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi
            var tag = '<a href="$1" target="_blank" class="tw-user">$1</a>'
            tweet = tweet.replace(regex,tag)
            return tweet
        }

        $scope.parseDate = function(datestr){
            return new Date(datestr);
        }

        var getDeleteTweets = function(){
            var len = $scope.tweets.length
            var arr = [];
            for (var i = len - 1; i >= 0; i--) {
                if($scope.tweets[i].delete){
                    arr.push($scope.tweets[i].id_str)
                }
            }
            return arr;
        }

        var deleteSelected = function(){
            $scope.tweets = $scope.tweets.filter(function(item){
                return !item.deleted
            })
        }

        $scope.deleteTweets = function(){
            var dTweets = getDeleteTweets()
            $http.delete('/api/tweets?tweets='+dTweets.join()).then(
                function(res){
                    if(res.status == 200){
                        alert("Done deleting")
                        deleteSelected()
                    }
                })
        }

        $scope.gotoTweet = function($event, username, twId){
            $window.open(TWITTER_URL+'/'+username+'/status/'+twId);
        }

        $scope.parseTweet = function(tweet){
            tweet = parseUrls(tweet)
            tweet = parseUsers(tweet)
            return tweet
        }

        $scope.gtDate = function(a, b, comp) {
            a = new Date(a)
            b = new Date(b)
            a.setHours(0, 0, 0, 0)
            b.setHours(0, 0, 0, 0)
            console.log(new Date(a),'>=',new Date(b))
            return a >= b
        };

        $scope.ltDate = function(a,b) {
            a = new Date(a)
            b = new Date(b)
            a.setHours(0, 0, 0, 0)
            b.setHours(0, 0, 0, 0)
            console.log(new Date(a),'<=',new Date(b))
            return a <= b
        };
    }
    ])
