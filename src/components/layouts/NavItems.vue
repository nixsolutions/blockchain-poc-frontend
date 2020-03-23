<template>
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item" @click="isActive=''">
                <router-link :to="{ name: 'dashboard' }">
                    <a class="nav-link" :class="activeUrl === 'dashboard' ? 'is-active' : ''">
                        <i class="icon-dashboard nav-icon"></i>
                        <span class="nav-title">Dashboard</span>
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isParents" @click="isActive='myChildren'"  :class="isActive === 'myChildren' || activeUrl === 'child' ? 'is-open-sub-nav' : ''">
                <a class="nav-link" :class="activeUrl === 'child' ? 'is-active' : ''">
                    <i class="icon-face nav-icon"></i>
                    <span class="nav-title">My Children</span>
                    <i class="icon-ic-arrow-grey nav-icon-arrow"></i>
                </a>
                <ul class="nav-list nav-sub-list">
                    <li class="nav-item" v-for="card in cards" :key="card.id">
                        <router-link :to="{ name: 'child', params: { id: card.id }}" >
                        <a class="nav-link"
                           ref="item"
                           :class="activeParamsUrl.id === card.id ? 'is-active' : ''"
                        >{{card.name }}</a>
                        </router-link>

                    </li>
                </ul>
            </li>
            <li class="nav-item" v-show="isParents" @click="isActive=''">
                <router-link :to="{ name: 'notifications' }" >
                <a class="nav-link" :class="activeUrl === 'notifications' ? 'is-active' : ''">
                    <i class="icon-sms nav-icon"></i>
                    <span class="nav-title">Notifications</span>
                    <span class="notify-mark">1</span>
                </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isParents" @click="isActive=''">
                <router-link :to="{ name: 'hospitals' }" >
                    <a class="nav-link" :class="activeUrl === 'hospitals' || activeUrl === 'hospitals-inner' ? 'is-active' : ''">
                        <i class="icon-local-hospital nav-icon"></i>
                        <span class="nav-title">Hospitals</span>
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isParents" @click="isActive=''">
                <router-link :to="{ name: 'schools' }" >
                    <a class="nav-link" :class="activeUrl === 'schools' ||  activeUrl === 'school-inner' ? 'is-active' : ''">
                        <i class="icon-school nav-icon"></i>
                        <span class="nav-title">Schools</span>
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isKindergarten" @click="isActive=''">
                <router-link :to="{ name: 'application' }" >
                <a class="nav-link" :class="activeUrl === 'application' ? 'is-active' : ''">
                    <i class="icon-import-contacts nav-icon"></i>
                    <span class="nav-title">Application</span>
                    <span class="notify-mark">6</span>
                </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isHospital" @click="isActive=''">
                <router-link :to="{ name: 'myPatient' }" >
                <a class="nav-link" :class="activeUrl === 'myPatient' || activeUrl === 'child' ? 'is-active' : ''">
                    <i class="icon-assignment-ind nav-icon"></i>
                    <span class="nav-title">My Patients</span>
                </a>
                </router-link>
            </li>
            <li class="nav-item" v-show="isHospital||isParents" @click="isActive=''">
                <router-link :to="{ name: 'reports' }" >
                <a class="nav-link" :class="activeUrl === 'reports' ? 'is-active' : ''">
                    <i class="icon-assignment nav-icon"></i>
                    <span class="nav-title">Reports</span>
                    <span v-if="countReports" class="notify-mark">{{ countReports}}</span>
                </a>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapState } from 'vuex';
    import { role } from '../../roles/role'

    export default {
        name: "NavItems",
        data: () => {
            return {
              isActive: "",
              isActiveChild: "",
            }
        },
        computed: {
            ...mapState('auth', {
                role: state => state.role,
            }),
            ...mapState('cards', {
                cards: state => state.cards,
            }),
            ...mapState('reports', {
                reports: state => state.reports,
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
            activeUrl() {
                return this.$route.name;
            },
            activeParamsUrl() {
                return this.$route.params;
            },
            countReports() {
                if (this.role === role.parents ) {
                  return this.reports.countReportsForParents
                }

                if (this.role === role.hospital ) {
                    return this.reports.countReportsForHospital
                }

                return 0;
            },
        },
    }
</script>

<style scoped>

</style>
