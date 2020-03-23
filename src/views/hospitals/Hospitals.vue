<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center">
                    <h1 class="heading-main mb-0">hospitals</h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <list-of-hospitals></list-of-hospitals>
        </div>
    </div>
</template>

<script>
    import ListOfHospitals from "../../components/hospitals/ListOfHospitals";

    export default {
        name: "Hospitals",
        components: {
            ListOfHospitals
        },
    }
</script>

<style scoped>

</style>