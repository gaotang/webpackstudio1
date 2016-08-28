require('../libs/bootstrap/dist/css/bootstrap.min.css');
require('../css/index.css');
require('bootstrap');
var avalon = require('avalon')

var vm = avalon.define({
    $id: 'mainCtrl',
    OnClickCloseDialog: function () {
        $('#modalId').modal('hide');
    },
    Init: function () {
        var h1 = $('h1').text();
        document.write(h1);
    }
});

vm.Init();

