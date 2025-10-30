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
                <v-col cols="12" md="12" sm="12" v-if="kanjiData.length === 0" class="d-flex flex-row flex-wrap justify-center align-center">
                    <v-col cols="12" md="12" sm="12" class="mx-auto">
                        <p>Fetching Kanji List...</p>
                    </v-col>
                    <v-col cols="12" md="3" sm="12" class="mx-auto">
                        <v-skeleton-loader color="secondary" type="card" :loading="kanjiLoading"></v-skeleton-loader>
                    </v-col>
                    <v-col cols="12" md="3" sm="12" class="mx-auto">
                        <v-skeleton-loader color="secondary" type="card" :loading="kanjiLoading"></v-skeleton-loader>
                    </v-col>
                    <v-col cols="12" md="3" sm="12" class="mx-auto">
                        <v-skeleton-loader color="secondary" type="card" :loading="kanjiLoading"></v-skeleton-loader>
                    </v-col>
                    <v-col cols="12" md="3" sm="12" class="mx-auto">
                        <v-skeleton-loader color="secondary" type="card" :loading="kanjiLoading"></v-skeleton-loader>
                    </v-col>
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
                <v-row v-for="(item, index) in vocabList" :key="index">
                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Kanji" v-model="item.kanji" block />
                    </v-col>

                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Kana" v-model="item.kana" block />
                    </v-col>

                    <v-col cols="12" md="4" sm="12">
                        <v-text-field label="Meaning" v-model="item.meaning" block />
                    </v-col>
                </v-row>
                <v-btn color="success" :loading="loading" @click="saveCharacter">
                    {{ loading ? 'Saving Data...' : 'Save Character' }}
                </v-btn>
                <v-btn color="primary" @click="addRow">New Row</v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import api from '@/api/api';
const kanjiLoading = ref(false);
const dialog = ref(false)
const dialogAddNewCharacter = ref(false)
const dialogVocabularySample = ref(false)
const kanji = ref('')
const meaning = ref('')
const onyumi = ref('')
const konyumi = ref('')
const strokes = ref('')
const newCharacterArray = ref()
const kanjiData = ref([])
const informationHolder = ref()
const loading = ref(false)
const vocabList = ref([
    { kanji: "", kana: "", meaning: "" }, // start with one row
]);
const addRow = () => {
    vocabList.value.push({ kanji: "", kana: "", meaning: "" });
};


const viewCharacterInformation = (id: number) => {
    dialog.value = true
    informationHolder.value = kanjiData.value[id]
}

const saveCharacter = async () => {
    newCharacterArray.value = {
        kanji: kanji.value, meaning: meaning.value, onyumi: onyumi.value, konyumi: konyumi.value, strokes: strokes.value, sample_vocabs: vocabList.value
    }
    try {
        loading.value = true
        const result = await api.postAddNewKanjiCharacter(newCharacterArray.value);
        dialogVocabularySample.value = false;
        dialogAddNewCharacter.value = false;
        await fetchKanjiList();
    } catch (error) {
        console.error('Error uploading new kanji character:', error);
    } finally {
        loading.value = false;
    }
}

const fetchKanjiList = async () => {
    try {
        kanjiLoading.value = true;
        const response = await api.getKanjiList();
        kanjiData.value = response.data;
    } catch (error) {
        console.error('Error fetching kanji list:', error);
    } finally {
        kanjiLoading.value = false;
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