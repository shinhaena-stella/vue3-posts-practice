<template>
  <AppModal v-model="show" title="Title">
    <template #default>
      <div class="row g-3">
        <div class="col-3" text-muted>Title</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3" text-muted>Content</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3" text-muted>Date</div>
        <div class="col-9">
          <!-- {{ $dayjs(createdAt).format('MM-DD-YYYY HH:mm:ss') }} not ideal -->
          {{ formattedDate }}
        </div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-secondary" @click="closeModal">
        Close
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
  createdAt: [String, Number],
});
const emit = defineEmits(['update:modelValue']);

const show = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const closeModal = () => {
  show.value = false;
};

const dayjs = inject('dayjs');
const formattedDate = computed(() =>
  dayjs(props.createdAt).format('MM-DD-YYYY HH:mm:ss'),
);
</script>

<style lang="scss" scoped></style>
