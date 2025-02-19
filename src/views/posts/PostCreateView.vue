<template>
  <div>
    <h2>Write Post</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">Contents</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          List
        </button>
        <button type="button" class="btn btn-primary" @click="save">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/api/posts';
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
