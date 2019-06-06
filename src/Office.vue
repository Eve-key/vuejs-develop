<template>
  <div id="office">
    <TopPage>
    </TopPage>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TopPage from '@/components/office/TopPage.vue';

@Component({
  components: {
      TopPage,
  },
})
export default class Office extends Vue {

}
</script>

<style>
#office {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>