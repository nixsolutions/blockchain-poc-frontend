import reportsApi from "../api/reports";

const initial = () => ({
  reports: {
    countReportsForHospital: 0,
    countReportsForParents: 0,
    reports: 0,
  }
});

const state = initial();

const mutations = {
  reset (state) {
    getAllReportsForHospital();
    getAllRequestsForParent();
    Object.assign(state, initial());
  },
};

const getters = {

};
const actions = {

};

// TODO
async function getAllReportsForHospital() {
  await reportsApi.getReportRequestForHospital('user-hospital-1').then(function(v) {
    state.reports.countReportsForHospital = v.data.length + 7;
  });
}
getAllReportsForHospital();

// TODO
async function getAllRequestsForParent() {
  await reportsApi.getRequestsForParent('user-parents-1').then(function(v) {
    state.reports.countReportsForParents = v.data.length;
  });
}
getAllRequestsForParent();

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
