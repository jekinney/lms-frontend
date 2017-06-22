<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import SideNav from '@/components/SideNav'
    import { mapGetters } from 'vuex'

    export default {
        name: 'app',
        components: {
            Navigation,
            SideNav
        },
        computed: mapGetters({
            user: 'auth/user'
        })
    }
</script>

<style lang="sass">
    @import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
</style>