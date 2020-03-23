<template>
    <div class="card-grid">
        <div class="card">
            <div class="card-content-left">
                <router-link :to="{name: 'school-inner'}">
                    <a  class="card-media">
                        <img class="card-media-content" src="./../../assets/img/schools/school-1.png" alt="school-image">
                    </a>
                </router-link>
                <div class="card-info">
                    <div class="flex align-center mb-5">
                        <router-link :to="{name: 'school-inner'}">
                            <a class="heading-main mb-0">Fox Meadow School</a>
                        </router-link>
                        <span class="mark ml-16">Public</span>
                    </div>
                    <div class="location">
                        <i class="icon-location-city font-size-18"></i>
                        <span class="text-light ml-5">59 Brewster Rd Scarsdale, NY 10583</span>
                    </div>
                    <ul class="school-info-list ">
                        <li class="school-info-item">
                            <span>Quantity of classes:</span>
                            <span class="text-accent ml-5">3</span>
                        </li>
                        <li class="school-info-item">
                            <span>Free places:</span>
                            <span class="text-accent ml-5">8</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-content-right">
                <ul class="children-list ">
                    <li class="children-item" v-for="request in requests" :key="request.id">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" :src="request.avatar" alt="avatar">
                            </div>
                            <span class="user-name">{{request.name}}</span>
                        </div>
                        <span class="mark is-accept" v-if="request.status==='accepted'">Accepted</span>
                        <span class="mark is-sent" v-if="request.status==='created'">Sent</span>
                        <button class="btn" type="button"
                                v-if="request.status==='apply'"
                                @click.prevent="createRequest(request)"
                        >Apply</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-content-left">
                <a class="card-media">
                    <img class="card-media-content" src="./../../assets/img/schools/school-2.png" alt="school-image">
                </a>
                <div class="card-info">
                    <div class="flex align-center mb-5">
                        <a class="heading-main mb-0">Lakeville Elementary School</a>
                        <span class="mark ml-16">Public</span>
                    </div>
                    <div class="location">
                        <i class="icon-location-city font-size-18"></i>
                        <span class="text-light ml-5">42-47 Jayson Ave, Great Neck, NY 11020</span>
                    </div>
                    <ul class="school-info-list ">
                        <li class="school-info-item">
                            <span>Quantity of classes:</span>
                            <span class="text-accent ml-5">4</span>
                        </li>
                        <li class="school-info-item">
                            <span>Free places:</span>
                            <span class="text-accent ml-5">2</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-content-right">
                <ul class="children-list ">
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-2.png" alt="avatar">
                            </div>
                            <span class="user-name">Marry Robson</span>
                        </div>
                        <span class="mark is-sent">Sent</span>
                    </li>
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-3.png" alt="avatar">
                            </div>
                            <span class="user-name">Nick Robson</span>
                        </div>
                        <span class="mark is-accept">Accepted</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-content-left">
                <a class="card-media">
                    <img class="card-media-content" src="./../../assets/img/schools/school-3.png" alt="school-image">
                </a>
                <div class="card-info">
                    <div class="flex align-center mb-5">
                        <a class="heading-main mb-0">South Groove Elementary School</a>
                        <span class="mark ml-16">Public</span>
                    </div>
                    <div class="location">
                        <i class="icon-location-city font-size-18"></i>
                        <span class="text-light ml-5">60 Colony Ln, Suosset NY 11791</span>
                    </div>
                    <ul class="school-info-list ">
                        <li class="school-info-item">
                            <span>Quantity of classes:</span>
                            <span class="text-accent ml-5">5</span>
                        </li>
                        <li class="school-info-item">
                            <span>Free places:</span>
                            <span class="text-accent ml-5">10</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-content-right">
                <ul class="children-list ">
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-2.png" alt="avatar">
                            </div>
                            <span class="user-name">Marry Robson</span>
                        </div>
                        <span class="mark is-sent is-rejected">Rejected</span>
                    </li>
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-3.png" alt="avatar">
                            </div>
                            <span class="user-name">Nick Robson</span>
                        </div>
                        <span class="mark is-sent">Sent</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-content-left">
                <a class="card-media">
                    <img class="card-media-content" src="./../../assets/img/schools/school-4.png" alt="school-image">
                </a>
                <div class="card-info">
                    <div class="flex align-center mb-5">
                        <a class="heading-main mb-0">Zeta Charter School</a>
                        <span class="mark ml-16">Public</span>
                    </div>
                    <div class="location">
                        <i class="icon-location-city font-size-18"></i>
                        <span class="text-light ml-5">222 Alexander Avenue, Bronx, NY 104454</span>
                    </div>
                    <ul class="school-info-list ">
                        <li class="school-info-item">
                            <span>Quantity of classes:</span>
                            <span class="text-accent ml-5">2</span>
                        </li>
                        <li class="school-info-item">
                            <span>Free places:</span>
                            <span class="text-accent ml-5">13</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-content-right">
                <ul class="children-list ">
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-2.png" alt="avatar">
                            </div>
                            <span class="user-name">Marry Robson</span>
                        </div>
                        <span class="mark is-sent">Sent</span>
                    </li>
                    <li class="children-item">
                        <div class="flex align-center">
                            <div class="avatar ">
                                <img class="avatar-media" src="./../../assets/img/avatars/img-3.png" alt="avatar">
                            </div>
                            <span class="user-name">Nick Robson</span>
                        </div>
                        <span class="mark is-accept is-accept">Accepted</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import reportsApi from "../../api/reports";

    export default {
        name: "ListOfShools",
        data: () => {
            return {
                requests: []
            }
        },
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
            }),
        },
        async created() {
            this.getRequests()
        },
        methods: {
            async getRequests() {
                let cards =  await reportsApi.getAllCardsForParents(this.enrollmentId);
                cards = cards.data;
                let requests = [];
                for (let i = 0; i < cards.length; i++) {
                    let response = await reportsApi.getRequestsByCardId(cards[i].cardId);
                    let card = this.cards.find(x => x.id === cards[i].cardId);
                    if (!response.data) {
                        requests[i] = {
                            status: "apply",
                            cardId: cards[i].cardId,
                            name: card.name,
                            avatar: card.avatar
                        }
                    } else {
                        requests[i] = {
                            status: response.data.status,
                            cardId: cards[i].cardId,
                            name: card.name,
                            avatar: card.avatar
                        };
                    }
                }
                this.requests = requests;
            },
            async createRequest(request) {
                await reportsApi.createRequest({
                    "enrollment_id": this.enrollmentId,
                    "card_id": request.cardId,
                    "kindergarten_id": 3,
                    "doctor_id": 2
                });
                this.getRequests();
            }
        }
    }
</script>

<style scoped>

</style>
