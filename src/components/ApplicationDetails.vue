<script setup>
const props = defineProps(["job"]);
</script>

<template>
  <div className="modal-overlay">
    <div class="modal">
      <h3>Application Details</h3>
      <div>
        <p>{{ props.job.company }}</p>
        <p>{{ props.job.title }}</p>
        <p>{{ props.job.url }}</p>
        <p>{{ props.job.pay }}</p>
        <p>{{ props.job.location }}</p>
        <p>{{ props.job.date }}</p>
        <p>{{ props.job.selected }}</p>
        <p>{{ props.job.notes }}</p>
        <p>{{ props.job.status }}</p>
      </div>
      <button @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000a9;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

h3 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
