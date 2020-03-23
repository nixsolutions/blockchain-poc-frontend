<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center justify-between">
                    <h1 class="heading-main mb-0">
                        My patients
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid">
                <div class="flex flex-column h-100">

                    <list-of-patients></list-of-patients>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListOfPatients from "../../components/patients/ListOfPatients";

    export default {
        name: "MyPatients",
        components: {
            ListOfPatients,
        }
    }
</script>

<style scoped>

</style>
