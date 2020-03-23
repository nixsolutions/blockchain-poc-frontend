<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0">
                        Dashboard
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid">
                <dashboard-hospital
                        v-show="isHospital"
                ></dashboard-hospital>

                <dashboard-parent
                        v-show="isParents"
                ></dashboard-parent>

                <dashboard-school
                        v-show="isKindergarten"
                ></dashboard-school>
            </div>
        </div>
    </div>
</template>

<script>
    import DashboardHospital from "../../components/dashboards/DashboardHospital";
    import DashboardSchool from "../../components/dashboards/DashboardSchool";
    import DashboardParent from "../../components/dashboards/DashboardParent";
    import { mapState } from 'vuex';
    import { role } from '../../roles/role'

    export default {
        name: "Dashboard",
        components: {
            DashboardHospital,
            DashboardSchool,
            DashboardParent
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