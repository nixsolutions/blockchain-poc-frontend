<template>
    <div ib="jsPatientTab3" class="tab-content-item" :class="tabName === 'jsPatientTab3' ? 'is-active' : ''">
        <div class="table">
            <ul class="table-header">
                <li class="table-header-row">
                    <div class="table-col table-col-145">
                        <span class="text-light">date</span>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span class="text-light">Doctor's specialization</span>
                    </div>
                    <div class="table-col table-col-215">
                        <span class="text-light">Reason</span>
                    </div>
                    <div class="table-col table-col-185">
                        <span class="text-light">Complaints</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-light">Medical opinion</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>09/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Pediatrician</span>
                    </div>
                    <div class="table-col table-col-215">
                        <span>Due to illness</span>
                    </div>
                    <div class="table-col table-col-185">
                        <span class="text-disabled">-</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-accept">Healthy</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>10/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Neurologist</span>
                    </div>
                    <div class="table-col table-col-215">
                        <span>Planned visit</span>
                    </div>
                    <div class="table-col table-col-185">
                        <span>Backache, headache</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-danger">Ill</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>11/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Pediatrician</span>
                    </div>
                    <div class="table-col table-col-215">
                        <span>Vaccination</span>
                    </div>
                    <div class="table-col table-col-185">
                        <span>Backache, headache</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-rejected">Referral to neurologist</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HistoryOfVisits",
        data: () => {
            return {
                tabName: ''
            }
        },
        created() {
            this.$root.$on("changeTab", (tabName) => {
                this.tabName = tabName;
            });
        }
    }
</script>

<style scoped>

</style>