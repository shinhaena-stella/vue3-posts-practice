<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>

    <button class="btn btn-primary" @click="goAboutPage">Go About</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
  <hr class="my-4" />
  <!-- <h2>{{ $person.name }}</h2>
  <button class="btn btn-primary" @click="person.say">Click person</button> -->
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['apple', 'strawberry', 'grape', 'banana']);
// const person = inject('person');
//console.log('person.name: ', person.name);
</script>

<style lang="scss" scoped></style>
