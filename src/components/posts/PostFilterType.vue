<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          :value="title"
          @input="$emit('update:title', $event.target.value)"
          type="text"
          class="form-control"
          placeholder="Search by Title"
        />
      </div>
      <div class="col-3">
        <select
          :value="limit"
          @change="$emit('update:limit', +$event.target.value)"
          class="form-select"
        >
          <option value="3">3 Posts</option>
          <option value="6">6 Posts</option>
          <option value="9">9 Posts</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  limit: Number,
});
defineEmits(['update:title', 'update:limit']);
</script>

<style lang="scss" scoped></style>
