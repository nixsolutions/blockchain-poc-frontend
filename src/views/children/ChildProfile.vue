<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0" v-show="isParents">
                        My children
                    </h1>
                    <h1 class="heading-main mb-0" v-show="isHospital">
                        My patient
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid">
                <div class="section h-100">
                 <head-child
                         :card="card"
                 ></head-child>
                    <div class="section-body ">
                        <div id="jsTab" class="tab h-auto flex-fill">
                            <ul class="tab-nav-list">
                                <li class="tab-nav-item"
                                    :class="tabName === 'jsPatientTab1' ? 'is-active' : ''"
                                    @click="changeTab('jsPatientTab1')">
                                    <a class="tab-nav-link" href="#jsPatientTab1" data-tab="jsPatientTab1">General</a>
                                </li>

                                <li class="tab-nav-item"
                                    :class="tabName === 'jsPatientTab2' ? 'is-active' : ''"
                                    @click="changeTab('jsPatientTab2')">
                                    <a class="tab-nav-link" href="#jsPatientTab2" data-tab="jsPatientTab2">Next visits</a>
                                </li>

                                <li class="tab-nav-item"
                                    :class="tabName === 'jsPatientTab3' ? 'is-active' : ''"
                                    @click="changeTab('jsPatientTab3')">
                                    <a class="tab-nav-link" href="#jsPatientTab3" data-tab="jsPatientTab3">History of visits</a>
                                </li>

                                <li class="tab-nav-item"
                                    :class="tabName === 'jsPatientTab4' ? 'is-active' : ''"
                                    @click="changeTab('jsPatientTab4')"
                                ><a class="tab-nav-link" href="#jsPatientTab4" data-tab="jsPatientTab4">Immunization schedule</a>
                                </li>

                                <li class="tab-nav-item"
                                    :class="tabName === 'jsPatientTab5' ? 'is-active' : ''"
                                    @click="changeTab('jsPatientTab5')">
                                    <a class="tab-nav-link" href="#jsPatientTab5" data-tab="jsPatientTab4">Diagnostics</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <general-info
                                        :card="card"
                                ></general-info>

                                <next-visits
                                ></next-visits>

                                <history-of-visits
                                ></history-of-visits>

                                <immunization-schedule
                                ></immunization-schedule>

                                <diagnostics
                                ></diagnostics>
                            </div>
                        </div>

                        <div v-if="role === 'parents'" class="access-block">
                            <i class="icon-people-alt access-block-icon"></i>
                            <span class="text-light">Who has access:</span>
                            <span class="text-accent ml-5">Bellevue Hospital Center</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadChild from "../../components/children/details/HeadChild";
    import GeneralInfo from "../../components/children/details/GeneralInfo";
    import NextVisits from "../../components/children/details/NextVisits";
    import HistoryOfVisits from "../../components/children/details/HistoryOfVisits";
    import ImmunizationSchedule from "../../components/children/details/ImmunizationSchedule";
    import Diagnostics from "../../components/children/details/Diagnostics";
    import {role} from "../../roles/role";

    import { mapState } from 'vuex'

    export default {
        name: "ChildProfile",
        components: {
            HeadChild,
            GeneralInfo,
            NextVisits,
            HistoryOfVisits,
            ImmunizationSchedule,
            Diagnostics
        },
        data: () => {
            return {
                childId: '',
                card: '',
                tabName: 'jsPatientTab1',
            }
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
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
        created() {
            this.childId = this.$route.params.id;
            this.card = this.cards.find(x => x.id === this.childId);
        },
        watch: {
            '$route.params.id': {
                handler: function(id) {
                    this.childId  = id;
                    this.card = this.cards.find(x => x.id === this.childId);
                },
            }
        },
        methods: {
            changeTab(tabName) {
                this.tabName = tabName;
                this.$root.$emit("changeTab", tabName);
            }
        }
    }
</script>

<style scoped>

</style>
