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

            <v-dialog v-model="dialog" persistent max-width="500">
                <v-card :title="cardTitle">
                    <v-card-text>
                        <v-col cols="12" md="12" sm="12">
                            <div v-if="direction">
                                <p>Mock Test 1: This mocktest consist of 5 questions per section and each covers the
                                    basic
                                    test
                                    in the different areas in: </p>
                                <ul class="mx-10 mt-5">
                                    <li>Grammar</li>
                                    <li>Vocabulary</li>
                                    <li>Translation</li>
                                    <li>Listening</li>
                                </ul>
                            </div>
                            <div class="d-flex justify-center align-center flex-column" v-if="test_1">
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
                            <div cols="12" md="12" sm="12" class="d-flex flex-column" v-if="test_2">
                                <h3>{{ count }} / {{ limit * 2 }}</h3>
                                <hr />
                                <h6 class="text-h6 font-weight-bold text-center mt-8" v-html="kana"></h6>
                                <v-text-field label="Your English Translation" v-model="user_answer" class="mt-5"
                                    block />
                                <div class="d-flex justify-end">
                                    <v-btn color="primary" @click="submitTranslation" class="mx-3">Next</v-btn>
                                </div>
                            </div>
                            <div class="d-flex flex-column" v-if="test_3">
                                <h3>{{ count }} / {{ limit * 3 }}</h3>
                                <hr />
                                <div class="d-flex flex-column justify-center align-center">
                                    <audio id="birdAudio" :src="'/audio/' + audio + '.mp3'" type="audio/mp3" autoplay>
                                    </audio>
                                    <img src="/miguro_1.webp" alt="" style="width: 30%;">
                                    <v-btn onclick="document.getElementById('birdAudio').play()"
                                        color="primary">Play</v-btn>
                                </div>
                                <v-col cols="12" md="12" sm="12">
                                    <v-text-field label="Please type your answer.." v-model="user_listening_answer"
                                        class="mt-5" block />
                                </v-col>
                                <div class="d-flex justify-end">
                                    <v-btn color="primary" @click="submitListening" class="mx-3">Next</v-btn>
                                </div>
                            </div>
                            <div class="d-flex flex-column" v-if="test_result">
                                <hr />
                                <div class="py-10">
                                    <h4 :class="'text-center text-h4 text-' + remarks_color">{{ remarks }}</h4>
                                    <h4 class="text-center text-h5">{{ totalPercentage }}%</h4>
                                </div>
                                <div>
                                    <v-table>
                                        <thead>
                                            <tr>
                                                <th>Test</th>
                                                <th class="text-center">Score</th>
                                                <th class="text-center">Percent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Test I: Grammar</td>
                                                <td class="text-center">{{ grammarCorrectCount }}</td>
                                                <td class="text-center">{{ grammarArray.length }}</td>
                                            </tr>
                                            <tr>
                                                <td>Test II: Translation</td>
                                                <td class="text-center">{{ translationCorrectCount }}</td>
                                                <td class="text-center">{{ translationArray.length }}</td>
                                            </tr>
                                            <tr>
                                                <td>Test III: Listening</td>
                                                <td class="text-center">{{ listeningCorrectCount }}</td>
                                                <td class="text-center">{{ listeningArray.length }}</td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </div>
                            </div>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-divider></v-divider>
                        <v-col cols="12" md="12" sm="12" class="d-flex justify-end py-5">
                            <v-btn color="success" @click="startMockupTest" class="mx-3" v-if="direction">Start
                                Test</v-btn>
                            <v-btn color="success" v-if="btnPreview" @click="previewAnswer">Preview Answers</v-btn>
                            <v-btn color="primary" v-if="test_result" @click="tryAgain" class="mx-3">Try Again</v-btn>
                            <v-btn color="red" v-if="test_result" @click="exitTest">Exit Test</v-btn>
                            <v-btn color="red" @click="dialog = false" v-else>Cancel Test</v-btn>
                        </v-col>
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
const test_3 = ref(false)
const index = ref(0)
const correctCount = ref(0)
const count = ref(1)
const limit = ref(5)
const sentence = ref('')
const kana = ref('')
const audio = ref('')
const answer = ref('')
const choices = ref([])
const user_answer = ref('')
const user_listening_answer = ref('')
const btnPreview = ref(false)
const startTestBtn = ref(true)
const grammarCorrectCount = ref(0)
const translationCorrectCount = ref(0)
const listeningCorrectCount = ref(0)
const totalPercentage = ref(0)
const cardTitle = ref('Direction')
const test_result = ref(false)
const englishTranslation = ref('')
const grammarArray = ref([])
const translationArray = ref([])
const listeningArray = ref([])
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
        ],
        listening: [
            {
                audio: "Please",
                answer: "Please"
            },
            {
                audio: "Good Afternoon",
                answer: "Good Afternoon"
            },
            {
                audio: "Good Evening",
                answer: "Good Evening"
            },
            {
                audio: "Good Morning",
                answer: "Good Morning"
            },
            {
                audio: "Goodbye",
                answer: "Goodbye"
            },
            {
                audio: "Thank you",
                answer: "Thank you"
            },
            {
                audio: "Thats right",
                answer: "Thats right"
            },
            {
                audio: "Welcome",
                answer: "Your Welcome"
            },
        ]
    },
]
const dialog = ref(false)
const dialogPreviewAnswer = ref(false)
const remarks = ref('')
const remarks_color = ref('')
const startMockupTest = () => {
    direction.value = false
    test_1.value = true
    cardTitle.value = 'Test I: Grammar'
    startTestBtn.value = false
}
const getItem = (id: number) => {
    index.value = id
    let random = Math.floor(Math.random() * cards[index.value].phrase.length);
    sentence.value = cards[index.value].phrase[random].japanese;
    choices.value = cards[index.value].phrase[random].choices;
    answer.value = cards[index.value].phrase[random].answer;
    /* kana.value = cards[index.value].translations[random].japanese
    englishTranslation.value = cards[index.value].translations[random].english */
    audio.value = cards[index.value].listening[random].audio
    test_1.value == true || test_2.value == true || test_3.value == true || test_result.value == true ? direction.value = false : direction.value = true
    test_result.value = false
    dialog.value = true
}
const shuffledTranslations = ref([]);  // store shuffled order
const currentIndex = ref(0);           // track current item

