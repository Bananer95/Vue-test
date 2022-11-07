<script setup lang="ts"></script>

<template>
  <div class="background">
    <div class="modal">
      <div class="modal-header"><slot name="modal-header"></slot></div>
      <div class="modal-body"><slot name="modal-body"></slot></div>
      <div class="modal-footer"><slot name="modal-footer"></slot></div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: #fff;
}
.modal-header {
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  background-color: rgb(228, 228, 228);
}
.modal-body {
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
}
.modal-footer {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 40%;
}
</style>
