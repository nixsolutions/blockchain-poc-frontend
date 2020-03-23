<template>
    <div ib="jsPatientTab1" class="tab-content-item" :class="tabName === 'jsPatientTab1' ? 'is-active' : ''">
        <div class="row h-100">
            <div class="col-6">
                <ul class="general-info-list">
                    <li class="general-info-item">
                        <div class="flex align-center">
                            <span class="text-light mr-5">Age:</span>
                            <span>{{card.age}}</span>
                        </div>
                        <div class="flex align-center">
                            <span class="text-light mr-5">Height:</span>
                            <span v-if="!isEdit">{{card.height}}cm</span>
                            <div class="form-edit-group" v-if="isEdit">
                                <input
                                       class="form-edit-control"
                                       type="text"
                                       id="form-edit"
                                       :placeholder="card.weight"
                                       v-model="height"
                                >
                                <label class="form-edit-label" for="form-edit"></label>
                            </div>
                        </div>
                        <div class="flex align-center">
                            <span class="text-light mr-5">Weight:</span>
                            <span v-if="!isEdit">{{card.weight}}kg</span>
                            <div class="form-edit-group" v-if="isEdit">
                                <input
                                        class="form-edit-control"
                                        type="text"
                                        id="form-edit2"
                                        :placeholder="card.weight"
                                        v-model="weight"
                                >
                                <label class="form-edit-label" for="form-edit2"></label>
                            </div>
                        </div>
                    </li>
                    <li class="general-info-item">
                        <span class="text-light mr-5">Peditrician</span>
                        <span>Jenna Brown</span>
                    </li>
                    <li class="general-info-item">
                        <span class="text-light mr-5">Hospital</span>
                        <span class="text-accent">Bellevue Hospital Center</span>
                    </li>
                    <li class="general-info-item">
                        <span class="text-light mr-5">Date of declaration signed</span>
                        <span>09/27/2012</span>
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <ul class="general-info-list">
                    <li class="general-info-item">
                        <div class="flex align-center">
                            <i class="icon-calendar-today font-size-20"></i>
                            <span class="text-light ml-16">Date of next visit</span>
                        </div>
                        <span class="text-accent">{{card.dateOfNextVisit}}</span>
                    </li>
                    <li class="general-info-item">
                        <div class="flex align-center">
                            <i class="icon-event-note font-size-20"></i>
                            <span class="text-light ml-16">Date of next vaccine</span>
                        </div>
                        <span class="text-accent">{{card.dateOfNextVaccine}}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-column align-end" v-if="isHospital">
            <a class="btn-stroke mb-25" href="#" @click.prevent="isEdit = !isEdit" v-if="!isEdit">Edit</a>
            <a class="btn-stroke mb-25" href="#" @click.prevent="editPatientInfo" v-if="isEdit">Update</a>
            <span class="text-disabled">Last updated 06/22/2019</span>
            <span class="text-notify" v-if="isUpdate">The child’s parameters have been successfully updated!</span>
        </div>

     <loader
             :isLoading="isLoading"
     ></loader>
    </div>
</template>

<script>
    import reportsApi from "../../../api/reports";
    import { mapState, mapActions } from 'vuex'
    import { role } from "../../../roles/role";
    import Loader from "../../loader/Loader";

    export default {
        name: "GeneralInfo",
        props:['card'],
        components: {
            Loader
        },
        data: () => {
            return {
                tabName: 'jsPatientTab1',
                isEdit: false,
                height: '',
                weight: '',
                isUpdate: false,
                isLoading: false,
            }
        },
        computed: {
            ...mapState('auth', {
                enrollmentId: state => state.enrollmentId,
                role: state => state.role,
            }),
            isHospital() {
                return this.role === role.hospital;
            },
        },
        created() {
            this.$root.$on("changeTab", (tabName) => {
                this.tabName = tabName;
            });
            this.weight = this.card.weight;
            this.height = this.card.height;
        },
        methods: {
            ...mapActions('cards', [
                'updateCard',
            ]),
            async editPatientInfo() {
                this.isLoading = true;
                let response = await reportsApi.updateCardInBlockchain(this.card.id, {
                    "card_id": this.card.id,
                    "enrollment_id": this.enrollmentId,
                    "height": parseInt(this.height),
                    "weight": parseInt(this.weight),
                });
                this.updateCard({
                    cardId: response.data.params.cardId,
                    params: {
                        'height': response.data.params.height,
                        'weight': response.data.params.weight,
                    }
                });
                this.isLoading = false;
                this.isEdit = !this.isEdit;
                this.isUpdate = !this.isUpdate;
            }
        }
    }
</script>

<style scoped>

</style>