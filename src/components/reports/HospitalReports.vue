<template>
    <div class="container-fluid">
        <div class="section-bordered">
            <div class="table">
                <ul class="table-header">
                    <li class="table-header-row">
                        <div class="table-col table-col-155">
                            <span class="text-light">Date of request</span>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span class="text-light">Name</span>
                        </div>
                        <div class="table-col table-col-145">
                            <span class="text-light">Date of Birth</span>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-light">Report's status</span>
                        </div>
                        <div class="table-col table-col-135">
                            <span class="text-light">Action</span>
                        </div>
                    </li>
                </ul>
                <ul class="table-body">
                    <li class="table-body-row" v-for="report in reports" :key="report.id">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>06/22/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>{{report.name}}</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>{{report.birth_date}}</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span
                                    class="uppercase"
                                    :class="report.status === 'requested' ? 'text-rejected' : 'text-accept'"
                            >
                                {{ report.status === 'created' || report.status === 'confirmed' ? 'relevant' : 'requested' }}
                            </span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button" @click.prevent="createReports(report.cardId)">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/20/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Ashlynn Boyer</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>07/23/2018</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-rejected">Requested</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/18/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Mason Morgan</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>12/25/2013</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-danger">Irrelevant</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/18/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Sophia Davis</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>10/01/2015</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-rejected">Requested</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/14/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Andrew Lopez</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>01/05/2012</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-danger">Irrelevant</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/12/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Chloe Martin</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>05/25/2013</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-rejected">Requested</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/11/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>David Johnson</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>09/15/2013</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-rejected">Requested</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                    <li class="table-body-row">
                        <div class="table-col table-col-155">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/25/2019</span>
                            </div>
                        </div>
                        <div class="table-col table-col-185 flex-grow">
                            <span>Emma Walker</span>
                        </div>
                        <div class="table-col table-col-145">
                            <div class="flex align-center">
                                <i class="icon-calendar-today mr-5"></i>
                                <span>04/22/2012</span>
                            </div>
                        </div>
                        <div class="table-col table-col-150">
                            <span class="text-danger">Irrelevant</span>
                        </div>
                        <div class="table-col table-col-135">
                            <button class="btn" type="button">Create</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <loader
                :isLoading="isLoading"
        ></loader>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import reportsApi from "../../api/reports";
    import Loader from "../loader/Loader";
    import config from '../../configs/index';

    export default {
        name: "PediatricianReports",
        components: {
            Loader
        },
        data: () => {
            return {
                reports: [],
                isLoading: false,
            }
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
            }),
        },
        async created() {
            this.getReports();
        },
        methods: {
            async getReports()
            {
                let response = await reportsApi.getReportRequestForHospital(this.enrollmentId);
                response = response.data;
                let reports = [];

                for (let i = 0; i < response.length; i++) {
                    let card = this.cards.find(x => x.id === response[i].cardId);
                    reports[i] = {
                        'name': card.name,
                        'status': response[i].status,
                        'birth_date': card.birth_date,
                        'createdAt': response[i].createdAt,
                        'reportIid': response[i].id,
                        'cardId': response[i].cardId,
                    }
                }
                this.reports = reports;
            },
            async createReports(id) {
               let day = new Date();
               let key = "report" + day.getTime();
               this.isLoading = true;
               await reportsApi.createInBlockchain({
                   "key": key,
                   "card_id": id,
                   "enrollment_id": this.enrollmentId
               });

                let response = await reportsApi.createReport({
                   "key_report": key,
                   "card_id": id,
                   "enrollment_id": this.enrollmentId
               });
                let reportId = response.data.reportId;
                setTimeout(async () => {
                    response = await reportsApi.downloadReport(reportId);
                    this.isLoading = false;
                    let fileName = response.data.file_name;
                    let link =  config.API_BASE_URL  + fileName;
                    let redirectWindow = window.open(link, '_blank');
                    redirectWindow.location.href = link;
                }, 2000);

                this.getReports();
            },
        }
    }
</script>

<style scoped>

</style>
