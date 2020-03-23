<template>
        <div class="main bg-accent ">
        <div class="login-content">
            <a class="logo big mlr-auto mb-65" href="#">
                <img class="logo-content" src="../../assets/img/logo.svg" alt="logo">
            </a>
            <div class="form">
                <span class="heading-main">login</span>
                <div class="form-group ">
                    <i class="icon-email form-control-icon"></i>
                    <input class="form-control" type="text" id="form-control" placeholder="Email" v-model="login">
                    <label class="form-label" for="form-control"></label>
                </div>
                <div class="form-group ">
                    <i class="icon-lock form-control-icon"></i>
                    <input class="form-control" type="password" id="form-control2" placeholder="Password" v-model="password">
                    <label class="form-label" for="form-control2"></label>
                </div>
                <button class="btn btn-full" type="submit" @click.prevent="logIn()">Apply</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: "Login",
        data () {
            return {
                login: '',
                password: 'password',
            }
        },
        computed: {
            ...mapState('auth', {
                error: state => state.error,
                authorized: state => state.authorized
            }),
        },
        async created() {
            await this.resetState();
        },
        methods: {
            ...mapActions('auth', [
                'signin',
                'resetState'
            ]),
            logIn() {
                let credentials = {
                    'login': this.login,
                    'password': this.password,
                };

                this.signin({
                    credentials: credentials,
                })
            }
        },
    }
</script>

<style scoped>

</style>
