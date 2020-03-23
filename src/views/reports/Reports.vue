<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0">Reports</h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <hospital-reports
                    v-show="isHospital"
            ></hospital-reports>
            <parent-reports
                    v-show="isParents"
            ></parent-reports>
        </div>
    </div>
</template>

<script>
    import HospitalReports from "../../components/reports/HospitalReports";
    import ParentReports from "../../components/reports/ParentReports";
    import { mapState } from 'vuex';
    import { role } from '../../roles/role'

    export default {
        name: "Reports",
        components: {
            HospitalReports,
            ParentReports
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
        },
    }
</script>

<style scoped>

</style>