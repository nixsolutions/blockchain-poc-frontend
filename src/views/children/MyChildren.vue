<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center justify-between">
                    <h1 class="heading-main mb-0">
                        My children
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid">
                <div class="flex flex-column h-100">
                    <div class="row">
                        <div class="col-6" v-for="card in cards" :key="card.id">
                            <div class="card-small">
                                <a href="#" class="avatar is-large">
                                    <img class="avatar-media" :src="card.avatar" alt="avatar">
                                </a>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "MyChildren",
        computed: {
            ...mapState('cards', {
                cards: state => state.cards,
            }),
        },
    }
</script>

<style scoped>

</style>
