<template>
    <div ib="jsApplicationTab3" class="tab-content-item" :class="tabName === 'jsApplicationTab3' ? 'is-active' : ''">
        <div class="table">
            <ul class="table-header">
                <li class="table-header-row">
                    <div class="table-col table-col-185">
                        <span class="text-light">Date of application</span>
                    </div>
                    <div class="table-col table-col-185 flex-grow">
                        <span class="text-light">Name</span>
                    </div>
                    <div class="table-col table-col-145">
                        <span class="text-light">Date of Birth</span>
                    </div>
                    <div class="table-col table-col-150">
                        <span class="text-light">Report's Status</span>
                    </div>
                    <div class="table-col table-col-80">
                        <span class="text-light">file</span>
                    </div>
                    <div class="table-col table-col-215">
                        <span class="text-light">Status</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row" v-for="report in reports" :key="report.id" v-show="report.status==='accepted'">
                    <div class="table-col table-col-185">
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
                                :class="report.reportStatus === 'requested' || report.reportStatus === 'created' ? 'text-rejected' : 'text-accept'"
                        >
                            {{ report.reportStatus === 'created' || report.reportStatus === 'requested' ? 'requested' : 'relevant' }}
                        </span>
                    </div>
                    <div class="table-col table-col-80">

                        <div class="form-file-group" v-if="report.reportId">
                            <input class="form-file-control" type="file" id="form-file"
                                   @click.prevent="downloadReport(report.reportId)">
                            <label class="form-file-label" for="form-file">
                                <i class="icon-insert-drive-file form-file-label-icon"></i>
                            </label>
                        </div>
                       </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1">In review</option>
                                <option value="2" selected>Accepted</option>
                                <option value="3">Rejected</option>
                            </select>
                            <i class="icon-ic-arrow-grey select-icon"></i>
                        </div>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-185">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>06/22/2019</span>
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
                    <div class="table-col table-col-80">

                        <div class="form-file-group" >

                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1">In review</option>
                                <option value="2" selected>Accepted</option>
                                <option value="3">Rejected</option>
                            </select>
                            <i class="icon-ic-arrow-grey select-icon"></i>
                        </div>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-185">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>06/22/2019</span>
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
                    <div class="table-col table-col-80">

                        <div class="form-file-group" >

                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1">In review</option>
                                <option value="2" selected>Accepted</option>
                                <option value="3">Rejected</option>
                            </select>
                            <i class="icon-ic-arrow-grey select-icon"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import reportsApi from "../../api/reports";
    import config from '../../configs/index';

    export default {
        name: "AcceptedApplication",
        props: ["reports"],
        data: () => {
            return {
                tabName: '',
                downloadLink: '',
            }
        },
        created() {
            this.$root.$on("changeApplicationTab", (tabName) => {
                this.tabName = tabName;
            });
        },
        methods: {
            async downloadReport(reportId) {
                if (reportId ) {
                    let response = await reportsApi.downloadReport(reportId);
                    let fileName = response.data.file_name;
                    this.downloadLink =  config.API_BASE_URL + fileName;
                    window.open(this.downloadLink);
                }
            }
        }
    }
</script>

<style scoped>

</style>
