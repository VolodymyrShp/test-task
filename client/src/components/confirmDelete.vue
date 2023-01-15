<script>
import PopupModal from './PopupModal.vue'
export default {
    name: 'ConfirmDelete',
    components: { PopupModal },
    data: () => ({
        message: 'Are you sure', // Main text content
        okButton: 'Yes', // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: 'No', // text for cancel button

        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            this.title = opts.title
            this.message = opts.message
            this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }

            this.$refs.popup.open()
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },
        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
        },
    },
}
</script>
<template>
    <popup-modal ref="popup">
        <p>{{ message }}</p>
        <hr>
        <div class="btns">
            <button class="cancel-btn" @click="_cancel">{{ cancelButton }}</button>
            <span class="ok-btn" @click="_confirm">{{ okButton }}</span>
        </div>
    </popup-modal>
</template>