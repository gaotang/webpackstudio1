import tab1 from "./tab1";
import tab2 from "./tab2";
// import alert from 'vue-strap/src/alert'
// or
import { alert } from 'vue-strap';
import { modal } from 'vue-strap';

module.exports = {
    template: require('../templates/index.html'),

    data: function () {
        return {
            showRight: true,
            showTop: true,

            showCustomModal: false
        };
    },

    methods: {
        OnClickDialog: function () {
            // debugger;
            // console.log(this);
            this.showCustomModal = true;
        }
    },

    components: {
        "tab1": tab1,
        "tab2": tab2,
        alert,
        modal
    },


    ready: function () {
    }
};