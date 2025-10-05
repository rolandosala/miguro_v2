<template>
    <v-sheet class="px-16 py-10">
        <h4 class="text-h5 font-weight-bold">Mock Test</h4>
        <hr>
        <v-row>
            <v-col cols="12" md="3" sm="12" v-for="(data, index) in cards">
                <v-card class="mt-5" @click="getItem(index)">
                    <div class="d-flex justify-center flex-column align-center py-8 px-8">
                        <img :src="data.img" alt="" style="width: 70%;">
                        <h5 class="text-h6 font-weight-bold">{{ data.title }}</h5>
                    </div>
                </v-card>
            </v-col>

            <v-dialog v-for="data in cards" v-model="dialog" persistent max-width="500">
                <v-card title="Direction" v-if="direction">
                    <v-card-text>
                        <p>Mock Test 1: This mocktest consist of 5 questions per section and each covers the basic test
                            in the different areas in: </p>
                        <ul class="mx-10 mt-5">
                            <li>Grammar</li>
                            <li>Vocabulary</li>
                            <li>Translation</li>
                            <li>Listening</li>
                        </ul>
                        <v-spacer></v-spacer>
                        <v-divider></v-divider>
                        <v-col cols="12" md="12" sm="12" class="d-flex justify-end py-5">
                            <v-btn color="success" @click="startMockupTest">Start Test</v-btn>
                        </v-col>

                    </v-card-text>

                </v-card>
                <v-card title="Test I: Grammar" v-if="test_1">
                    <v-card-text>
                        <div class="d-flex justify-center align-center flex-column">
                            <h3>{{ count }} /{{ limit }}</h3>
                            <h5 class="text-h5 mt-8">{{ sentence }}</h5>
                            <!--  <h6>{{ kana }}</h6> -->
                            <v-col cols="12" md="12" sm="12" class="mt-5 d-flex flex-wrap">
                                <v-col cols="12" md="6" sm="12" v-for="(choice, index) in choices">
                                    <v-btn color="primary" @click="nextItem(choice)" :disabled="btnPreview" block>
                                        {{ choice }}
                                    </v-btn>
                                </v-col>
                            </v-col>
                        </div>
                        <div v-if="preview_answer" class="d-flex justify-end mt-8">
                            <v-btn color="success" v-if="btnPreview" @click="previewAnswer">Preview Answers</v-btn>
                            <v-btn color="red" @click="" v-else>Cancel Test</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card title="Test II: Translation" v-if="test_2">
                    <v-card-text>
                        <v-col cols="12" md="12" sm="12" class="d-flex flex-column align-center justify-center">
                            <v-col>
                                <h3>{{ count }} / {{ limit * 2 }}</h3>
                                <hr />
                                <h6 class="text-h6 font-weight-bold text-center mt-8" v-html="kana"></h6>
                                <!-- <p class="text-center">({{ romaji }})</p> -->
                                <v-text-field label="Your English Translation" v-model="user_answer" class="mt-5" />
                                <div class="d-flex justify-end">
                                    <!-- <v-btn color="primary" @click="" class="mx-3" v-if="count == limit">Submit
                                        Answers</v-btn> -->
                                    <v-btn color="primary" @click="submitTranslation" class="mx-3">Next</v-btn>

                                </div>
                            </v-col>
                        </v-col>
                        <div v-if="preview_answer" class="d-flex justify-end mt-8">
                            <v-btn color="success" v-if="btnPreview" @click="previewAnswer">Preview Answers</v-btn>
                            <v-btn color="red" @click="" v-else>Cancel Test</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogPreviewAnswer" max-width="600" persistent>
                <v-card title="Answer">
                    <v-divider></v-divider>
                    <v-card-text>
                        <div>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th>Sentence</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data, index) in preview_answer">
                                        <td>{{ index + 1 }}. {{ data.sentence }}</td>
                                        <td>{{ data.answer }}</td>
                                        <td>
                                            <b class="text-success" v-if="data.answer === data.userAnswer">{{
                                                data.userAnswer }}</b>
                                            <b class="text-red" v-else> {{ data.userAnswer }}</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                        <div class="d-flex justify-end mt-8">
                            <v-btn color="red" @click="reset">Close</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-sheet>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref(true)
