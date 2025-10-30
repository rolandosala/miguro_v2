<template>
    <v-col cols="10" md="4" sm="4" color="surface-dark" class="px-5">
        <v-text-field append-inner-icon="mdi-magnify" density="compact" label="Search Dictionary" variant="solo"
            hide-details single-line @keyup.enter="searchDictionary" v-model="searchInput"></v-text-field>
    </v-col>
    <v-dialog max-width="500" v-model="dialog">
        <v-card title="Search Result">
            <v-divider></v-divider>
            <v-card-text>
                <!-- Loading State -->
                <div v-if="loading" class="text-center py-10">
                    <v-progress-circular indeterminate color="primary" size="50"></v-progress-circular>
                    <p class="mt-3">Fetching result...</p>
                </div>

                <!-- Result State -->
                <div v-else>
                    <v-row v-if="searchResult.word">
                        <v-col cols="6" class="text-center" variant="tonal">
                            <h1 class="text-h3">{{ searchResult.word }}</h1>
                            <h5>Furigana: {{ searchResult.furigana }}</h5>
                            <h5>Romaji: {{ searchResult.romaji }}</h5>
                        </v-col>
                        <v-col cols="6">
                            <h3>Level: {{ searchResult.level }}</h3>
                            <h4>Meaning: {{ searchResult.meaning }}</h4>
                        </v-col>
                    </v-row>
                    <p v-else>No result found.</p>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import api from '@/api/api'
const dialog = ref(false)
const searchInput = ref('')
const searchResult = ref(null)
const loading = ref(false)
const searchDictionary = async () => {
    try {
        if (searchInput.value == '') { return false }
        dialog.value = true
        loading.value = true
        searchResult.value = {}
        const decodedInput = decodeURIComponent(searchInput.value)
        const result = await api.getSearchDictionary(decodedInput)
        if (result.status == 200 && result.data.words?.length > 0) {
            searchResult.value = result.data.words[0]
        } else {
            searchResult.value = {}
        }
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false      // hide loading state after fetch
        searchInput.value = ''
    }
}
</script>