<template>
    <div class="container-fluid">
        <div class="section h-auto mb-16" v-for="request in requests" :key="request.id">
            <div class="section-head">
                <a href="#" class="avatar nil is-big">
                    <img class="avatar-media" :src="request.avatar" alt="avatar">
                </a>
                <span class="user-name big">{{request.name}}</span>
            </div>
            <div class="section-body">
                <div class="table">
                    <ul class="table-header">
                        <li class="table-header-row">
                            <div class="table-col table-col-145">
                                <span class="text-light">Date</span>
                            </div>
                            <div class="table-col table-col-200 flex-grow">
                                <span class="text-light">Signed By</span>
                            </div>
                            <div class="table-col table-col-130">
                                <span class="text-light">Status</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span class="text-light">Access</span>
                            </div>
                            <div class="table-col table-col-80">
                                <span class="text-light">File</span>
                            </div>
                            <div class="table-col table-col-185">
                                <span class="text-light">Action</span>
                            </div>
                            </li>
                    </ul>
                    <ul class="table-body">
                        <li class="table-body-row">
                            <div class="table-col table-col-145">
                                <div class="flex align-center">
                                    <i class="icon-calendar-today mr-5"></i>
                                    <span>{{request.birth_date}}</span>
                                </div>
                            </div>
                            <div class="table-col table-col-200 flex-grow">
                                <div class="flex flex-column">
                                    <span>Jenna Brown</span>
                                    <span class="text-light">Bellevue Hospital Center</span>
                                </div>
                            </div>
                            <div class="table-col table-col-130">
                                <span class="text-relevant text-accept">Relevant</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span v-if="request.status === 'confirmed'">Fox Meadow School</span>
                            </div>
                            <div class="table-col table-col-80">
                                <div class="form-file-group" v-if="request.reportId">
                                    <input class="form-file-control" type="file" id="form-file" @click.prevent="downloadReport(request.reportId)">
                                    <label class="form-file-label" for="form-file">
                                        <i class="icon-insert-drive-file form-file-label-icon"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="table-col table-col-185">
                                <button class="btn-stroke" type="button" @click.prevent="confirmReport(request.reportId)">Provide access</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="!requests">no reports have been created yet</div>
        <modal-window></modal-window>
        <modal-window-success></modal-window-success>
    </div>
</template>

<script>
    import reportsApi from "../../api/reports";
    import { mapState } from 'vuex'
    import ModalWindow from "./ModalWindow";
    import ModalWindowSuccess from "./ModalWindowSuccess";
    import config from '../../configs/index';

    export default {
        name: "Reports",
        components: {
            ModalWindow,
            ModalWindowSuccess
        },
        data: () => {
            return {
                showModal: false,
                showModalSuccess: false,
                requests: [],
            }
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
            }),
            ...mapState('reports', {
                reports: state => state.reports,
            }),
        },
        async created() {
            this.getRequests();
            this.$root.$on("updateRequests", () => {
                this.getRequests();
            });
        },
        methods: {
            async getRequests() {
                let response = await reportsApi.getRequestsForParent(this.enrollmentId);

                let requests = [];
                for (let i = 0; i < response.data.length; i++) {
                    let card = this.cards.find(x => x.id === response.data[i].cardId);
                    requests[i] = {
                        'name': card.name,
                        'birth_date': card.birth_date,
                        'id': response.data[i].cardId,
                        'avatar': card.avatar,
                        'reportId': response.data[i].reportId,
                        'status': response.data[i].status,
                    };
                }

                this.requests = requests;
                this.reports.countReports = this.requests.length;
            },
            confirmReport(reportId) {
                this.showModal = !this.showModal;
                this.$root.$emit("openShowModel", reportId);
                this.showModal = !this.showModal;
            },
            async downloadReport(reportId) {
                if (reportId ) {
                    let response = await reportsApi.downloadReport(reportId);
                    let fileName = response.data.file_name;
                    this.downloadLink =  config.API_BASE_URL + fileName;
                    window.open(this.downloadLink);
                }
            }
        },
    }
</script>

<style scoped>

</style>
