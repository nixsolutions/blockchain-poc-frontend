<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <router-link :to="{ name: 'hospitals' }" >
                    <a class="btn-white mr-16">
                        <i class="icon-ic-arrow-left-blue"></i>
                        Back
                    </a>
                    </router-link>
                    <h1 class="heading-main mb-0">
                       Hospitals
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid">
                <div class="section">
                    <div class="section-head">
                        <div class="card hospitals">
                            <div class="card-content-left">
                                <router-link :to="{name: 'hospitals-inner'}">
                                <a class="card-media big">
                                    <img class="card-media-content" src="./../../assets/img/hospitals/imag1.png" alt="school-image">
                                </a>
                                </router-link>
                                <div class="flex flex-column">
                                    <div class="card-info">
                                        <div class="flex align-center mb-5">
                                            <router-link :to="{name: 'hospitals-inner'}">
                                            <a class="heading-main mb-0">Bellevue Hospital Center</a>
                                            </router-link>
                                        </div>
                                        <div class="location">
                                            <i class="icon-location-city font-size-18"></i>
                                            <span class="text-light ml-5">59 Brewster Rd Scarsdale, NY 10583</span>
                                        </div>
                                        <p>NYC Health + Hospitals/Bellevue Hospital Center, founded on March 31, 1736, is the oldest public hospital in the United
                                            States.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content-right">
                                <ul class="children-list hospitals">
                                    <li class="children-item">
                                        <div class="flex align-center">
                                            <a href="#" class="avatar is-large">
                                                <img class="avatar-media" src="./../../assets/img/avatars/img-2.png" alt="avatar">
                                            </a>
                                            <div class="flex flex-column">
                                                <span class="user-name mb-5">Marry Robson</span>
                                                <span class="text-light ml-16">Concluded from 09/27/2012</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="children-item">
                                        <div class="flex align-center">
                                            <a href="#" class="avatar is-large">
                                                <img class="avatar-media" src="./../../assets/img/avatars/img-3.png" alt="avatar">
                                            </a>
                                            <div class="flex flex-column">
                                                <span class="user-name mb-5">Nick Robson</span>
                                                <span class="text-light ml-16">Concluded from 09/27/2012</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="section-body">
                        <div class="flex flex-column h-100">
                            <div class="row">
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-7.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a class="user-name big mb-4">Dan Kuhlman</a>
                                            <span class="text-light ml-16">Allergist</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-6.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a class="user-name big mb-4">Kendrick Ruecker</a>
                                            <span class="text-light ml-16">Neurologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-9.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a class="user-name big mb-4">Mrs. Trever Cummings</a>
                                            <span class="text-light ml-16">Neurologist</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-8.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a class="user-name big mb-5">Minnie Stark</a>
                                            <span class="text-light ml-16">Surgeon</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-4.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a  class="user-name big mb-5">Jenna Brown</a>
                                            <span class="text-light ml-16">Pediatrician</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card-small">
                                        <a href="#" class="avatar is-large">
                                            <img class="avatar-media" src="./../../assets/img/avatars/img-5.png" alt="avatar">
                                        </a>
                                        <div class="flex flex-column justify-center">
                                            <a class="user-name big mb-5">Owen Hamill V</a>
                                            <span class="text-light ml-16">Immunologist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InnerHospital",
    }
</script>

<style scoped>

</style>
