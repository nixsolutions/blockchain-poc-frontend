<template>
    <div ib="jsPatientTab2" class="tab-content-item" :class="tabName === 'jsPatientTab2' ? 'is-active' : ''">
        <div class="table">
            <ul class="table-header">
                <li class="table-header-row">
                    <div class="table-col table-col-145">
                        <span class="text-light">date</span>
                    </div>
                    <div class="table-col table-col-130">
                        <span class="text-light">Time</span>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span class="text-light">Doctor's specialization</span>
                    </div>
                    <div class="table-col table-col-205 flex-grow">
                        <span class="text-light">Reason</span>
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
                    <div class="table-col  table-col-130">
                        <div class="flex align-center">
                            <i class="icon-access-time mr-5"></i>
                            <span>12:00 AM</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Pediatrician</span>
                    </div>
                    <div class="table-col table-col-205 flex-grow">
                        <span>Due to illness</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>10/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col  table-col-130">
                        <div class="flex align-center">
                            <i class="icon-access-time mr-5"></i>
                            <span>12:00 AM</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Neurologist</span>
                    </div>
                    <div class="table-col table-col-205 flex-grow">
                        <span>Planned visit</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>11/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col  table-col-130">
                        <div class="flex align-center">
                            <i class="icon-access-time mr-5"></i>
                            <span>12:00 AM</span>
                        </div>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span>Pediatrician</span>
                    </div>
                    <div class="table-col table-col-205 flex-grow">
                        <span>Vaccination</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NextVisits",
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