const test_1 = ref(false)
const test_2 = ref(false)
const index = ref(0)
const correctCount = ref(0)
const count = ref(1)
const limit = ref(5)
const sentence = ref('')
const kana = ref('')
const answer = ref('')
const choices = ref([])
const user_answer = ref('')
const btnPreview = ref(false)
const preview_answer = ref([])
const cards = [
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'MockTest 1',
        phrase: [
            { japanese: 'デパート _______ 行きます。', kana: 'Depaato _____ ikimasu.', english: 'I will go to a department store.', answer: 'に', choices: ['に', 'を', 'で', 'が'] },
            { japanese: 'ケーキ _______  作ります。', kana: 'Keeki _____ tsukurimasu.', english: 'I will make a cake.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
            { japanese: '新聞 _______ 読みます。', kana: 'Shinbun _____ yomimasu.', english: 'I will read a newspaper.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
            { japanese: '映画 _______ 見ます。', kana: 'Eiga _____ mimasu.', english: 'I will watch a movie.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
            { japanese: '洋服 _______ 買います。', kana: 'Yoofuku _____ kaimasu.', english: 'I will buy clothes.', answer: 'を', choices: ['に', 'を', 'で', 'が'] },
        ],
        translations: [
            {
                japanese: "これは　りんごです。",
                romaji: "Kore wa ringo desu.",
                english: "This is an apple."
            },
            {
                japanese: "ねこが　います。",
                romaji: "Neko ga imasu.",
                english: "There is a cat."
            },
            {
                japanese: "わたしは　がくせいです。",
                romaji: "Watashi wa gakusei desu.",
                english: "I am a student."
            },
            {
                japanese: "いぬは　そとに　います。",
                romaji: "Inu wa soto ni imasu.",
                english: "The dog is outside."
            },
            {
                japanese: "でんしゃで　いきます。",
                romaji: "Densha de ikimasu.",
                english: "I go by train."
            },
            {
                japanese: "みずを　のみます。",
                romaji: "Mizu o nomimasu.",
                english: "I drink water."
            },
            {
                japanese: "きのう、えいがを　みました。",
                romaji: "Kinō, eiga o mimashita.",
                english: "I watched a movie yesterday."
            },
            {
                japanese: "としょかんは　どこですか？",
                romaji: "Toshokan wa doko desu ka?",
                english: "Where is the library?"
            },
            {
                japanese: "あさごはんを　たべましたか？",
                romaji: "Asagohan o tabemashita ka?",
                english: "Did you eat breakfast?"
            },
            {
                japanese: "にほんごを　べんきょうしています。",
                romaji: "Nihongo o benkyō shiteimasu.",
                english: "I am studying Japanese."
            }
        ]
    },
]
const dialog = ref(false)
const dialogPreviewAnswer = ref(false)

const startMockupTest = () => {
    direction.value = false
    test_1.value = true
}
const getItem = (id: number) => {
    index.value = id
    let random = Math.floor(Math.random() * cards[index.value].phrase.length);
    sentence.value = cards[index.value].phrase[random].japanese;
    choices.value = cards[index.value].phrase[random].choices;
    answer.value = cards[index.value].phrase[random].answer;
    kana.value = cards[index.value].translations[random].japanese
    dialog.value = true
}
const nextItem = (item: any) => {
    answer === item ? correctCount.value++ : ''
    preview_answer.value.push({ sentence: sentence.value, answer: answer.value, userAnswer: item })
    if (count.value === limit.value) {
        test_2.value = true
        test_1.value = false
        /*  btnPreview.value = true */
    } else {
        count.value++
        getItem(index.value)
    }

}
const submitTranslation = () => {
    if (count.value === limit.value * 2) {
        return alert('limit reached')
    } else {
        count.value++
        getItem(index.value)
    }

}
const reset = () => {
    dialogPreviewAnswer.value = false;
    dialog.value = false
    preview_answer.value = []
    count.value = 1
    btnPreview.value = false
    correctCount.value = 0

}
const previewAnswer = () => {
    dialog.value = false
    dialogPreviewAnswer.value = true
}


</script>
<style scoped>
.card:hover {
    box-shadow: 1px 1px 5px gray, -1px -1px 5px gray;
    transition: .3s ease-in;
    cursor: pointer;
}

h2 {
    font-size: 4em;
}
</style>
