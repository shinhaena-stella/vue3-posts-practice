<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('MM-DD-YYYY HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">Previous</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">Next</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">List</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          Edit
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';
import { deletePost } from '@/api/posts';

const props = defineProps({
  id: [String, Number],
});

const router = useRouter();
const post = ref({});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};
const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};
fetchPost();

const remove = async () => {
  try {
    if (confirm('Do you want to delete this?') === false) {
      return;
    }
    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
