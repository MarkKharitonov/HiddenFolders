var profile = (function() {

    var exclude = function(filename, mid) {
        return /.*\/bin\/.*/.test(filename) || /.*\/Approvals\/(Tests)\/.*/.test(filename) || !/Approvals\/.*/.test(mid) || /.*\.map.js$/.test(filename) || /.*\.ts$/.test(filename);
    };

    var copyOnly = function(filename, mid) {
        return !/.*\.js$/.test(filename);
    }

    var amd = function(filename, mid) {
        return !exclude(filename, mid);
    };

    var frameworkProfile = 
    {
        resourceTags: {
            amd: function(filename, mid) {
                return amd(filename, mid);
            },
            miniExclude: function(filename, mid)
            {
                return exclude(filename, mid);             
            },
            copyOnly:function(filename, mid)
            {
                return copyOnly(filename, mid);
            }
        }
    };

    return frameworkProfile;
})();