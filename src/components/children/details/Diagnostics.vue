<template>
    <div ib="jsPatientTab5" class="tab-content-item"  :class="tabName === 'jsPatientTab5' ? 'is-active' : ''">
        <div class="table">
            <ul class="table-header">
                <li class="table-header-row">
                    <div class="table-col table-col-145">
                        <span class="text-light">date</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-light">Hospital</span>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span class="text-light">Test result</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>05/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <div class="flex align-center">
                            <i class="icon-local-hospital mr-5"></i>
                            <span>Bellevue Hospital Center</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span>Complete blood count (CBC)</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>04/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <div class="flex align-center">
                            <i class="icon-local-hospital mr-5"></i>
                            <span>Bellevue Hospital Center</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span>Urinalysis(UA)</span>
                    </div>
                </li>
                <li class="table-body-row">
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>03/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <div class="flex align-center">
                            <i class="icon-local-hospital mr-5"></i>
                            <span>Bellevue Hospital Center</span>
                        </div>
                    </div>
                    <div class="table-col table-col-230 flex-grow">
                        <span>X-RAY</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Diagnostics",
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