const shuffleArray = (array) => {
    // Fisher–Yates shuffle algorithm
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const getTranslationItem = () => {
    const translations = cards[index.value].translations;

    // If no shuffled set yet, or finished all — reshuffle
    if (
        shuffledTranslations.value.length === 0 ||
        currentIndex.value >= shuffledTranslations.value.length
    ) {
        shuffledTranslations.value = shuffleArray(translations);
        currentIndex.value = 0;
    }

    // Get the next translation
    const item = shuffledTranslations.value[currentIndex.value];

    // Assign to reactive variables
    kana.value = item.japanese;
    englishTranslation.value = item.english;

    // Move to next for next call
    currentIndex.value++;
};
const nextItem = (item: any) => {
    answer.value === item ? grammarCorrectCount.value++ : ''
    grammarArray.value.push({ number: count.value, sentence: sentence.value, userAnswer: item })
    if (count.value === limit.value) {
        test_2.value = true
        test_1.value = false
        cardTitle.value = 'Test II: Translation'
        count.value++
        getTranslationItem()
    } else {
        count.value++
        getItem(index.value)

    }
}
const normalizeText = (text) => {
    return text
        .toLowerCase()
        .replace(/’/g, "'")                 // normalize apostrophes
        .replace(/\b(that's)\b/g, 'that is')
        .replace(/\b(there's)\b/g, 'there is')
        .replace(/\b(it's)\b/g, 'it is')
        .replace(/\b(you're)\b/g, 'you are')
        .replace(/\b(I'm)\b/g, 'I am')
        .replace(/[.,!?;:]/g, '')           // remove punctuation
        .replace(/\s+/g, ' ')               // normalize spacing
        .trim();
};
const synonyms = {
    'a': ['one'],
    'apple': ['fruit'],
    'cat': ['kitty', 'kitten'],
    'there is': ['there’s', 'there exists'],
    'this is': ['that is']
};
// simple function to replace synonyms with their base word
const replaceSynonyms = (text) => {
    let replaced = text;
    for (const [base, syns] of Object.entries(synonyms)) {
        for (const s of syns) {
            const pattern = new RegExp(`\\b${s}\\b`, 'g');
            replaced = replaced.replace(pattern, base);
        }
    }
    return replaced;
};

const isSimilar = (a: any, b: any) => {
    const wordsA = a.split(' ');
    const wordsB = b.split(' ');
    const matches = wordsA.filter(w => wordsB.includes(w)).length;
    const ratio = matches / Math.max(wordsA.length, wordsB.length);
    return ratio >= 0.8; // threshold for "close enough"
};

const submitTranslation = () => {
    let correct = normalizeText(englishTranslation.value);
    let user = normalizeText(user_answer.value);
    translationArray.value.push({ number: count.value, kana: kana.value, english: englishTranslation.value, userAnswer: user_answer.value })
    // apply synonym replacement
    correct = replaceSynonyms(correct);
    user = replaceSynonyms(user);

    // check equality or similarity
    if (correct === user || isSimilar(correct, user)) {
        translationCorrectCount.value++;
    }

    if (count.value === limit.value * 2) {
        test_2.value = false
        test_3.value = true
        cardTitle.value = 'Test III: Listening'
        count.value++
    } else {
        count.value++
 /*        getItem(index.value) */
        getTranslationItem()
        user_answer.value = ''
    }
};
/* const submitTranslation = () => {
    englishTranslation.value.toLowerCase() === user_answer.value.toLowerCase() ? translationCorrectCount.value++ : ''
    translationArray.value.push({ number: count.value, kana: kana.value, english: englishTranslation.value, userAnswer: user_answer.value })
    if (count.value === limit.value * 2) {
        test_2.value = false
        test_3.value = true
        cardTitle.value = 'Test III: Listening'
        count.value++
    } else {
        count.value++
        getItem(index.value)
        user_answer.value = ''
    }
} */
const submitListening = () => {
    listeningArray.value.push({ number: count, userAnswer: user_listening_answer.value, correctAnswer: audio.value })
    user_listening_answer.value.toLowerCase() === audio.value.toLowerCase() ? listeningCorrectCount.value++ : ''
    if (count.value === limit.value * 3) {
        cardTitle.value = 'Test Result'
        test_result.value = true
        test_3.value = false
        totalPercentage.value = Math.round(((grammarCorrectCount.value + translationCorrectCount.value + listeningCorrectCount.value) / count.value) * 100)
        remarks.value = totalPercentage.value < 50 ? 'Failed' : 'Passed'
        remarks_color.value = totalPercentage.value < 50 ? 'red' : 'success'
    } else {
        count.value++
        getItem(index.value)
        user_listening_answer.value = ''
    }
}
const exitTest = () => {
    count.value = 1
    test_result.value = false
    dialog.value = false
    grammarCorrectCount.value = 0
    translationCorrectCount.value = 0
    listeningCorrectCount.value = 0
    totalPercentage.value = 0
    grammarArray.value = []
    listeningArray.value = []
    translationArray.value = []
}
const tryAgain = () => {
    count.value = 1
    test_result.value = false
    test_1.value = true
    grammarCorrectCount.value = 0
    translationCorrectCount.value = 0
    listeningCorrectCount.value = 0
    totalPercentage.value = 0
    grammarArray.value = []
    listeningArray.value = []
    translationArray.value = []
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
