<template>
  <div>
    <b-navbar toggleable="sm">
      <b-navbar-toggle target="nav-text-collapse" @click="handleToggleSideBar"></b-navbar-toggle>

      <b-navbar-brand class="pl-1">
        <img height="45px" style="margin-left: 10px;margin-top: 5px;" src="https://firebasestorage.googleapis.com/v0/b/mx-plus-docs.appspot.com/o/GLOBAL_LOGOBCO.png?alt=media&token=20ef6d67-465c-4a5a-b65c-81b0b6000589" alt="Logo healix">
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          
            <b-button class="btn_removeBKColor" @click="handleToggleSideBar"><font-awesome-icon icon="fa-solid fa-bars" size="1x" /></b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "TopNavBar",
  components: {},
  data:function(){
    return{
    }
  },
  methods:{
    handleToggleSideBar(){
      console.log('Clicked for toggle');
        this.$store.commit("setToggleSideBar", !this.$store.state.toggleSideBar);

    }
  }
};
</script>