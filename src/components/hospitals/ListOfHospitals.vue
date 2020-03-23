<template>
    <div class="container-fluid">
        <div class="flex flex-column">
            <div class="row">
                <div class="col-12">
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
                                <router-link :to="{name: 'hospitals-inner'}">
                                    <a class="link">
                                        <span>Show More</span>
                                        <i class="icon-ic-arrow-blue-bottom link-icon"></i>
                                    </a>
                                </router-link>
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
            </div>
        </div>
        <span class="heading-main text-center mb-20 mt-32">The nearest hospitals in your area</span>
        <div class="flex flex-column">
            <div class="row">
                <div class="col-12">
                    <div class="card hospitals">
                        <div class="card-content-left">
                                <a  class="card-media big">
                                    <img class="card-media-content" src="./../../assets/img/hospitals/imag2.png" alt="school-image">
                                </a>
                            <div class="flex flex-column">
                                <div class="card-info">
                                    <div class="flex align-center mb-5">
                                        <a class="heading-main mb-0">Cohen Children’s Medical Center</a>
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
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-column">
            <div class="row">
                <div class="col-12">
                    <div class="card hospitals">
                        <div class="card-content-left">
                                <a  class="card-media big">
                                    <img class="card-media-content" src="./../../assets/img/hospitals/imag3.png" alt="school-image">
                                </a>
                            <div class="flex flex-column">
                                <div class="card-info">
                                    <div class="flex align-center mb-5">
                                            <a class="heading-main mb-0">Children’s Hospital at Montefiore</a>
                                    </div>
                                    <div class="location">
                                        <i class="icon-location-city font-size-18"></i>
                                        <span class="text-light ml-5">3415 Bainbridge Ave, The Bronx, NY 10467</span>
                                    </div>
                                    <p>Children’s Hospital at Montefiore is part of Montefiore Medical Centre. CHAM opened
                                    in 2001 and treats nearly 200,000 patients each year.</p>
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
        name: "ListOfHospitals",
    }
</script>

<style scoped>

</style>