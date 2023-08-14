<!-- components/GlobalAlert.vue -->

<template>
    <div class="absolute top-0 z-10 w-1/2" v-if="show">
        <div class="toast toast-center toast-middle">
            <div class="flex flex-row alert" :class="getType(type)" >
                <font-awesome-icon :icon="getIcon(type)" />
                <span class="font-mulish">{{ message }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useAlertStore } from '@/stores/global/alertStore.js';

export default {
  name: 'GlobalAlert',
  setup() {
    const alertStore = useAlertStore();

    const message = computed(() => alertStore.message);
    const type = computed(() => alertStore.type);
    const show = computed(() => alertStore.show);
    const icons = {
      success: 'check-circle',
      warning: 'triangle-exclamation',
      danger: 'exclamation-circle',
      info: 'info-circle',
    };

    const constType  = {
      success : 'alert-success',
      warning : 'alert-warning',
      danger : 'alert-error',
      info : 'alert-info'
    } 

    const getIcon = (alertType) => {
      return ['fas', icons[alertType]];
    };

    const getType = (alertType) => {
      return constType[alertType]
    };
    


    const hideAlert = () => {
      alertStore.clear();
    };

    return { message, type, show,getType, getIcon, hideAlert };
  },
};
</script>
