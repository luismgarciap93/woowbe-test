<template>
  <div>
    <span class="notification-badge">
      <font-awesome-icon :icon="['fas', 'bell']" size="xl" />
      <span class="badge bg-info rounded-pill">{{ notifications }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    notifications: {
      type: Number
    }
  }
}
</script>

<style>
.notification-badge {
  position: relative;
  margin: 0 1rem;
}

.notification-badge .badge {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 0.6rem;
}
</style>
