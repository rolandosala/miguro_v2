<template>
    <v-sheet class="px-16 py-10">
        <h4 class="text-h5 font-weight-bold">Grammar Exercise</h4>
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
                <v-card title="Grammar Exercise">
                    <v-card-text>
                        <div class="d-flex justify-center align-center flex-column">
                            <h3>{{ count }} /{{ limit }}</h3>
                            <h5 class="text-h5 mt-8" v-html="sentence"></h5>
                            <h6>{{ kana }}</h6>
                            <v-col cols="12" md="12" sm="12" class="mt-5 d-flex flex-wrap">
                                <v-col cols="12" md="6" sm="12" v-for="(choice, index) in choices">
                                    <v-btn color="primary" @click="nextItem(choice)" :disabled="btnPreview" block>
                                        {{ choice }}
                                    </v-btn>
                                </v-col>
                            </v-col>
                        </div>
                        <v-divider></v-divider>
                        <div v-if="preview_answer" class="d-flex justify-end mt-8">
                            <v-btn color="success" v-if="btnPreview" @click="previewAnswer">Preview Answers</v-btn>
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
                                        <td>{{ index + 1 }}. <span v-html="data.sentence"></span></td>
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

const index = ref(0)
const correctCount = ref(0)
const count = ref(1)
const limit = ref(10)
const sentence = ref('')
const kana = ref('')
const answer = ref('')
const choices = ref([])
const user_answer = ref('')
const btnPreview = ref(false)
const preview_answer = ref([])
const cards = [
    {
        "id": "cardOne",
        "img": "/miguro_1.webp",
        "title": "Grammar 1",
        "phrase": [
            {
                "japanese": "デパート _______ <ruby>行<rt>い</rt></ruby>きます。",
                "kana": "Depaato _____ ikimasu.",
                "english": "I will go to a department store.",
                "answer": "に",
                "choices": ["に", "を", "で", "が"]
            },
            {
                "japanese": "ケーキ _______ <ruby>作<rt>つく</rt></ruby>ります。",
                "kana": "Keeki _____ tsukurimasu.",
                "english": "I will make a cake.",
                "answer": "を",
                "choices": ["に", "を", "で", "が"]
            },
            {
                "japanese": "<ruby>新聞<rt>しんぶん</rt></ruby> _______ <ruby>読<rt>よ</rt></ruby>みます。",
                "kana": "Shinbun _____ yomimasu.",
                "english": "I will read a newspaper.",
                "answer": "を",
                "choices": ["に", "を", "で", "が"]
            },
            {
                "japanese": "<ruby>映画<rt>えいが</rt></ruby> _______ <ruby>見<rt>み</rt></ruby>ます。",
                "kana": "Eiga _____ mimasu.",
                "english": "I will watch a movie.",
                "answer": "を",
                "choices": ["に", "を", "で", "が"]
            },
            {
                "japanese": "<ruby>洋服<rt>ようふく</rt></ruby> _______ <ruby>買<rt>か</rt></ruby>います。",
                "kana": "Yoofuku _____ kaimasu.",
                "english": "I will buy clothes.",
                "answer": "を",
                "choices": ["に", "を", "で", "が"]
            }
        ]
    },
    {
        "id": "cardTwo",
        "img": "/miguro_1.webp",
        "title": "Grammar 2",
        "phrase": [
            {
                "japanese": "<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby> _______ <ruby>行<rt>い</rt></ruby>きました。",
                "kana": "Gakkou _____ ikimashita.",
                "english": "I went to school.",
                "answer": "へ",
                "choices": ["を", "が", "へ", "と"]
            },
            {
                "japanese": "ジュース ____ <ruby>飲<rt>の</rt></ruby>みます。",
                "kana": "Juusu _____ nomimasu.",
                "english": "I drink juice.",
                "answer": "を",
                "choices": ["で", "を", "に", "が"]
            },
            {
                "japanese": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby> _______ <ruby>話<rt>はな</rt></ruby>しました。",
                "kana": "Sensei _____ hanashimashita.",
                "english": "I talked with the teacher.",
                "answer": "と",
                "choices": ["と", "を", "に", "が"]
            },
            {
                "japanese": "<ruby>図<rt>と</rt></ruby><ruby>書<rt>しょ</rt></ruby><ruby>館<rt>かん</rt></ruby> _______ <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました。",
                "kana": "Toshokan _____ hon o yomimashita.",
                "english": "I read a book at the library.",
                "answer": "で",
                "choices": ["に", "を", "が", "で"]
            },
            {
                "japanese": "<ruby>林<rt>りん</rt></ruby><ruby>檎<rt>ご</rt></ruby> _______ <ruby>一<rt>ひと</rt></ruby>つ <ruby>買<rt>か</rt></ruby>いました。",
                "kana": "Ringo _____ hitotsu kaimashita.",
                "english": "I bought one apple.",
                "answer": "を",
                "choices": ["に", "が", "を", "へ"]
            }
        ]
    },
    {
        "id": "cardThree",
        "img": "/miguro_1.webp",
        "title": "Grammar 3",
        "phrase": [
            {
                "japanese": "<ruby>日本<rt>にほん</rt></ruby> ____ <ruby>行<rt>い</rt></ruby>きます。",
                "kana": "Nihon _____ ikimasu.",
                "english": "I will go to Japan.",
                "answer": "へ",
                "choices": ["を", "で", "へ", "が"]
            },
            {
                "japanese": "<ruby>学校<rt>がっこう</rt></ruby> ____ <ruby>勉強<rt>べんきょう</rt></ruby>します。",
                "kana": "Gakkou _____ benkyou shimasu.",
                "english": "I study at school.",
                "answer": "で",
                "choices": ["に", "で", "を", "が"]
            },
            {
                "japanese": "<ruby>明日<rt>あした</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby> ____ <ruby>会<rt>あ</rt></ruby>います。",
                "kana": "Ashita, tomodachi _____ aimasu.",
                "english": "I will meet a friend tomorrow.",
                "answer": "に",
                "choices": ["が", "と", "に", "で"]
            },
            {
                "japanese": "<ruby>家<rt>いえ</rt></ruby> ____ テレビを <ruby>見<rt>み</rt></ruby>ます。",
                "kana": "Ie _____ terebi o mimasu.",
                "english": "I watch TV at home.",
                "answer": "で",
                "choices": ["に", "を", "で", "が"]
            },
            {
                "japanese": "<ruby>先生<rt>せんせい</rt></ruby> ____ <ruby>質問<rt>しつもん</rt></ruby>します。",
                "kana": "Sensei _____ shitsumon shimasu.",
                "english": "I ask the teacher a question.",
                "answer": "に",
                "choices": ["を", "で", "が", "に"]
            }
        ]
    },
    {
        "id": "cardFour",
        "img": "/miguro_1.webp",
        "title": "Grammar 4",
        "phrase": [
            {
                "japanese": "<ruby>本<rt>ほん</rt></ruby> ____ 読みます。",
                "kana": "Hon _____ yomimasu.",
                "english": "I read a book.",
                "answer": "を",
                "choices": ["が", "を", "に", "で"]
            },
            {
                "japanese": "<ruby>映画<rt>えいが</rt></ruby> ____ 見ます。",
                "kana": "Eiga _____ mimasu.",
                "english": "I watch a movie.",
                "answer": "を",
                "choices": ["に", "で", "を", "が"]
            },
            {
                "japanese": "<ruby>公園<rt>こうえん</rt></ruby> ____ 散歩します。",
                "kana": "Kōen _____ sanpo shimasu.",
                "english": "I take a walk in the park.",
                "answer": "を",
                "choices": ["で", "が", "を", "に"]
            },
            {
                "japanese": "<ruby>車<rt>くるま</rt></ruby> ____ 運転します。",
                "kana": "Kuruma _____ untenshimasu.",
                "english": "I drive a car.",
                "answer": "を",
                "choices": ["に", "を", "が", "で"]
            },
            {
                "japanese": "<ruby>先生<rt>せんせい</rt></ruby> ____ 会います。",
                "kana": "Sensei _____ aimasu.",
                "english": "I meet the teacher.",
                "answer": "に",
                "choices": ["が", "に", "を", "で"]
            }
        ]
    },
    {
        "id": "cardFive",
        "img": "/miguro_1.webp",
        "title": "Grammar 5",
        "phrase": [
            {
                "japanese": "<ruby>学校<rt>がっこう</rt></ruby> ____ 行きます。",
                "kana": "Gakkō _____ ikimasu.",
                "english": "I go to school.",
                "answer": "に",
                "choices": ["を", "に", "が", "で"]
            },
            {
                "japanese": "<ruby>友達<rt>ともだち</rt></ruby> ____ 会います。",
                "kana": "Tomodachi _____ aimasu.",
                "english": "I meet a friend.",
                "answer": "に",
                "choices": ["で", "を", "に", "が"]
            },
            {
                "japanese": "<ruby>お茶<rt>おちゃ</rt></ruby> ____ 飲みます。",
                "kana": "Ocha _____ nomimasu.",
                "english": "I drink tea.",
                "answer": "を",
                "choices": ["に", "が", "を", "で"]
            },
            {
                "japanese": "<ruby>店<rt>みせ</rt></ruby> ____ 買い物をします。",
                "kana": "Mise _____ kaimono o shimasu.",
                "english": "I do shopping at the store.",
                "answer": "で",
                "choices": ["に", "で", "を", "が"]
            },
            {
                "japanese": "<ruby>本屋<rt>ほんや</rt></ruby> ____ 行きました。",
                "kana": "Hon'ya _____ ikimashita.",
                "english": "I went to the bookstore.",
                "answer": "に",
                "choices": ["が", "に", "を", "で"]
            }
        ]
    }
]
const dialog = ref(false)
const dialogPreviewAnswer = ref(false)

const getItem = (id: number) => {
    index.value = id
    let random = Math.floor(Math.random() * cards[index.value].phrase.length);
    sentence.value = cards[index.value].phrase[random].japanese;
    choices.value = cards[index.value].phrase[random].choices;
    answer.value = cards[index.value].phrase[random].answer;
    dialog.value = true
}
const nextItem = (item: any) => {
    answer === item ? correctCount.value++ : ''
    preview_answer.value.push({ sentence: sentence.value, answer: answer.value, userAnswer: item })
    if (count.value === limit.value) {
        btnPreview.value = true
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
