<template>
  <div id="app" class="wrapper">
    <a @click.prevent="clearData"
       style="color: #DCDCDC; text-decoration: none; position: absolute; bottom: 0; right: 0">
      zeroing</a>
    <Sidebar v-if="isAuth"></Sidebar>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from "./components/layouts/Sidebar";
import { mapState } from 'vuex';
import reportsApi from "./api/reports";

export default {
  name: 'app',
  components: {
    Sidebar
  },
  computed: {
    ...mapState('auth', {
      isAuth: state => state.authorized,
    }),
  },
  methods: {
    async clearData() {
      await reportsApi.clearData();
    }
  }
}
</script>

<style>
</style>
