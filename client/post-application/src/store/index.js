import Vue from 'vue'
import Vuex from 'vuex'
import posts from '../store/modules/posts'
import videos from '../store/modules/videos'
import users from '../store/modules/users'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        posts,
        videos,
        users
    }
})