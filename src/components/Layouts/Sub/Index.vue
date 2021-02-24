<template>
  <div>
    <sub-header/>
    <sub-navigator/>
    <slot/>
    <sub-footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-component-decorator';
import SubHeader from '@/components/Layouts/Sub/Header.vue';
import SubFooter from '@/components/Layouts/Sub/Footer.vue';
import SubNavigator from '@/components/Layouts/Sub/Navigator.vue';

@Component({
  components: {
    SubHeader, SubFooter, SubNavigator
  }
})
export default class Index extends Vue {

}
</script>

<style scoped>

</style>
