<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="text-muted">Cannot find the page!</div>
    {{ $route.params.pathMatch }}
    <div class="mt-4"></div>
    <RouterLink to="/">
      <button class="btn btn-primary">Home</button>
    </RouterLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
