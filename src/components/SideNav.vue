<template>
    <nav>
        <ul class="nav nav-pills nav-stacked">
            <router-link :to="{ name: 'dashHome' }" tag="li" role="presentation" exact>
                <a>Dashboard</a>
            </router-link>
            <router-link :to="{ name: 'listUsers' }" tag="li" role="presentation">
                <a>Users</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters({
            user: 'auth/user'
        })
    }
</script>