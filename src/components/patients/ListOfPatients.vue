<template>
    <div class="row">
        <div class="col-6" v-for="card in cards" :key="card.id">
            <div class="card-small">
                <router-link :to="{ name: 'child', params: { id: card.id }}">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" :src="card.avatar" alt="avatar">
                </a>
                </router-link>
                <div class="flex flex-column justify-center">
                    <router-link :to="{ name: 'child', params: { id: card.id }}">
                    <a class="user-name big mb-5">{{card.name}}</a>
                    </router-link>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">{{card.birth_date}}</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">{{card.dateOfNextVisit}}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-10.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                        <a class="user-name big mb-5">Ashlynn Boyer</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">07/23/2018</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">09/30/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-11.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Berta Carter</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">01/18/2018</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">10/03/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-12.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Eudora Brakus</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">07/25/2015</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">03/30/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-13.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Karolann Hahn</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">04/16/2017</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">10/04/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-14.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Lisa Lehner</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">04/22/2016</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">09/25/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-15.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Madie Armstrong</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">03/13/2017</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">12/01/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-16.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Noe Cormier</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">12/13/2018</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">02/05/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card-small">
                <a href="#" class="avatar is-large">
                    <img class="avatar-media" src="../../assets/img/avatars/img-17.png" alt="avatar">
                </a>
                <div class="flex flex-column justify-center">
                    <a class="user-name big mb-5">Oma Graham</a>
                    <ul class="flex flex-column ml-16">
                        <li class="flex align-center mb-5">
                            <span class="text-light">Date of birth:</span>
                            <span class="ml-5">09/22/2018</span>
                        </li>
                        <li class="flex align-center">
                            <span class="text-light">Date of next visit:</span>
                            <span class="ml-5">09/15/2019</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "ListOfPatients",
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
        },
    }
</script>

<style scoped>

</style>