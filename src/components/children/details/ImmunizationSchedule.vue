<template>
    <div ib="jsPatientTab4" class="tab-content-item" :class="tabName === 'jsPatientTab4' ? 'is-active' : ''">
        <span class="heading-main mb-16 ml-20">Next vaccine</span>
        <!-- patient tab -->
        <div class="table mb-32">
            <ul class="table-header">
                <li class="table-header-row">
                    <div class="table-col table-col-145">
                        <span class="text-light">date</span>
                    </div>
                    <div class="table-col table-col-170">
                        <span class="text-light">Vaccine</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-light">Test result</span>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <span class="text-light">Additional info</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>09/25/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-170">
                        <span>Influenza vaccine</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span>Complete blood count (CBC)</span>
                    </div>
                    <div class="table-col table-col-260 flex-grow">
                        <a class="link" href="#">https://en.wikipedia.org/wiki/influenza_vaccine</a>
                    </div>
                </li>
            </ul>
        </div>
         <span class="heading-main mb-16 ml-20">Immunization schedule</span>
        <div class="media">
            <img class="media-content" src="./../../../assets/img/schedule.png" alt="schedule-img">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImmunizationSchedule",
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