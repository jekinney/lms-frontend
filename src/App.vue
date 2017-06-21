<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'

    export default {
        name: 'app',
        components: {
            Navigation
        }
    }
</script>

<style lang="sass">
    @import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
</style>