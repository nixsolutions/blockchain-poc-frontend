<template>
    <loading
            :color="'#2196F3'"
            :active.sync="isLoading"
            :can-cancel="true"
            :is-full-page="true"
    ></loading>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "Loader",
        props: ['isLoading'],
        components: {
            Loading
        },
    }
</script>

<style scoped>

</style>