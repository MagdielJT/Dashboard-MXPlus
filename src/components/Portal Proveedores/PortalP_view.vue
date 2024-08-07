<template>
  <div id="global" class="h-100">
    <div class="topNavBarC">
      <TopNavBar />
    </div>
    <div class="sideNavBarC">
      <SideNavBar />
    </div>
    <div class="moduleComponent">
      <div class="card" >
        <SpinnerVue v-show="isLoading === true" />

        <h2 v-show="!isLoading" class="blue-text">Portal de Proveedores</h2>
        <p v-show="!isLoading" style="font-style: italic">
          Aquí podrás realizar movimientos para el Portal de Proveedores.
        </p>
        <div>
            <b-container class="d-flex justify-content-center align-items-center w-100">
                <b-row class="w-100 justify-content-center align-items-center">
            <b-col
              style="
                padding: 0px !important;
                padding-top: 7px;
                padding-bottom: 7px;
              "
              class="w-100"
            >

              <img style="margin: auto !important; position: relative;" height="350px" src="https://firebasestorage.googleapis.com/v0/b/mx-plus-docs.appspot.com/o/En%20construccion%20img.png?alt=media&token=7eaba91d-bfe1-4614-8130-9324ad90af21" alt="en construccion">
            </b-col>
            
          </b-row>
            </b-container>
          
        </div>
      </div>
      <FooterFreebugVue />
    </div>
  </div>
</template>
<script>
import FooterFreebugVue from "../template/Commons/FooterFreebug.vue";
import SideNavBar from "../template/SideNavBar.vue";
import TopNavBar from "../template/TopNavBar.vue";
import SpinnerVue from "../template/Commons/Spinner.vue";
export default {
  name: "PortalProveedoresComponent",
  components: { SideNavBar, TopNavBar, FooterFreebugVue, SpinnerVue },
};
</script>