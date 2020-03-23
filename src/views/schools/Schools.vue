<template>
    <div class="main">
        <header class="header">
            <div class="container-fluid">
                <div class="flex align-center justify-between">
                    <h1 class="heading-main mb-0">
                        Elementary Schools
                    </h1>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="container-fluid h-100">
                <div class="flex flex-column h-100">
                    <list-of-schools></list-of-schools>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListOfSchools from "../../components/schools/ListOfSchools";

    export default {
        name: "Schools",
        components: {
            ListOfSchools,
        }
    }
</script>

<style scoped>

</style>
