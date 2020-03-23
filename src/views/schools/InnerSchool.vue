<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <router-link :to="{name: 'schools'}">
                    <a class="btn-white mr-16">
                        <i class="icon-ic-arrow-left-blue"></i>
                        Back
                    </a>
                    </router-link>
                    <h1 class="heading-main mb-0">
                        Elementary Schools
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid h-100">
                <div class="card-inner">
                    <div class="flex w-100 mb-40">
                        <div class="card-media">
                            <img class="card-media-content" src="./../../assets/img/schools/school-1.png" alt="school-image">
                        </div>
                        <div class="card-info">
                            <div class="flex align-center justify-between mb-5">
                                <span class="heading-main mb-0">Fox Meadow School</span>
                                <span class="mark ml-16">Public</span>
                            </div>
                            <div class="location">
                                <i class="icon-location-city font-size-18"></i>
                                <span class="text-light ml-5">59 Brewster Rd Scarsdale, NY 10583</span>
                            </div>
                            <ul class="school-info-list is-row">
                                <li class="school-info-item">
                                    <span>Quantity of classes:</span>
                                    <span class="text-accent ml-5">3</span>
                                </li>
                                <li class="school-info-item">
                                    <span>Free places:</span>
                                    <span class="text-accent ml-5">8</span>
                                </li>
                            </ul>
                            <div class="flex">
                                <ul class="children-list is-row">
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
                    </div>

                    <div class="description-item w-100 mb-40">
                        <h4 class="description-title">Description</h4>
                        <p class="description-text">Fox Meadow School is a top rated, public school located in Scarsdale, NY. It has 461
                            students in drades K-5 with a student-teacher ratio of 15 to 1.
                            According to state test scores, 87% of students are at least proficient in math
                            and 77% in reading.</p>

                        <h4 class="description-title">Photos</h4>
                        <div class="gallery-wrapper">
                            <div class="gallery-item"><img src="./../../assets/img/school-photo/photo_1.jpg" alt="school-image"></div>
                            <div class="gallery-item"><img src="./../../assets/img/school-photo/photo_2.jpg" alt="school-image"></div>
                            <div class="gallery-item"><img src="./../../assets/img/school-photo/photo_3.jpg" alt="school-image"></div>
                            <div class="gallery-item"><img src="./../../assets/img/school-photo/photo_4.jpg" alt="school-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import reportsApi from "../../api/reports";

    export default {
        name: "InnerSchool",
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
