<template>
    <v-container class="">
        <v-row class="px-5 py-5 px-md-16 py-md-5">
            <v-col cols="12" md="12" sm="12">
                <h4 class="text-h5 font-weight-bold mb-4">Kanji List</h4>
                <hr>
            </v-col>
            <v-row>
                <v-col cols="6" md="2" sm="6" v-for="(data, index) in characters">
                    <v-card class="card" @click="viewCharacterInformation(index)">
                        <v-card-text class="text-center">
                            <h3 class="text-h2 mb-5">{{ data.kanji }}</h3>
                            <p>{{ data.onyumi }}, {{ data.konyumi }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
    <v-dialog max-width="500" v-model="dialog">
        <v-card title="Character Information">
            <v-card-text>
                <v-row>
                    <v-col cols="4" md="4" sm="12" class="text-center">
                        <h3 class="text-h1">{{ informationHolder.kanji }}</h3>
                    </v-col>
                    <v-col cols="8" md="8" sm="12">
                        <p><b>Meaning:</b> {{ informationHolder.meaning }}</p>
                        <p><b>Onyumi:</b> {{ informationHolder.onyumi }}</p>
                        <p><b>Konyumi:</b> {{ informationHolder.konyumi }} </p>
                        <p><b>Strokes:</b> {{ informationHolder.strokes }} strokes </p>
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                        <p><b>Sample Vocabulary</b></p>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>Kanji</th>
                                    <th>Kana</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, index) in informationHolder.sample_vocabs">
                                    <td>{{ data.kanji }}</td>
                                    <td>{{ data.kana }}</td>
                                    <td>{{ data.meaning }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref(false)
const characters = [
    {
        kanji: '四', meaning: 'Four', onyumi: 'Shi [し]', konyumi: 'Yo / Yu / Yon [よ/ゆ/よん]', strokes: '4', sample_vocabs: [
            { kanji: '四人', kana: 'よにん', meaning: 'four people' }
        ]
    },
    {
        kanji: '五', meaning: 'Five', onyumi: 'Go [ご] ', konyumi: 'Itsu  [いつ]', strokes: '4', sample_vocabs: [
            { kanji: '五月', kana: 'ごがつ', meaning: 'Month of May' }
        ]
    },
]
const informationHolder = ref()

const viewCharacterInformation = (id: number) => {
    dialog.value = true
    informationHolder.value = characters[id]
}
</script>
<style scoped>
.card:hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px gray, -1px -1px 5px;
    transition: .5s ease-in-out;
}
</style>