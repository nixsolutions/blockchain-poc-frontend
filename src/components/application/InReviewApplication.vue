<template>
    <div ib="jsApplicationTab2" class="tab-content-item" :class="tabName === 'jsApplicationTab2' ? 'is-active' : ''">
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
                    <div class="table-col table-col-215">
                        <span class="text-light">Status</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row" v-for="report in reports" :key="report.id" v-show="report.status==='in_review'">
                    <div class="table-col table-col-185">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>06/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-185 flex-grow">
                        <div class="flex align-center">
                            <span>{{report.name}}</span>
                        </div>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>{{report.birth_date}}</span>
                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control" :value="selectValue"  @change.prevent="createRequestSchool(report, $event.target.value)">
                                <option value="0">Received</option>
                                <option value="1">In review</option>
                                <option value="2" >Accepted</option>
                                <option value="3" >Rejected</option>
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
                        <span>Lisa Lehner</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>04/22/2016</span>
                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1" selected>In review</option>
                                <option value="2">Accepted</option>
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
                        <span>Sophia Davis</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>10/01/2015</span>
                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1" selected>In review</option>
                                <option value="2">Accepted</option>
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
                        <span>Mason Morgan</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>12/25/2013</span>
                        </div>
                    </div>
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1" selected>In review</option>
                                <option value="2">Accepted</option>
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
                    <div class="table-col table-col-215">
                        <div class="select">
                            <select class="select-control">
                                <option value="0">Received</option>
                                <option value="1" selected>In review</option>
                                <option value="2">Accepted</option>
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

    export default {
        name: "InReviewApplication",
        props: ["reports"],
        data: () => {
            return {
                tabName: '',
                selectValue: 1,
            }
        },
        created() {
            this.$root.$on("changeApplicationTab", (tabName) => {
                this.tabName = tabName;
            });
        },
        methods: {
            async createRequestSchool(report, value)
            {
                if(value === '2') {
                    let data = {
                        "parents": "user-parent-1",
                        "card_id": report.cardId,
                        "doctor_id": 2,
                        "kindergarten_id": 3,
                        "parent_id": 1
                    };
                    await reportsApi.createRequestReport(data);
                    await reportsApi.updateRequestStatus(report.reportIid, {"status": "accepted"});
                    this.$root.$emit("updateReports");
                }
            }
        }
    }
</script>

<style scoped>

</style>
