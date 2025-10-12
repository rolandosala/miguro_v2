<template>
    <v-col cols="10" md="4" sm="4" color="surface-dark" class="px-5">
        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search Dictionary" variant="solo"
            hide-details single-line @keyup.enter="alertMessage" v-model="searchInput"></v-text-field>
    </v-col>
    <v-dialog max-width="800" v-model="dialog">
        <v-card title="Search Result">

        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const dialog = ref(false)
const searchInput = ref('')
const alertMessage = () => {
    if (searchInput.value == '') { return false }
    dialog.value = true
}
</script>