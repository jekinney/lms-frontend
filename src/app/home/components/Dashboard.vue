<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-1 col-md-2">
                <side-nav></side-nav>
            </aside>
            <main class="col-xs-11 col-md-10">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    import SideNav from '@/components/SideNav'

    export default {
        components: {
            SideNav
        }
    }
</script>