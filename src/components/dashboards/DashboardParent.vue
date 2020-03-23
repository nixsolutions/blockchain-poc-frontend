<template>
    <div class="section">
        <div class="section-head">
            <a href="#" class="avatar is-active is-big">
                <img class="avatar-media" src="./../../assets/img/avatars/img-1.png" alt="avatar">
            </a>
            <div>
                <span class="user-name big">Ann Robson</span>
                <span class="user-role">Parent</span>
            </div>
        </div>
        <div class="section-body">
            <div class="row">
                <div class="col-6" v-for="card in cards" :key="card.id">
                    <div class="section-inner" v-if="card">
                        <div class="general-card">
                            <div class="general-card-head">
                                <a href="#" class="avatar is-large">
                                    <img class="avatar-media" :src="card.avatar" alt="avatar">
                                </a>
                                <span class="user-name big">{{card.name}}</span>
                            </div>
                            <div class="general-card-body">
                                <ul class="general-info-list">
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-perm-contact-calendar font-size-20"></i>
                                            <span class="text-light ml-16">Gender</span>
                                        </div>
                                        <span class="">{{card.gender}}</span>
                                    </li>
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-cake font-size-20"></i>
                                            <span class="text-light ml-16">Date of birth</span>
                                        </div>
                                        <span class="">{{card.birth_date}}</span>
                                    </li>
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-local-hospital font-size-20"></i>
                                            <span class="text-light ml-16">Hospital</span>
                                        </div>
                                        <span class="">{{card.hospital}}</span>
                                    </li>
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-school font-size-20"></i>
                                            <span class="text-light ml-16">School</span>
                                        </div>
                                        <span class="">{{card.school}}</span>
                                    </li>
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-calendar-today font-size-20"></i>
                                            <span class="text-light ml-16">Date of next visit</span>
                                        </div>
                                        <span class="text-accent">{{card.dateOfNextVisit}}</span>
                                    </li>
                                    <li class="general-info-item">
                                        <div class="flex align-center">
                                            <i class="icon-event-note font-size-20"></i>
                                            <span class="text-light ml-16">Date of next vaccine</span>
                                        </div>
                                        <span class="text-accent">{{card.dateOfNextVaccine}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="general-card-foot">
                                <router-link :to="{ name: 'child', params: { id: card.id }}" >
                                <a class="link" href="#">
                                    <span>Show More</span>
                                    <i class="icon-ic-arrow-blue link-icon"></i>
                                </a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "Dashbord",
        data: ()=> {
            return {

            }
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
        },
        async created() {
          this.loadCards();
        },
        methods: {
            ...mapActions('cards', [
                'loadCards',
            ]),

        }
    }
</script>

<style scoped>

</style>
