<template>
    <v-card :title="title" flat>
        <v-table title="table">
            <tbody>
                <tr v-for="item in characters">
                    <td v-for="char in item.character" :key="char" @click="toggleDialog(char)"
                        class="cursor-pointer hover:bg-red-100">{{ char }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
    <v-dialog v-model="dialog" max-width="400">
        <v-card class="pa-5">
            <v-card-title>Character Information</v-card-title>
            <v-row>
                <v-col cols="12" md="8" sm="6">
                    <v-card variant="outlined">
                        <v-card-text>
                            <p class="text-h1 font-weight-bold text-center">{{ splitChar(selectedChar).kana }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                    Romaji:
                    <p class="text-h4">{{ splitChar(selectedChar).romaji }}</p>
                </v-col>
            </v-row>
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const dialog = ref(false)
const selectedChar = ref('')
const props = defineProps<{
    characters: Array<{ character: string[] }>
    title: string
}>()
const toggleDialog = (char: string) => {
    dialog.value = true
    selectedChar.value = char
}
const splitChar = (str: string) => {
    const match = str.match(/^(.+?)\s*\((.+)\)$/);
    if (match) {
        return { kana: match[1], romaji: match[2] };
    }
    return { kana: str, romaji: "" };
};
</script>