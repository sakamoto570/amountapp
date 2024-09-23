<!-- src/components/LoadingModal.vue -->
<template>
  <div class="loading-overlay">
    <div class="loading-modal">
      <div class="spinner"></div>
      <p>通信中</p>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     isLoading: {
  //       type: Boolean,
  //       required: true
  //     }
  //   }
};
</script>

<style scoped>
p {
  color: #fff;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* .loading-modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
} */

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
