<script >
export default {
    name: 'PopupModal',

    data: () => ({
        isVisible: false,
    }),

    methods: {
        open() {
            this.isVisible = true
        },

        close() {
            this.isVisible = false
        },
    },
}
</script>

<template>
  <transition name="fade">
    <div class="popup__delete-confirm" v-if="isVisible">
      <div class="popup__inner">
        <p>Are you sure</p>
        <hr>
        <button class="no" @click="TogglePopup()">No</button>
        <button class="yes">Yes</button>
      </div>
    </div>
  </transition>
</template>
