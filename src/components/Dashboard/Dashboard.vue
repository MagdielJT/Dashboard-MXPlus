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

        <h2 v-show="!isLoading" class="blue-text">Manuales</h2>
        <p v-show="!isLoading" style="font-style: italic">
          Aquí podrás consultar nuestros manuales por tema.
        </p>
        <div>
            <b-container class="d-flex justify-content-center align-items-center w-100">
                <b-row class="w-100 justify-content-center align-items-center">
            <b-col
              style="
                padding: 0px !important;
                cursor: pointer;
                padding-top: 7px;
                padding-bottom: 7px;
              "
              class="docs-link justify-content-center align-items-center"
            >
              <a href="https://tekiio-plus-soporte.web.app/guia-inicio/" target="_blank">
                <b-container class="d-flex w-100 justify-content-center align-items-center">
                    <b-row >
                        <b-col style="padding-right: 0px !important;"><font-awesome-icon icon="fa-solid fa-file-medical" style="color: #077cab; font-size: 1.3rem"/></b-col>
                        <b-col ><p  class="font-weight-light" style="font-size: 0.9rem; margin: 0px !important;">DIOT</p></b-col>
                    </b-row>
                </b-container>
            </a>
            </b-col>
            <b-col
              style="
                padding: 0px !important;
                cursor: pointer;
                padding-top: 7px;
                padding-bottom: 7px;
              "
              class="docs-link justify-content-center align-items-center"
            >
              <a href="https://mx-plus-docs.web.app/cartaporte/" target="_blank">
                <b-container class="d-flex w-100 justify-content-center align-items-center">
                    <b-row class="w-100">
                        <b-col class="d-flex w-100 justify-content-end" ><font-awesome-icon icon="fa-solid fa-truck-field" style="color: #077cab; font-size: 1.3rem"/></b-col>
                        <b-col style="padding-left: 0px !important;"><p  class="font-weight-light" style="font-size: 0.9rem; margin: 0px !important;">Carta Porte</p></b-col>
                    </b-row>
                </b-container>
            </a>
            </b-col>
            <b-col
              style="
                padding: 0px !important;
                cursor: pointer;
                padding-top: 7px;
                padding-bottom: 7px;
              "
              class="docs-link justify-content-center align-items-center"
            >
              <a href="https://mx-plus-docs.web.app/" target="_blank">
                <b-container class="d-flex w-100 justify-content-center align-items-center">
                    <b-row class="w-100">
                        <b-col class="d-flex w-100 justify-content-end" ><font-awesome-icon icon="fa-solid fa-globe-americas" style="color: #077cab; font-size: 1.3rem"/></b-col>
                        <b-col style="padding-left: 0px !important;"><p  class="font-weight-light" style="font-size: 0.9rem; margin: 0px !important;">Comercio Exterior</p></b-col>
                    </b-row>
                </b-container>
            </a>
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
  name: "DashboardComponent",
  components: { SideNavBar, TopNavBar, FooterFreebugVue, SpinnerVue },
};
</script>