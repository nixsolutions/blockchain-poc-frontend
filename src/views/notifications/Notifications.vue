<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0">
                        Notification      </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
        <div class="container-fluid">
            <div class="section-bordered">
                <div class="table">
                    <ul class="table-header">
                        <li class="table-header-row">
                            <div class="table-col table-col-145">
                                <span class="text-light">Date</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span class="text-light">Name</span>
                            </div>
                            <div class="table-col table-col-145 flex-grow">
                                <span class="text-light">From</span>
                            </div>
                            <div class="table-col table-col-145">
                                <span class="text-light">Subject</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span class="text-light">Message</span>
                            </div>
                        </li>
                    </ul>
                    <ul class="table-body">
                        <li class="table-body-row is-active">
                            <div class="table-col table-col-145">
                                <div class="flex align-center">
                                    <i class="icon-calendar-today mr-5"></i>
                                    <span>06/22/2019</span>
                                </div>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>Mary Robson</span>
                            </div>
                            <div class="table-col table-col-145 flex-grow">
                                <span>Bellevue Hospital Center</span>
                            </div>
                            <div class="table-col table-col-145">
                                <span>Report status</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>The report status has been changed from Irrelevant to <span class="text-accept">Relevant.</span></span>
                            </div>
                        </li>
                        <li class="table-body-row">
                            <div class="table-col table-col-145">
                                <div class="flex align-center">
                                    <i class="icon-calendar-today mr-5"></i>
                                    <span>06/22/2019</span>
                                </div>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>Mary Robson</span>
                            </div>
                            <div class="table-col table-col-145 flex-grow">
                                <span>Bellevue Hospital Center</span>
                            </div>
                            <div class="table-col table-col-145">
                                <span>Test results</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>The complete blood count is ready.</span>
                            </div>
                        </li>
                        <li class="table-body-row">
                            <div class="table-col table-col-145">
                                <div class="flex align-center">
                                    <i class="icon-calendar-today mr-5"></i>
                                    <span>06/25/2019</span>
                                </div>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>Mary Robson</span>
                            </div>
                            <div class="table-col table-col-145 flex-grow">
                                <span>Bellevue Hospital Center</span>
                            </div>
                            <div class="table-col table-col-145">
                                <span>Declaration</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>The declarations has been successfully signed. Your doctor is Janna Brown.</span>
                            </div>
                        </li>
                        <li class="table-body-row">
                            <div class="table-col table-col-145">
                                <div class="flex align-center">
                                    <i class="icon-calendar-today mr-5"></i>
                                    <span>07/22/2019</span>
                                </div>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>Nick Robson</span>
                            </div>
                            <div class="table-col table-col-145 flex-grow">
                                <span>Lakeville Elementary School</span>
                            </div>
                            <div class="table-col table-col-145">
                                <span>Application status</span>
                            </div>
                            <div class="table-col table-col-185 flex-grow">
                                <span>The application status has been changed from In review to  <span class="text-accept">Accepted.</span></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Notifications"
    }
</script>

<style scoped>

</style>
