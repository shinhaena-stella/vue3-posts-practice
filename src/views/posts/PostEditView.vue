<template>
  <div>
    <h2>Edit Post</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-primary" @click="edit">
          Edit
        </button>
      </template>
    </PostForm>
    <!-- <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType" /> -->
    <AppAlert :items="alerts"></AppAlert>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.error(error);
  }
};
const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};
fetchPost();

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    // router.push({ name: 'PostDetail', params: { id } });
    vAlert('Update complete!', 'success');
  } catch (error) {
    console.error(error);
    vAlert(error.message);
  }
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

// alert
// const showAlert = ref(false);
// const alertMsg = ref('');
// const alertType = ref('');

const alerts = ref([]);
const vAlert = (msg, type = 'error') => {
  alerts.value.push({ msg, type });
  // showAlert.value = true;
  // alertMsg.value = msg;
  // alertType.value = type;
  setTimeout(() => {
    // showAlert.value = false;
    alerts.value.shift();
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
