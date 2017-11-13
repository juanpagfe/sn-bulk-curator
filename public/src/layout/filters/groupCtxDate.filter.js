'use strict';
angular.module('snBulkCurator')
.filter('groupCtxDate', function(){

    var getCtxDate = function(datestr){
        var date = new Date(datestr)
        return date.getFullYear()+"-"+date.getMonth()
    }

    return function(list, group_by) {
        var filtered = [];
        var prev_item = null;
        var group_changed = false;
        var new_field = group_by + '_CHANGED';
        angular.forEach(list, function(item) {
            group_changed = false;
            if (prev_item !== null) {
                var piDate = getCtxDate(prev_item[group_by])
                var iDate = getCtxDate(item[group_by])
                if (piDate !== iDate) {
                    group_changed = true;
                }
            } else {
                group_changed = true;
            }
            if (group_changed) {
                item[new_field] = true;
            } else {
                item[new_field] = false;
            }
            filtered.push(item);
            prev_item = item;

        });
        return filtered;
    };
})