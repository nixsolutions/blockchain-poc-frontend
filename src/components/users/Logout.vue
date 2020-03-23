<template>
    <div class="sidebar-foot">
        <a class="log-out" href="" @click.prevent="logOut">
            <i class="icon-exit-to-app log-out-icon"></i>
            <span class="nav-title" >Log Out</span>
        </a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Logout",
        methods: {
            ...mapActions('auth', [
                'signOut',
            ]),
            logOut() {
               this.signOut()
            }
        }
    }
</script>

<style scoped>

</style>