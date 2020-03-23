<template>
    <div ib="jsApplicationTab4" class="tab-content-item" :class="tabName === 'jsApplicationTab4' ? 'is-active' : ''">
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
                    <div class="table-col table-col-220">
                        <span class="text-light">Notes</span>
                    </div>
                </li>
            </ul>
            <ul class="table-body">
                <li class="table-body-row">
                    <div class="table-col table-col-185">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>06/22/2019</span>
                        </div>
                    </div>
                    <div class="table-col table-col-185 flex-grow">
                        <span>Madie Armstrong</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>03/13/2017</span>
                        </div>
                    </div>
                    <div class="table-col table-col-150">
                        <span class="text-danger">Irrelevant</span>
                    </div>
                    <div class="table-col table-col-220">
                        <span>Irrelevant report's status</span>
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
                        <span>Noe Cormier</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>12/13/2018</span>
                        </div>
                    </div>
                    <div class="table-col table-col-150">
                        <span class="text-disabled">No Access</span>
                    </div>
                    <div class="table-col table-col-220">
                        <span class="text-disabled">-</span>
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
                        <span>Karolann Hahn</span>
                    </div>
                    <div class="table-col table-col-145">
                        <div class="flex align-center">
                            <i class="icon-calendar-today mr-5"></i>
                            <span>04/16/2017</span>
                        </div>
                    </div>
                    <div class="table-col table-col-150">
                        <span class="text-disabled">No Access</span>
                    </div>
                    <div class="table-col table-col-220">
                        <span class="text-disabled">-</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RejectedApplication",
        data: () => {
            return {
                tabName: ''
            }
        },
        created() {
            this.$root.$on("changeApplicationTab", (tabName) => {
                this.tabName = tabName;
            });
        }
    }
</script>

<style scoped>

</style>
