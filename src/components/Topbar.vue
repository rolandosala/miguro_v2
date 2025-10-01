<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Miguro</v-toolbar-title>
        <v-col cols="12" md="4" sm="6" class="d-flex justify-space-around" color="surface-dark">
            <v-card-text color="surface-light">
                <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                    label="Search Dictionary" variant="solo" hide-details single-line @click:append-inner="onClick"
                    width="400"></v-text-field>
            </v-card-text>
        </v-col>
        <v-col cols="12" md="2" sm="6" color="surface-dark">
            <v-btn prepend-icon="$vuetify" variant="tonal" block >
                AI Chatbot
            </v-btn>
        </v-col>
        <v-col cols="12" md="2" sm="6" color="surface-dark">
            <v-btn prepend-icon="$vuetify" variant="tonal" block >
                Community
            </v-btn>
        </v-col>
    </v-app-bar>
</template>
<script lang="ts" setup>
const drawer = ref(true)
const loaded = ref(false)
const loading = ref(false)
const onClick = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        loaded.value = true
    }, 2000)
}
</script>