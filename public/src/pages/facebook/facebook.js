'use strict';

angular.module('snBulkCurator')
.controller(
    'FacebookCtrl', [
    '$scope',
    '$http', 
    '$window',
    function($scope, $http, $window)
    {
        const FACEBOOK_URL = 'https://twitter.com'
        var max_id = false

        $scope.dateFormat = 'YYYY.MM.dd'
        $scope.posts = []
        $scope.busy = false
        $scope.nomore = false

        var parseUrls = function(post){
            var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi
            var tag = '<a href="$1" target="_blank" class="tw-user">$1</a>'
            post = post.replace(regex,tag)
            return post
        }

        $scope.parseDate = function(datestr){
            return new Date(datestr);
        }

        var deleteSelected = function(){
            $scope.posts = $scope.posts.filter(function(item){
                return !item.delete
            })
        }

        $scope.loadPosts = function(){
            if ($scope.busy) return;
            $scope.busy = true
            $http.get('/api/facebook'+(max_id ? '?max_id='+max_id : '')).then(
                function(res){
                    if(res.status == 200){
                        $scope.posts = $scope.posts.concat(res.data.data)
                        if(res.data.data.length < 24){
                            $scope.nomore = true;
                        }
                        max_id = Math.min.apply(Math,$scope.posts.map(function(item){return item.id;}))
                    }
                    $scope.busy = false
                })
        }
        $scope.loadPosts()

        $scope.deletePosts = function(){
            var dposts = $scope.posts.filter(function(item){return item.delete}).map(function(item){return item.id})
            if(dposts.length){
                $http.delete('/api/facebook?posts='+dposts.join()).then(
                    function(res){
                        if(res.status == 200){
                            alert("Done deleting")
                            deleteSelected()
                        }
                    })
            }
        }

        $scope.gotoPost = function($event, username, twId){
            $window.open(FACEBOOK_URL+'/'+username+'/status/'+twId);
        }

        $scope.parsePost = function(post){
            post = parseUrls(post)
            return post
        }

        $scope.gtDate = function(a, b, comp) {
            a = new Date(a)
            b = new Date(b)
            a.setHours(0, 0, 0, 0)
            b.setHours(0, 0, 0, 0)
            return a >= b
        };

        $scope.getYear = function(datestr) {
            return new Date(datestr).getYear()
        };

        $scope.getYMDate = function(datestr){
            var date = new Date(datestr)
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
        }

        $scope.ltDate = function(a,b) {
            a = new Date(a)
            b = new Date(b)
            a.setHours(0, 0, 0, 0)
            b.setHours(0, 0, 0, 0)
            return a <= b
        };
    }
    ])
