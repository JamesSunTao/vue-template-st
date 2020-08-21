import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';

import { Picker , Popup} from 'vant';
import 'vant/lib/index.css';
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Vuex);

const store = new Vuex.Store({
    state
})

export default store;