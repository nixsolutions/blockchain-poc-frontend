<template>
    <div class="overlay" v-if="showModalSuccess" @close="showModalSuccess = false">
        <div class="modal">
            <div class="modal-header">
                <span class="heading-main">You have <span class="text-accept">successfully</span> provided access to the next schools:</span>
                <button class="btn-close" type="button" @click="showModalSuccess = false"><i class="icon-ic-close"></i></button>
            </div>
            <div class="modal-body">
                <div class="flex align-center">
                    <i class="icon-school mr-10"></i>
                    <span @click="showModalSuccess = false">Fox Meadow School</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalWindowSuccess",
        data: ()=> {
            return {
                showModalSuccess: false,
            }
        },
        created() {
            this.$root.$on("openShowModelSuccess", () => {
                this.showModalSuccess = true;
            });
        }
    }
</script>

<style scoped>

</style>