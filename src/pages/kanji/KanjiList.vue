<template>
    <v-container class="">
        <v-row class="px-5 py-5 px-md-16 py-md-5">
            <v-col cols="12" md="12" sm="12">
                <v-btn color="primary" @click="dialogAddNewCharacter = true">Upload</v-btn>
                <h4 class="text-h5 font-weight-bold mb-4">Kanji List</h4>
                <hr>
            </v-col>
            <v-row>
                <v-col cols="6" md="2" sm="6" v-for="(data, index) in kanjiData" :key="index">
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
                                    <td>
                                        <p>{{ data.kanji }}</p>
                                    </td>
                                    <td>
                                        <p>{{ data.kana }}</p>
                                    </td>
                                    <td>
                                        <p>{{ data.meaning }}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog max-width="300" v-model="dialogAddNewCharacter">
        <v-card title="New Character">
            <v-card-text>
                <v-row>
                    <v-col cols="4" md="7" sm="12">
                        <v-text-field label="Kanji" v-model="kanji" block />
                    </v-col>
                    <v-col cols="12" md="5" sm="12">
                        <v-text-field label="Strokes" v-model="strokes" block />
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                        <v-text-field label="Meaning" v-model="meaning" block />
                        <v-text-field label="Onyumi" v-model="onyumi" block />
                        <v-text-field label="Konyumi" v-model="konyumi" block />
                    </v-col>
                    <v-btn color="secondary" @click="dialogVocabularySample = true">Add Vocabulary</v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogVocabularySample" max-width="600">
        <v-card title="Vocabulary Sample">
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Kanji" v-model="vocab_kanji" block />
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Kana" v-model="vocab_kana" block />
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Meaning" v-model="vocab_meaning" block />
                    </v-col>
                    <v-btn color="success" @click="saveCharacter">Save Character</v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import api from '@/api/api';
const dialog = ref(false)
const dialogAddNewCharacter = ref(false)
const dialogVocabularySample = ref(false)
const kanji = ref('')
const meaning = ref('')
const onyumi = ref('')
const konyumi = ref('')
const strokes = ref('')
const vocab_kanji = ref('')
const vocab_kana = ref('')
const vocab_meaning = ref('')
const newCharacterArray = ref()
const kanjiData = ref([])
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
    informationHolder.value = kanjiData.value[id]
}

const saveCharacter = async () => {
    newCharacterArray.value = {
        kanji: kanji.value, meaning: meaning.value, onyumi: onyumi.value, konyumi: konyumi.value, strokes: strokes.value, sample_vocabs: [
            { kanji: vocab_kanji.value, kana: vocab_kana.value, meaning: vocab_meaning.value }
        ]
    }
    try {
        const result = await api.postAddNewKanjiCharacter(newCharacterArray.value);
        dialogVocabularySample.value = false;
        dialogAddNewCharacter.value = false;
        await fetchKanjiList();

    } catch (error) {
        console.error('Error uploading new kanji character:', error);
    }
}

const fetchKanjiList = async () => {
    try {
        const response = await api.getKanjiList();
        kanjiData.value = response.data;
    } catch (error) {
        console.error('Error fetching kanji list:', error);
    }
}
onMounted(async () => {
    await fetchKanjiList();
});

</script>
<style scoped>
.card:hover {
    cursor: pointer;
    box-shadow: 1px 1px 5px gray, -1px -1px 5px;
    transition: .5s ease-in-out;
}
</style>