<template>
  <sub-layout>
    아주 간단한 레이아웃의 서브페이지
  </sub-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-component-decorator';
import SubLayout from '@/components/Layouts/Sub/Index.vue';

@Component({
  components: {
    SubLayout
  }
})
export default class About extends Vue {

}
</script>

<style scoped>

</style>
