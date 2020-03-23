<template>
    <div class="sidebar">
        <div class="sidebar-head">
            <a class="logo " href="#">
                <img class="logo-content" src="./../../assets/img/logo.svg" alt="logo">
            </a>
        </div>
        <div class="sidebar-body">
            <div class="user" v-show="isParents">
                <div class="flex align-center">
                    <div class="avatar is-active">
                        <img class="avatar-media" src="./../../assets/img/avatars/img-1.png" alt="avatar">
                    </div>
                    <div class="user-name">
                        <div>Ann</div>
                        <div>Robson</div>
                    </div>
                </div>
                <i class="icon-ic-arrow-blue"></i>
            </div>
            <div class="user" v-show="isHospital">
                <div class="flex align-center">
                    <div class="avatar is-active">
                        <img class="avatar-media" src="./../../assets/img/avatars/img-4.png" alt="avatar">
                    </div>
                    <div class="user-name">
                        <div>Jenna</div>
                        <div>Brown</div>
                    </div>
                </div>
                <i class="icon-ic-arrow-blue"></i>
            </div>
            <div class="school" v-show="isKindergarten">
                <div class="flex align-center">

                    <a href="#" class="school-avatar">
                        <img class="school-avatar-media" src="./../../assets/img/hospitals/imag2.png" alt="avatar">
                    </a>

                    <div class="school-name">
                        <div>Fox Meadow</div>
                        <div>School</div>
                    </div>
                </div>

                <i class="icon-ic-arrow-blue"></i>
            </div>
          <nav-items></nav-items>
        </div>
        <logout></logout>
    </div>
</template>

<script>
    import Logout from "../users/Logout";
    import NavItems from "./NavItems";
    import { mapState } from 'vuex';
    import { role } from '../../roles/role'

    export default {
        name: "Sidebar",
        components: {
            Logout,
            NavItems
        },
        computed: {
            ...mapState('auth', {
                role: state => state.role,
            }),
            isParents() {
                return this.role === role.parents;
            },
            isHospital() {
                return this.role === role.hospital;
            },
            isKindergarten() {
                return this.role === role.kindergarten;
            },
        },
    }
</script>

<style scoped>

</style>