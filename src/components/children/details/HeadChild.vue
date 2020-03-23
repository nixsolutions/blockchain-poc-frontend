<template>
    <div class="section-head">
        <a href="#" class="avatar is-large">
            <img class="avatar-media" :src="card.avatar" alt="avatar">
        </a>
        <div class="flex flex-column">
        <span class="user-name big mb-16">{{card.name}}</span>
        <ul class="children-info-list mb-0">
            <li class="children-info-item">
                <i class="icon-perm-contact-calendar children-info-icon"></i>
                <span class="text-light mr-5">Gender:</span>
                <span>{{card.gender}}</span>
            </li>
            <li class="children-info-item">
                <i class="icon-cake children-info-icon"></i>
                <span class="text-light mr-5">Date of birth:</span>
                <span>{{card.birth_date}}</span>
            </li>
            <li class="children-info-item">
                <i class="icon-assignment children-info-icon"></i>
                <span class="text-light mr-5">Report status:</span>
                <span class="text-accept">Relevant</span>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name: "HeadChild",
        props:['card'],
    }
</script>

<style scoped>

</style>