<template>
    <div class="section">
        <div class="section-head">
            <a href="#" class="avatar is-large">
                <img class="avatar-media" src="./../../assets/img/avatars/img-4.png" alt="avatar">
            </a>
            <div class="flex flex-column justify-center">
                <span class="user-name big mb-5">Jenna Brown</span>
                <span class="ml-16 mb-5 text-light">Pediatrician in Bellevue Hospital Center</span>
                <div class="ml-16 mb-0 location">
                    <i class="icon-location-city font-size-18"></i>
                    <span class="text-light ml-5">59 Brewster Rd Scarsdale, NY 10583</span>
                </div>
            </div>
        </div>
        <div class="section-body">
            <div class="section-inner h-100">
                <div class="general-card-body">
                    <div class="row">
                        <div class="col-6">
                            <ul class="general-info-list">
                                <li class="general-info-item">
                                    <span class="text-light ml-16">Quantity of patients</span>
                                    <span>960/1000</span>
                                </li>
                                <li class="general-info-item">
                                    <span class="text-light ml-16">Quantity of girls</span>
                                    <span>480</span>
                                </li>
                                <li class="general-info-item">
                                    <span class="text-light ml-16">Quantity of boys</span>
                                    <span>480</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="general-info-list">
                                <li class="general-info-item">
                                    <span class="text-light ml-16">Quantity of new patients this month</span>
                                    <span>20</span>
                                </li>
                                <li class="general-info-item">
                                    <span class="text-light ml-16">Quantity of new patients this week</span>
                                    <span>5</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DashboardHospital"
    }
</script>

<style scoped>

</style>