<template>
  <div>
    <main-header/>
    <main-navigator/>
    <slot/>
    <main-footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-component-decorator';
import MainHeader from '@/components/Layouts/Main/Header.vue';
import MainFooter from '@/components/Layouts/Main/Footer.vue';
import MainNavigator from '@/components/Layouts/Main/Navigator.vue';

@Component({
  components: {
    MainHeader, MainFooter, MainNavigator
  }
})
export default class Index extends Vue {

}
</script>

<style scoped>

</style>
