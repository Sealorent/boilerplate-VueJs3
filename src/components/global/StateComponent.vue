<template>
  <div class="absolute z-10 flex items-center justify-center w-full h-screen bg-gray-400 bg-opacity-40" v-if="stateStore.state == true">
    <div v-if="stateStore.loading && stateStore.success == false">
        <span class="w-20 h-20 loading loading-infinity text-accent"></span>
    </div>
    <div v-if="stateStore.success" class="success">Success!</div>
    <div class="container w-1/2 p-5 bg-red-500 rounded-xl" v-if="stateStore.error">
          <div class="flex flex-col alert-error gap-y-4">
              <font-awesome-icon icon="exclamation-circle" class="text-white" size="xl" />
              <span class="text-center text-white font-mulish">{{ stateStore.error }}</span>
          </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'StateComponent',
  setup() {
    const stateStore = inject('state');
    return {
      stateStore,
    };
  },
});
</script>

<style>
.error {
  color: red;
}
.success {
  color: green;
}
</style>