<template>
  <ul>
    <li v-for="(item, index) of listItems" :key="index">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-component-decorator';

@Component
export default class Navigator extends Vue {
  listItems: { name: string, link: string }[] = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    }
  ];
}
</script>

<style scoped>

</style>
