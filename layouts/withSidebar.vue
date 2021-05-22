<template>
    <div class="clearfix">
      <div class="column-aside" :class="{'only-icons': menuToggle}">
        <Sidebar />
      </div>
      <div class="column-content" :class="{'only-icons': menuToggle}">
        <Header v-on:changeTitle="toggleBtn()" />
        <Nuxt />
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar },
  data: () => {
    return {
      menuToggle: false,
    }
  },
  methods: {
    toggleBtn: function(updatedTitle) {
      this.menuToggle = !this.menuToggle;
    }
  },
    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script> 