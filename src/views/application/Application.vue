<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0">
                        ApplicationS      </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
        <div class="container-fluid">
            <div id="jsTab" class="tab">
                <ul class="tab-nav-list">
                    <li class="tab-nav-item"
                        :class="tabName === 'jsApplicationTab1' ? 'is-active' : ''"
                        @click="changeTab('jsApplicationTab1')">
                        <a class="tab-nav-link" href="#jsApplicationTab1" data-tab="jsApplicationTab1">New</a>
                    </li>
                    <li class="tab-nav-item"
                        :class="tabName === 'jsApplicationTab2' ? 'is-active' : ''"
                        @click="changeTab('jsApplicationTab2')">
                        <a class="tab-nav-link" href="#jsApplicationTab2" data-tab="jsApplicationTab2">In review</a>
                    </li>
                    <li class="tab-nav-item"
                        :class="tabName === 'jsApplicationTab3' ? 'is-active' : ''"
                        @click="changeTab('jsApplicationTab3')">
                        <a class="tab-nav-link" href="#jsApplicationTab3" data-tab="jsApplicationTab3">Accepted</a>
                    </li>
                    <li class="tab-nav-item"
                        :class="tabName === 'jsApplicationTab4' ? 'is-active' : ''"
                        @click="changeTab('jsApplicationTab4')">
                        <a class="tab-nav-link" href="#jsApplicationTab4" data-tab="jsApplicationTab4">Rejected</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <new-application
                            :reports="reports"
                    ></new-application>
                    <in-review-application
                            :reports="reports"
                    ></in-review-application>
                    <accepted-application
                            :reports="reports"
                    ></accepted-application>
                    <rejected-application></rejected-application>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import NewApplication from "../../components/application/NewApplication";
    import InReviewApplication from "../../components/application/InReviewApplication";
    import AcceptedApplication from "../../components/application/AcceptedApplication";
    import RejectedApplication from "../../components/application/RejectedApplication";
    import { mapState } from 'vuex'
    import reportsApi from "../../api/reports";

    export default {
        name: "Application",
        components: {
            NewApplication,
            InReviewApplication,
            AcceptedApplication,
            RejectedApplication
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
            }),
        },
        data: ()=> {
            return {
                nameReport: '',
                reports: [],
                tabName: 'jsApplicationTab1',
            }
        },
        async created() {
            this.getReports();

             this.$root.$on("updateReports", () => {
                this.getReports();
            });
        },
        methods: {
            async getReports()
            {
                let response = await reportsApi.getReportRequestForSchool(this.enrollmentId);
                response = response.data;
                let newReports = [];
                for (let i = 0; i < response.length; i++) {
                    let card = this.cards.find(x => x.id === response[i].cardId);
                    newReports[i] = {
                        'name': card.name,
                        'status': response[i].status,
                        'birth_date': card.birth_date,
                        'createdAt': response[i].createdAt,
                        'reportIid': response[i].id,
                        'cardId': response[i].cardId,
                        'parentId': card.parent,
                        'doctorId': response[i].doctorId,
                        'reportId': response[i].reportId,
                        'reportName': response[i].reportName,
                        'reportStatus': response[i].reportStatus,
                    };
                }
                this.reports = newReports;
            },
            changeTab(tabName) {
                this.tabName = tabName;
                this.$root.$emit("changeApplicationTab", tabName);
            }
        }
    }
</script>

<style scoped>

</style>
