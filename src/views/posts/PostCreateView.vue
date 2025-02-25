<template>
  <div>
    <h2>Write Post</h2>
    <hr class="my-4" />
    <postForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-dark" @click="goListPage">
          List
        </button>
        <button type="button" class="btn btn-primary" @click="save">
          Save
        </button>
      </template>
    </postForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/api/posts';
import postForm from '@/components/posts/PostForm.vue';
const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const goListPage = () => router.push({ name: 'PostList' });
const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
