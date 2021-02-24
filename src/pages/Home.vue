<template>
  <main-layout>
    아주 간단한 레이아웃
  </main-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-component-decorator';
import MainLayout from '@/components/Layouts/Main/Index.vue';

@Component({
  components: {
    MainLayout
  }
})
export default class Home extends Vue {

}
</script>

<style scoped>

</style>
