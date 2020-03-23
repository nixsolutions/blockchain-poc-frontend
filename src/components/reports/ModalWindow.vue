<template>
    <div class="overlay" v-if="showModal" @close="showModal = false">
        <div class="modal">
            <div class="modal-header">
                <span class="heading-main">Provide access to preferred schools</span>
                <button class="btn-close" type="button" @click="showModal = false"><i class="icon-ic-close"></i></button>
            </div>
            <div class="modal-body">
                <div class="check">
                    <input class="check-control" type="checkbox" id="check2" name="checkbox" />
                    <label class="check-label" for="check2">
                        Fox Meadow School</label>
                </div>
                <div class="check">
                    <input class="check-control" type="checkbox" id="check3" name="checkbox" disabled/>
                    <label class="check-label" for="check3">
                        Lakeville Elementary School</label>
                </div>
                <div class="check">
                    <input class="check-control" type="checkbox" id="check4" name="checkbox" disabled/>
                    <label class="check-label" for="check4">
                        South Grove Elementary School</label>
                </div>
                <div class="check">
                    <input class="check-control" type="checkbox" id="check5" name="checkbox" disabled/>
                    <label class="check-label" for="check5">
                        Zeta Charter School</label>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-full" type="submit" @click="confirmReport">Confirm</button>
            </div>
        </div>
        <loader
                :isLoading="isLoading"
        ></loader>
    </div>
</template>

<script>
    import reportsApi from "../../api/reports";
    import { mapState } from 'vuex'
    import Loader from "../loader/Loader";

    export default {
        name: "ModalWindow",
        components: {
            Loader
        },
        data: () => {
            return {
                showModal: false,
                reportId: '',
                isLoading: false,
            }
        },
        computed: {
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
            }),
        },
        created() {
            this.$root.$on("openShowModel", (reportId) => {
                this.showModal = !this.showModal;
                this.reportId = reportId;
            });
        },
        methods: {
            async confirmReport() {
                this.isLoading = true;
                let response = await reportsApi.confirmRequest({
                    'reportId': this.reportId
                });
                let key = response.data.name;
                response = await reportsApi.approveReportInBlockchain({
                    "key": key,
                    "enrollment_id": this.enrollmentId,
                });
                this.$root.$emit("openShowModelSuccess");
                this.$root.$emit("updateRequests");
                this.isLoading = false;
                this.showModal = !this.showModal;
            }
        }
    }
</script>

<style scoped>

</style>