<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-16 py-10">
                <h4 class="text-h5 font-weight-bold">Flashcards Exercise</h4>
                <hr>
                <v-row>
                    <v-col cols="12" md="3" sm="4" v-for="(data, index) in cards">
                        <v-card class="mt-10" @click="get_Index(index)">
                            <div class="d-flex justify-center flex-column align-center py-8 px-8">
                                <img :src="data.img" alt="" style="width: 70%;">
                                <h5 class="text-h6 font-weight-bold">{{ data.title }}</h5>
                            </div>
                        </v-card>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="400" persistent>
        <v-card title="">
            <v-card-text>
                <v-col cols="12" md="12" sm="12" class="d-flex flex-column align-center justify-center">
                    <v-col v-if="!disable_choices">
                        <h1 class="text-h3 font-weight-bold text-center">{{ kanji }}</h1>
                        <v-col>
                            <h5 class="text-h6 font-weight-bold text-center">{{ time }}</h5>
                            <h6 class="text-h6 font-weight-bold text-center">
                                Correct: {{ correct_answer }} |
                                Wrong:{{ wrong_answer }}</h6>
                        </v-col>

                        <v-col cols="12" md="12" sm="12">
                            <v-btn color="primary" v-for="ch in choices" @click="checkAnswer(ch)" block class="mt-2">{{
                                ch }}</v-btn>
                        </v-col>
                    </v-col>
                    <div v-else class="d-flex justify-content-center align-items-center flex-column">
                        <p style="font-size: 3em;">Times up</p>
                        <v-btn color="success" @click="closeQuizDialog">Preview Answers</v-btn>
                    </div>
                </v-col>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogPreview" max-width="600" persistent>
        <v-card title="Previewed Answer" class="px-2 py-2">

            <v-table responsive>
                <thead>
                    <tr style="text-align: center">
                        <th>Character</th>
                        <th>Meaning</th>
                        <th>Correct Answer</th>
                        <th>Your Answer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in preview_answers">
                        <td>{{ data.kanji }}</td>
                        <td>{{ data.meaning }}</td>
                        <td>{{ data.correct_answer }}</td>
                        <td>
                            <i class="text-success" v-if="data.correct_answer === data.user_answer">{{
                                data.user_answer }}</i>
                            <i class="text-red" v-else>{{ data.user_answer }}</i>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <div class="mt-5 d-flex justify-end">
                <v-btn color="primary" @click="tryAgain" class="mx-3">Try Again</v-btn>
                <v-btn color="red" @click="closePreviewDialog">Close</v-btn>
            </div>

        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
let index = 0
const kanji = ref('')
const choices = ref([])
const difficulty = ref('')
const meaning = ref('')
let correct_answer = 0
let wrong_answer = 0
const user_answer = ref('')
let rand = 0
let time = ref(60)
let default_time = 60
let intervalTime = null
const preview_answer = ref(false)
const disable_choices = ref(false)
const dialog = ref(false)
const dialogPreview = ref(false)
const cards = [
    {
        id: 'cardOne', img: '/miguro_2.webp', title: 'Hiragana',
        characters: [
            { character: "あ", meaning: "a", choices: ["a", "i", "u", "e"], correctAnswer: "a" },
            { character: "い", meaning: "i", choices: ["i", "a", "e", "o"], correctAnswer: "i" },
            { character: "う", meaning: "u", choices: ["u", "o", "i", "a"], correctAnswer: "u" },
            { character: "え", meaning: "e", choices: ["e", "i", "a", "o"], correctAnswer: "e" },
            { character: "お", meaning: "o", choices: ["o", "a", "u", "e"], correctAnswer: "o" },

            { character: "か", meaning: "ka", choices: ["ka", "ke", "ko", "ku"], correctAnswer: "ka" },
            { character: "き", meaning: "ki", choices: ["ki", "ka", "ku", "ke"], correctAnswer: "ki" },
            { character: "く", meaning: "ku", choices: ["ku", "ko", "ki", "ka"], correctAnswer: "ku" },
            { character: "け", meaning: "ke", choices: ["ke", "ka", "ko", "ki"], correctAnswer: "ke" },
            { character: "こ", meaning: "ko", choices: ["ko", "ku", "ke", "ka"], correctAnswer: "ko" },

            { character: "さ", meaning: "sa", choices: ["sa", "shi", "se", "so"], correctAnswer: "sa" },
            { character: "し", meaning: "shi", choices: ["shi", "sa", "se", "so"], correctAnswer: "shi" },
            { character: "す", meaning: "su", choices: ["su", "so", "sa", "shi"], correctAnswer: "su" },
            { character: "せ", meaning: "se", choices: ["se", "shi", "so", "su"], correctAnswer: "se" },
            { character: "そ", meaning: "so", choices: ["so", "su", "se", "sa"], correctAnswer: "so" },

            { character: "た", meaning: "ta", choices: ["ta", "chi", "tsu", "te"], correctAnswer: "ta" },
            { character: "ち", meaning: "chi", choices: ["chi", "ta", "tsu", "te"], correctAnswer: "chi" },
            { character: "つ", meaning: "tsu", choices: ["tsu", "chi", "ta", "te"], correctAnswer: "tsu" },
            { character: "て", meaning: "te", choices: ["te", "tsu", "chi", "to"], correctAnswer: "te" },
            { character: "と", meaning: "to", choices: ["to", "ta", "chi", "te"], correctAnswer: "to" },

            { character: "な", meaning: "na", choices: ["na", "ni", "nu", "ne"], correctAnswer: "na" },
            { character: "に", meaning: "ni", choices: ["ni", "na", "nu", "ne"], correctAnswer: "ni" },
            { character: "ぬ", meaning: "nu", choices: ["nu", "ne", "na", "ni"], correctAnswer: "nu" },
            { character: "ね", meaning: "ne", choices: ["ne", "ni", "nu", "no"], correctAnswer: "ne" },
            { character: "の", meaning: "no", choices: ["no", "na", "ne", "nu"], correctAnswer: "no" },

            { character: "は", meaning: "ha", choices: ["ha", "hi", "fu", "ho"], correctAnswer: "ha" },
            { character: "ひ", meaning: "hi", choices: ["hi", "ha", "fu", "he"], correctAnswer: "hi" },
            { character: "ふ", meaning: "fu", choices: ["fu", "ho", "he", "hi"], correctAnswer: "fu" },
            { character: "へ", meaning: "he", choices: ["he", "ha", "ho", "fu"], correctAnswer: "he" },
            { character: "ほ", meaning: "ho", choices: ["ho", "he", "ha", "fu"], correctAnswer: "ho" },

            { character: "ま", meaning: "ma", choices: ["ma", "mi", "mu", "me"], correctAnswer: "ma" },
            { character: "み", meaning: "mi", choices: ["mi", "mu", "ma", "me"], correctAnswer: "mi" },
            { character: "む", meaning: "mu", choices: ["mu", "me", "mi", "ma"], correctAnswer: "mu" },
            { character: "め", meaning: "me", choices: ["me", "mi", "mu", "mo"], correctAnswer: "me" },
            { character: "も", meaning: "mo", choices: ["mo", "ma", "me", "mu"], correctAnswer: "mo" },

            { character: "や", meaning: "ya", choices: ["ya", "yu", "yo", "i"], correctAnswer: "ya" },
            { character: "ゆ", meaning: "yu", choices: ["yu", "ya", "yo", "u"], correctAnswer: "yu" },
            { character: "よ", meaning: "yo", choices: ["yo", "yu", "ya", "o"], correctAnswer: "yo" },

            { character: "ら", meaning: "ra", choices: ["ra", "ri", "ru", "re"], correctAnswer: "ra" },
            { character: "り", meaning: "ri", choices: ["ri", "ra", "ru", "re"], correctAnswer: "ri" },
            { character: "る", meaning: "ru", choices: ["ru", "ro", "ri", "ra"], correctAnswer: "ru" },
            { character: "れ", meaning: "re", choices: ["re", "ra", "ri", "ru"], correctAnswer: "re" },
            { character: "ろ", meaning: "ro", choices: ["ro", "ru", "re", "ra"], correctAnswer: "ro" },

            { character: "わ", meaning: "wa", choices: ["wa", "wo", "ra", "o"], correctAnswer: "wa" },
            { character: "を", meaning: "wo", choices: ["wo", "o", "wa", "ro"], correctAnswer: "wo" },

            { character: "ん", meaning: "n", choices: ["n", "na", "nu", "ne"], correctAnswer: "n" },

            { character: "が", meaning: "ga", choices: ["ga", "ka", "gi", "go"], correctAnswer: "ga" },
            { character: "ぎ", meaning: "gi", choices: ["gi", "ga", "gu", "ge"], correctAnswer: "gi" },
            { character: "ぐ", meaning: "gu", choices: ["gu", "go", "gi", "ga"], correctAnswer: "gu" },
            { character: "げ", meaning: "ge", choices: ["ge", "gi", "go", "gu"], correctAnswer: "ge" },
            { character: "ご", meaning: "go", choices: ["go", "gu", "ge", "ga"], correctAnswer: "go" },

            { character: "ざ", meaning: "za", choices: ["za", "zu", "ze", "zo"], correctAnswer: "za" },
            { character: "じ", meaning: "ji", choices: ["ji", "ja", "zu", "jo"], correctAnswer: "ji" },
            { character: "ず", meaning: "zu", choices: ["zu", "zo", "za", "ji"], correctAnswer: "zu" },
            { character: "ぜ", meaning: "ze", choices: ["ze", "za", "zu", "zo"], correctAnswer: "ze" },
            { character: "ぞ", meaning: "zo", choices: ["zo", "zu", "ze", "za"], correctAnswer: "zo" },

            { character: "だ", meaning: "da", choices: ["da", "de", "do", "di"], correctAnswer: "da" },
            { character: "ぢ", meaning: "ji (di)", choices: ["ji", "di", "zu", "de"], correctAnswer: "ji (di)" },
            { character: "づ", meaning: "zu (du)", choices: ["zu", "du", "ji", "do"], correctAnswer: "zu (du)" },
            { character: "で", meaning: "de", choices: ["de", "do", "di", "da"], correctAnswer: "de" },
            { character: "ど", meaning: "do", choices: ["do", "de", "du", "da"], correctAnswer: "do" },

            { character: "ば", meaning: "ba", choices: ["ba", "be", "bo", "bi"], correctAnswer: "ba" },
            { character: "び", meaning: "bi", choices: ["bi", "ba", "bu", "bo"], correctAnswer: "bi" },
            { character: "ぶ", meaning: "bu", choices: ["bu", "bo", "bi", "ba"], correctAnswer: "bu" },
            { character: "べ", meaning: "be", choices: ["be", "bi", "bo", "bu"], correctAnswer: "be" },
            { character: "ぼ", meaning: "bo", choices: ["bo", "bu", "be", "ba"], correctAnswer: "bo" },

            { character: "ぱ", meaning: "pa", choices: ["pa", "pi", "pu", "pe"], correctAnswer: "pa" },
            { character: "ぴ", meaning: "pi", choices: ["pi", "pa", "pu", "pe"], correctAnswer: "pi" },
            { character: "ぷ", meaning: "pu", choices: ["pu", "pe", "pi", "pa"], correctAnswer: "pu" },
            { character: "ぺ", meaning: "pe", choices: ["pe", "pa", "pu", "pi"], correctAnswer: "pe" },
            { character: "ぽ", meaning: "po", choices: ["po", "pe", "pu", "pa"], correctAnswer: "po" },

            { character: "きゃ", meaning: "kya", choices: ["kya", "kyo", "kyu", "ka"], correctAnswer: "kya" },
            { character: "きゅ", meaning: "kyu", choices: ["kyu", "kya", "kyo", "ku"], correctAnswer: "kyu" },
            { character: "きょ", meaning: "kyo", choices: ["kyo", "kyu", "kya", "ko"], correctAnswer: "kyo" },

            { character: "ぎゃ", meaning: "gya", choices: ["gya", "gyu", "gyo", "ga"], correctAnswer: "gya" },
            { character: "ぎゅ", meaning: "gyu", choices: ["gyu", "gya", "gyo", "gu"], correctAnswer: "gyu" },
            { character: "ぎょ", meaning: "gyo", choices: ["gyo", "gyu", "gya", "go"], correctAnswer: "gyo" },

            { character: "しゃ", meaning: "sha", choices: ["sha", "shi", "shu", "sho"], correctAnswer: "sha" },
            { character: "しゅ", meaning: "shu", choices: ["shu", "sha", "sho", "shi"], correctAnswer: "shu" },
            { character: "しょ", meaning: "sho", choices: ["sho", "sha", "shu", "shi"], correctAnswer: "sho" },

            { character: "ちゃ", meaning: "cha", choices: ["cha", "chu", "cho", "chi"], correctAnswer: "cha" },
            { character: "ちゅ", meaning: "chu", choices: ["chu", "cha", "cho", "chi"], correctAnswer: "chu" },
            { character: "ちょ", meaning: "cho", choices: ["cho", "chu", "cha", "chi"], correctAnswer: "cho" },

            { character: "にゃ", meaning: "nya", choices: ["nya", "nyu", "nyo", "ni"], correctAnswer: "nya" },
            { character: "にゅ", meaning: "nyu", choices: ["nyu", "nya", "nyo", "nu"], correctAnswer: "nyu" },
            { character: "にょ", meaning: "nyo", choices: ["nyo", "nyu", "nya", "no"], correctAnswer: "nyo" },

            { character: "ひゃ", meaning: "hya", choices: ["hya", "hyu", "hyo", "hi"], correctAnswer: "hya" },
            { character: "ひゅ", meaning: "hyu", choices: ["hyu", "hya", "hyo", "hi"], correctAnswer: "hyu" },
            { character: "ひょ", meaning: "hyo", choices: ["hyo", "hyu", "hya", "ho"], correctAnswer: "hyo" },

            { character: "びゃ", meaning: "bya", choices: ["bya", "byu", "byo", "bi"], correctAnswer: "bya" },
            { character: "びゅ", meaning: "byu", choices: ["byu", "bya", "byo", "bu"], correctAnswer: "byu" },
            { character: "びょ", meaning: "byo", choices: ["byo", "byu", "bya", "bo"], correctAnswer: "byo" },

            { character: "ぴゃ", meaning: "pya", choices: ["pya", "pyu", "pyo", "pi"], correctAnswer: "pya" },
            { character: "ぴゅ", meaning: "pyu", choices: ["pyu", "pya", "pyo", "pu"], correctAnswer: "pyu" },
            { character: "ぴょ", meaning: "pyo", choices: ["pyo", "pyu", "pya", "po"], correctAnswer: "pyo" },

            { character: "みゃ", meaning: "mya", choices: ["mya", "myu", "myo", "mi"], correctAnswer: "mya" },
            { character: "みゅ", meaning: "myu", choices: ["myu", "mya", "myo", "mu"], correctAnswer: "myu" },
            { character: "みょ", meaning: "myo", choices: ["myo", "myu", "mya", "mo"], correctAnswer: "myo" },

            { character: "りゃ", meaning: "rya", choices: ["rya", "ryu", "ryo", "ri"], correctAnswer: "rya" },
            { character: "りゅ", meaning: "ryu", choices: ["ryu", "rya", "ryo", "ru"], correctAnswer: "ryu" },
            { character: "りょ", meaning: "ryo", choices: ["ryo", "ryu", "rya", "ro"], correctAnswer: "ryo" },

            { character: "ちぇ", meaning: "che", choices: ["che", "cha", "chi", "chu"], correctAnswer: "che" },
            { character: "しぇ", meaning: "she", choices: ["she", "sha", "shi", "sho"], correctAnswer: "she" },
            { character: "じぇ", meaning: "je", choices: ["je", "ji", "jo", "ja"], correctAnswer: "je" }
        ]
    },
    {
        id: 'cardTwo', img: '/miguro_2.webp', title: 'Katakana',
        characters: [
            { character: "ア", meaning: "a", choices: ["a", "i", "u", "e"], correctAnswer: "a" },
            { character: "イ", meaning: "i", choices: ["i", "a", "e", "o"], correctAnswer: "i" },
            { character: "ウ", meaning: "u", choices: ["u", "o", "i", "a"], correctAnswer: "u" },
            { character: "エ", meaning: "e", choices: ["e", "i", "a", "o"], correctAnswer: "e" },
            { character: "オ", meaning: "o", choices: ["o", "a", "u", "e"], correctAnswer: "o" },

            { character: "カ", meaning: "ka", choices: ["ka", "ke", "ko", "ku"], correctAnswer: "ka" },
            { character: "キ", meaning: "ki", choices: ["ki", "ka", "ku", "ke"], correctAnswer: "ki" },
            { character: "ク", meaning: "ku", choices: ["ku", "ko", "ki", "ka"], correctAnswer: "ku" },
            { character: "ケ", meaning: "ke", choices: ["ke", "ka", "ko", "ki"], correctAnswer: "ke" },
            { character: "コ", meaning: "ko", choices: ["ko", "ku", "ke", "ka"], correctAnswer: "ko" },

            { character: "サ", meaning: "sa", choices: ["sa", "shi", "se", "so"], correctAnswer: "sa" },
            { character: "シ", meaning: "shi", choices: ["shi", "sa", "se", "so"], correctAnswer: "shi" },
            { character: "ス", meaning: "su", choices: ["su", "so", "sa", "shi"], correctAnswer: "su" },
            { character: "セ", meaning: "se", choices: ["se", "shi", "so", "su"], correctAnswer: "se" },
            { character: "ソ", meaning: "so", choices: ["so", "su", "se", "sa"], correctAnswer: "so" },

            { character: "タ", meaning: "ta", choices: ["ta", "chi", "tsu", "te"], correctAnswer: "ta" },
            { character: "チ", meaning: "chi", choices: ["chi", "ta", "tsu", "te"], correctAnswer: "chi" },
            { character: "ツ", meaning: "tsu", choices: ["tsu", "chi", "ta", "te"], correctAnswer: "tsu" },
            { character: "テ", meaning: "te", choices: ["te", "tsu", "chi", "to"], correctAnswer: "te" },
            { character: "ト", meaning: "to", choices: ["to", "ta", "chi", "te"], correctAnswer: "to" },

            { character: "ナ", meaning: "na", choices: ["na", "ni", "nu", "ne"], correctAnswer: "na" },
            { character: "ニ", meaning: "ni", choices: ["ni", "na", "nu", "ne"], correctAnswer: "ni" },
            { character: "ヌ", meaning: "nu", choices: ["nu", "ne", "na", "ni"], correctAnswer: "nu" },
            { character: "ネ", meaning: "ne", choices: ["ne", "ni", "nu", "no"], correctAnswer: "ne" },
            { character: "ノ", meaning: "no", choices: ["no", "na", "ne", "nu"], correctAnswer: "no" },

            { character: "ハ", meaning: "ha", choices: ["ha", "hi", "fu", "ho"], correctAnswer: "ha" },
            { character: "ヒ", meaning: "hi", choices: ["hi", "ha", "fu", "he"], correctAnswer: "hi" },
            { character: "フ", meaning: "fu", choices: ["fu", "ho", "he", "hi"], correctAnswer: "fu" },
            { character: "ヘ", meaning: "he", choices: ["he", "ha", "ho", "fu"], correctAnswer: "he" },
            { character: "ホ", meaning: "ho", choices: ["ho", "he", "ha", "fu"], correctAnswer: "ho" },

            { character: "マ", meaning: "ma", choices: ["ma", "mi", "mu", "me"], correctAnswer: "ma" },
            { character: "ミ", meaning: "mi", choices: ["mi", "mu", "ma", "me"], correctAnswer: "mi" },
            { character: "ム", meaning: "mu", choices: ["mu", "me", "mi", "ma"], correctAnswer: "mu" },
            { character: "メ", meaning: "me", choices: ["me", "mi", "mu", "mo"], correctAnswer: "me" },
            { character: "モ", meaning: "mo", choices: ["mo", "ma", "me", "mu"], correctAnswer: "mo" },

            { character: "ヤ", meaning: "ya", choices: ["ya", "yu", "yo", "i"], correctAnswer: "ya" },
            { character: "ユ", meaning: "yu", choices: ["yu", "ya", "yo", "u"], correctAnswer: "yu" },
            { character: "ヨ", meaning: "yo", choices: ["yo", "yu", "ya", "o"], correctAnswer: "yo" },

            { character: "ラ", meaning: "ra", choices: ["ra", "ri", "ru", "re"], correctAnswer: "ra" },
            { character: "リ", meaning: "ri", choices: ["ri", "ra", "ru", "re"], correctAnswer: "ri" },
            { character: "ル", meaning: "ru", choices: ["ru", "ro", "ri", "ra"], correctAnswer: "ru" },
            { character: "レ", meaning: "re", choices: ["re", "ra", "ri", "ru"], correctAnswer: "re" },
            { character: "ロ", meaning: "ro", choices: ["ro", "ru", "re", "ra"], correctAnswer: "ro" },

            { character: "ワ", meaning: "wa", choices: ["wa", "wo", "ra", "o"], correctAnswer: "wa" },
            { character: "ヲ", meaning: "wo", choices: ["wo", "o", "wa", "ro"], correctAnswer: "wo" },

            { character: "ン", meaning: "n", choices: ["n", "na", "nu", "ne"], correctAnswer: "n" },

            { character: "ガ", meaning: "ga", choices: ["ga", "ka", "gi", "go"], correctAnswer: "ga" },
            { character: "ギ", meaning: "gi", choices: ["gi", "ga", "gu", "ge"], correctAnswer: "gi" },
            { character: "グ", meaning: "gu", choices: ["gu", "go", "gi", "ga"], correctAnswer: "gu" },
            { character: "ゲ", meaning: "ge", choices: ["ge", "gi", "go", "gu"], correctAnswer: "ge" },
            { character: "ゴ", meaning: "go", choices: ["go", "gu", "ge", "ga"], correctAnswer: "go" },

            { character: "ザ", meaning: "za", choices: ["za", "zu", "ze", "zo"], correctAnswer: "za" },
            { character: "ジ", meaning: "ji", choices: ["ji", "ja", "zu", "jo"], correctAnswer: "ji" },
            { character: "ズ", meaning: "zu", choices: ["zu", "zo", "za", "ji"], correctAnswer: "zu" },
            { character: "ゼ", meaning: "ze", choices: ["ze", "za", "zu", "zo"], correctAnswer: "ze" },
            { character: "ゾ", meaning: "zo", choices: ["zo", "zu", "ze", "za"], correctAnswer: "zo" },

            { character: "ダ", meaning: "da", choices: ["da", "de", "do", "di"], correctAnswer: "da" },
            { character: "ヂ", meaning: "ji (di)", choices: ["ji", "di", "zu", "de"], correctAnswer: "ji (di)" },
            { character: "ヅ", meaning: "zu (du)", choices: ["zu", "du", "ji", "do"], correctAnswer: "zu (du)" },
            { character: "デ", meaning: "de", choices: ["de", "do", "di", "da"], correctAnswer: "de" },
            { character: "ド", meaning: "do", choices: ["do", "de", "du", "da"], correctAnswer: "do" },

            { character: "バ", meaning: "ba", choices: ["ba", "be", "bo", "bi"], correctAnswer: "ba" },
            { character: "ビ", meaning: "bi", choices: ["bi", "ba", "bu", "bo"], correctAnswer: "bi" },
            { character: "ブ", meaning: "bu", choices: ["bu", "bo", "bi", "ba"], correctAnswer: "bu" },
            { character: "ベ", meaning: "be", choices: ["be", "bi", "bo", "bu"], correctAnswer: "be" },
            { character: "ボ", meaning: "bo", choices: ["bo", "bu", "be", "ba"], correctAnswer: "bo" },

            { character: "パ", meaning: "pa", choices: ["pa", "pi", "pu", "pe"], correctAnswer: "pa" },
            { character: "ピ", meaning: "pi", choices: ["pi", "pa", "pu", "pe"], correctAnswer: "pi" },
            { character: "プ", meaning: "pu", choices: ["pu", "pe", "pi", "pa"], correctAnswer: "pu" },
            { character: "ペ", meaning: "pe", choices: ["pe", "pa", "pu", "pi"], correctAnswer: "pe" },
            { character: "ポ", meaning: "po", choices: ["po", "pe", "pu", "pa"], correctAnswer: "po" },

            { character: "キャ", meaning: "kya", choices: ["kya", "ka", "kyo", "kyu"], correctAnswer: "kya" },
            { character: "キュ", meaning: "kyu", choices: ["kyu", "kyo", "kya", "ku"], correctAnswer: "kyu" },
            { character: "キョ", meaning: "kyo", choices: ["kyo", "kya", "kyu", "ko"], correctAnswer: "kyo" },

            { character: "シャ", meaning: "sha", choices: ["sha", "shi", "sho", "shu"], correctAnswer: "sha" },
            { character: "シュ", meaning: "shu", choices: ["shu", "sha", "shi", "sho"], correctAnswer: "shu" },
            { character: "ショ", meaning: "sho", choices: ["sho", "sha", "shu", "shi"], correctAnswer: "sho" },

            { character: "チャ", meaning: "cha", choices: ["cha", "chi", "chu", "cho"], correctAnswer: "cha" },
            { character: "チュ", meaning: "chu", choices: ["chu", "cho", "cha", "chi"], correctAnswer: "chu" },
            { character: "チョ", meaning: "cho", choices: ["cho", "chu", "cha", "chi"], correctAnswer: "cho" },

            { character: "ニャ", meaning: "nya", choices: ["nya", "nyo", "nyu", "na"], correctAnswer: "nya" },
            { character: "ニュ", meaning: "nyu", choices: ["nyu", "nya", "nyo", "ni"], correctAnswer: "nyu" },
            { character: "ニョ", meaning: "nyo", choices: ["nyo", "nya", "nyu", "no"], correctAnswer: "nyo" },

            { character: "ヒャ", meaning: "hya", choices: ["hya", "hyu", "hyo", "ha"], correctAnswer: "hya" },
            { character: "ヒュ", meaning: "hyu", choices: ["hyu", "hya", "hyo", "hi"], correctAnswer: "hyu" },
            { character: "ヒョ", meaning: "hyo", choices: ["hyo", "hyu", "hya", "ho"], correctAnswer: "hyo" },

            { character: "ミャ", meaning: "mya", choices: ["mya", "myu", "myo", "ma"], correctAnswer: "mya" },
            { character: "ミュ", meaning: "myu", choices: ["myu", "mya", "myo", "mi"], correctAnswer: "myu" },
            { character: "ミョ", meaning: "myo", choices: ["myo", "myu", "mya", "mo"], correctAnswer: "myo" },

            { character: "リャ", meaning: "rya", choices: ["rya", "ryu", "ryo", "ra"], correctAnswer: "rya" },
            { character: "リュ", meaning: "ryu", choices: ["ryu", "rya", "ryo", "ri"], correctAnswer: "ryu" },
            { character: "リョ", meaning: "ryo", choices: ["ryo", "ryu", "rya", "ro"], correctAnswer: "ryo" },

            { character: "ギャ", meaning: "gya", choices: ["gya", "gyo", "gyu", "ga"], correctAnswer: "gya" },
            { character: "ギュ", meaning: "gyu", choices: ["gyu", "gya", "gyo", "gi"], correctAnswer: "gyu" },
            { character: "ギョ", meaning: "gyo", choices: ["gyo", "gya", "gyu", "go"], correctAnswer: "gyo" },

            { character: "ジャ", meaning: "ja", choices: ["ja", "ju", "jo", "ji"], correctAnswer: "ja" },
            { character: "ジュ", meaning: "ju", choices: ["ju", "ja", "jo", "ji"], correctAnswer: "ju" },
            { character: "ジョ", meaning: "jo", choices: ["jo", "ja", "ju", "ji"], correctAnswer: "jo" },

            { character: "ビャ", meaning: "bya", choices: ["bya", "byu", "byo", "ba"], correctAnswer: "bya" },
            { character: "ビュ", meaning: "byu", choices: ["byu", "bya", "byo", "bi"], correctAnswer: "byu" },
            { character: "ビョ", meaning: "byo", choices: ["byo", "byu", "bya", "bo"], correctAnswer: "byo" },

            { character: "ピャ", meaning: "pya", choices: ["pya", "pyu", "pyo", "pa"], correctAnswer: "pya" },
            { character: "ピュ", meaning: "pyu", choices: ["pyu", "pya", "pyo", "pi"], correctAnswer: "pyu" },
            { character: "ピョ", meaning: "pyo", choices: ["pyo", "pyu", "pya", "po"], correctAnswer: "pyo" },

            { character: "イェ", meaning: "ye", choices: ["ye", "e", "yo", "ya"], correctAnswer: "ye" },

            { character: "ウィ", meaning: "wi", choices: ["wi", "we", "wo", "ui"], correctAnswer: "wi" },
            { character: "ウェ", meaning: "we", choices: ["we", "wi", "wo", "e"], correctAnswer: "we" },
            { character: "ウォ", meaning: "wo", choices: ["wo", "we", "wi", "o"], correctAnswer: "wo" },

            { character: "ヴァ", meaning: "va", choices: ["va", "ba", "wa", "fa"], correctAnswer: "va" },
            { character: "ヴィ", meaning: "vi", choices: ["vi", "bi", "wi", "fi"], correctAnswer: "vi" },
            { character: "ヴェ", meaning: "ve", choices: ["ve", "be", "we", "fe"], correctAnswer: "ve" },
            { character: "ヴォ", meaning: "vo", choices: ["vo", "bo", "wo", "fo"], correctAnswer: "vo" },

            { character: "シェ", meaning: "she", choices: ["she", "sha", "shu", "sho"], correctAnswer: "she" },
            { character: "ジェ", meaning: "je", choices: ["je", "ji", "jo", "ju"], correctAnswer: "je" },

            { character: "チェ", meaning: "che", choices: ["che", "chi", "cha", "cho"], correctAnswer: "che" },
            { character: "ティ", meaning: "ti", choices: ["ti", "chi", "te", "ta"], correctAnswer: "ti" },
            { character: "ディ", meaning: "di", choices: ["di", "ji", "de", "da"], correctAnswer: "di" },
            { character: "デュ", meaning: "dyu", choices: ["dyu", "du", "de", "di"], correctAnswer: "dyu" },

            { character: "トゥ", meaning: "tu", choices: ["tu", "to", "tsu", "te"], correctAnswer: "tu" },
            { character: "ドゥ", meaning: "du", choices: ["du", "do", "zu", "de"], correctAnswer: "du" },

            { character: "ファ", meaning: "fa", choices: ["fa", "fu", "fo", "fe"], correctAnswer: "fa" },
            { character: "フィ", meaning: "fi", choices: ["fi", "fa", "fe", "fo"], correctAnswer: "fi" },
            { character: "フェ", meaning: "fe", choices: ["fe", "fi", "fa", "fo"], correctAnswer: "fe" },
            { character: "フォ", meaning: "fo", choices: ["fo", "fu", "fa", "fe"], correctAnswer: "fo" },

            { character: "ツァ", meaning: "tsa", choices: ["tsa", "sa", "za", "ta"], correctAnswer: "tsa" },
            { character: "ツィ", meaning: "tsi", choices: ["tsi", "chi", "si", "ti"], correctAnswer: "tsi" },
            { character: "ツェ", meaning: "tse", choices: ["tse", "se", "ze", "te"], correctAnswer: "tse" },
            { character: "ツォ", meaning: "tso", choices: ["tso", "so", "zo", "to"], correctAnswer: "tso" }
        ]
    },
    {
        id: 'cardThree', img: '/miguro_3.webp', title: 'Random Kanji',
        characters: [
            { character: "日", meaning: "day, sun", onyomi: "ニチ, ジツ", kunyomi: "ひ, か", choices: ["hi", "nichi", "bi", "ka"], correctAnswer: "nichi" },
            { character: "月", meaning: "moon, month", onyomi: "ゲツ, ガツ", kunyomi: "つき", choices: ["getsu", "gatsu", "tsuki", "mitsu"], correctAnswer: "tsuki" },
            { character: "火", meaning: "fire", onyomi: "カ", kunyomi: "ひ", choices: ["hi", "ka", "bi", "ho"], correctAnswer: "hi" },
            { character: "水", meaning: "water", onyomi: "スイ", kunyomi: "みず", choices: ["mizu", "sui", "midzu", "mi"], correctAnswer: "mizu" },
            { character: "木", meaning: "tree, wood", onyomi: "モク, ボク", kunyomi: "き, こ", choices: ["ki", "moku", "boku", "ko"], correctAnswer: "ki" },
            { character: "金", meaning: "gold, money", onyomi: "キン, コン", kunyomi: "かね", choices: ["kane", "kin", "kon", "kana"], correctAnswer: "kane" },
            { character: "土", meaning: "earth, soil", onyomi: "ド, ト", kunyomi: "つち", choices: ["tsuchi", "do", "to", "chi"], correctAnswer: "tsuchi" },
            { character: "山", meaning: "mountain", onyomi: "サン, ザン", kunyomi: "やま", choices: ["yama", "san", "zan", "ma"], correctAnswer: "yama" },
            { character: "川", meaning: "river", onyomi: "セン", kunyomi: "かわ", choices: ["kawa", "sen", "gawa", "awa"], correctAnswer: "kawa" },
            { character: "田", meaning: "rice field", onyomi: "デン", kunyomi: "た", choices: ["ta", "den", "da", "ten"], correctAnswer: "ta" },

            { character: "人", meaning: "person", onyomi: "ジン, ニン", kunyomi: "ひと", choices: ["hito", "jin", "nin", "bito"], correctAnswer: "hito" },
            { character: "口", meaning: "mouth", onyomi: "コウ, ク", kunyomi: "くち", choices: ["kuchi", "kou", "ku", "guchi"], correctAnswer: "kuchi" },
            { character: "目", meaning: "eye", onyomi: "モク, ボク", kunyomi: "め", choices: ["me", "moku", "boku", "ma"], correctAnswer: "me" },
            { character: "耳", meaning: "ear", onyomi: "ジ", kunyomi: "みみ", choices: ["mimi", "ji", "mi", "mima"], correctAnswer: "mimi" },
            { character: "手", meaning: "hand", onyomi: "シュ", kunyomi: "て", choices: ["te", "shu", "teh", "chi"], correctAnswer: "te" },
            { character: "足", meaning: "foot, leg", onyomi: "ソク", kunyomi: "あし, た", choices: ["ashi", "soku", "ta", "ato"], correctAnswer: "ashi" },
            { character: "力", meaning: "power", onyomi: "リョク, リキ", kunyomi: "ちから", choices: ["chikara", "ryoku", "riki", "rika"], correctAnswer: "chikara" },
            { character: "女", meaning: "woman", onyomi: "ジョ, ニョ", kunyomi: "おんな, め", choices: ["onna", "jo", "nyo", "me"], correctAnswer: "onna" },
            { character: "男", meaning: "man", onyomi: "ダン, ナン", kunyomi: "おとこ", choices: ["otoko", "dan", "nan", "tono"], correctAnswer: "otoko" },
            { character: "子", meaning: "child", onyomi: "シ, ス", kunyomi: "こ", choices: ["ko", "shi", "su", "go"], correctAnswer: "ko" },

            { character: "学", meaning: "study, learning", onyomi: "ガク", kunyomi: "まなぶ", choices: ["gaku", "manabu", "gakki", "mana"], correctAnswer: "manabu" },
            { character: "校", meaning: "school", onyomi: "コウ", kunyomi: null, choices: ["kou", "kyo", "ko", "kawa"], correctAnswer: "kou" },
            { character: "先", meaning: "ahead, previous", onyomi: "セン", kunyomi: "さき", choices: ["saki", "sen", "saku", "se"], correctAnswer: "saki" },
            { character: "生", meaning: "life, birth", onyomi: "セイ, ショウ", kunyomi: "いきる, うまれる, なま", choices: ["sei", "shou", "ikiru", "nama"], correctAnswer: "ikiru" },
            { character: "友", meaning: "friend", onyomi: "ユウ", kunyomi: "とも", choices: ["tomo", "yuu", "yu", "domo"], correctAnswer: "tomo" },
            { character: "本", meaning: "book, origin", onyomi: "ホン", kunyomi: "もと", choices: ["hon", "moto", "honbu", "pon"], correctAnswer: "hon" },
            { character: "名", meaning: "name", onyomi: "メイ, ミョウ", kunyomi: "な", choices: ["na", "mei", "myou", "nama"], correctAnswer: "na" },
            { character: "年", meaning: "year", onyomi: "ネン", kunyomi: "とし", choices: ["toshi", "nen", "nenki", "toki"], correctAnswer: "toshi" },
            { character: "時", meaning: "time, hour", onyomi: "ジ", kunyomi: "とき", choices: ["toki", "ji", "doki", "jikan"], correctAnswer: "toki" },
            {
                character: "間", meaning: "interval, space", onyomi: "カン, ケン", kunyomi: "あいだ, ま", choices: ["aida", "kan", "ken", "ma"], correctAnswer: "aida"
            },

            { character: "上", meaning: "up, above", onyomi: "ジョウ", kunyomi: "うえ, あがる", choices: ["ue", "jou", "ageru", "kami"], correctAnswer: "ue" },
            { character: "下", meaning: "down, below", onyomi: "カ, ゲ", kunyomi: "した, さがる", choices: ["shita", "ka", "ge", "sageru"], correctAnswer: "shita" },
            { character: "左", meaning: "left", onyomi: "サ", kunyomi: "ひだり", choices: ["hidari", "sa", "saya", "hidare"], correctAnswer: "hidari" },
            { character: "右", meaning: "right", onyomi: "ウ, ユウ", kunyomi: "みぎ", choices: ["migi", "u", "yuu", "mi"], correctAnswer: "migi" },
            { character: "大", meaning: "big, large", onyomi: "ダイ, タイ", kunyomi: "おお", choices: ["oo", "dai", "tai", "ookii"], correctAnswer: "oo" },
            { character: "小", meaning: "small", onyomi: "ショウ", kunyomi: "ちいさい", choices: ["chiisai", "shou", "ko", "sho"], correctAnswer: "chiisai" },
            { character: "中", meaning: "inside, middle", onyomi: "チュウ", kunyomi: "なか", choices: ["naka", "chuu", "chu", "uchi"], correctAnswer: "naka" },
            { character: "外", meaning: "outside", onyomi: "ガイ, ゲ", kunyomi: "そと, はずす", choices: ["soto", "gai", "ge", "hazu"], correctAnswer: "soto" },
            { character: "円", meaning: "yen, circle", onyomi: "エン", kunyomi: "まる", choices: ["en", "maru", "yen", "mado"], correctAnswer: "en" },
            { character: "今", meaning: "now", onyomi: "コン, キン", kunyomi: "いま", choices: ["ima", "kon", "kin", "kono"], correctAnswer: "ima" },

            { character: "何", meaning: "what", onyomi: "カ", kunyomi: "なに, なん", choices: ["nani", "nan", "ka", "nane"], correctAnswer: "nani" },
            { character: "父", meaning: "father", onyomi: "フ", kunyomi: "ちち", choices: ["chichi", "fu", "tou", "chii"], correctAnswer: "chichi" },
            { character: "母", meaning: "mother", onyomi: "ボ", kunyomi: "はは", choices: ["haha", "bo", "okaasan", "ma"], correctAnswer: "haha" },
            { character: "兄", meaning: "older brother", onyomi: "ケイ, キョウ", kunyomi: "あに", choices: ["ani", "kei", "kyou", "onii"], correctAnswer: "ani" },
            { character: "姉", meaning: "older sister", onyomi: "シ", kunyomi: "あね", choices: ["ane", "shi", "aneue", "ne"], correctAnswer: "ane" },
            { character: "弟", meaning: "younger brother", onyomi: "テイ, ダイ", kunyomi: "おとうと", choices: ["otouto", "tei", "dai", "tou"], correctAnswer: "otouto" },
            { character: "妹", meaning: "younger sister", onyomi: "マイ", kunyomi: "いもうと", choices: ["imouto", "mai", "man", "mou"], correctAnswer: "imouto" },
            { character: "車", meaning: "car, vehicle", onyomi: "シャ", kunyomi: "くるま", choices: ["kuruma", "sha", "shya", "kurume"], correctAnswer: "kuruma" },
            { character: "駅", meaning: "station", onyomi: "エキ", kunyomi: null, choices: ["eki", "yeki", "ekiya", "ekiin"], correctAnswer: "eki" },
            { character: "電", meaning: "electricity", onyomi: "デン", kunyomi: null, choices: ["den", "dengaku", "denki", "ten"], correctAnswer: "den" }
        ]

    },
    {
        id: 'cardFive', img: '/miguro_1.webp', title: 'Vocabularies',
        characters: [
            {
                character: "学校",
                meaning: "school",
                onyomi: "ガッ, コウ",
                kunyomi: null,
                choices: ["こうこう", "がくせい", "がっこう", "せんせい"],
                correctAnswer: "がっこう"
            },
            {
                character: "先生",
                meaning: "teacher",
                onyomi: "セン, セイ",
                kunyomi: null,
                choices: ["きょうし", "こうこう", "せんせい", "がくせい"],
                correctAnswer: "せんせい"
            },
            {
                character: "日本",
                meaning: "Japan",
                onyomi: "ニチ, ホン",
                kunyomi: "ひ, もと",
                choices: ["やまと", "にっぽん", "ひほん", "にほん"],
                correctAnswer: "にほん"
            },
            {
                character: "学生",
                meaning: "student",
                onyomi: "ガク, セイ",
                kunyomi: null,
                choices: ["がっこう", "しょうがく", "がくせい", "せんせい"],
                correctAnswer: "がくせい"
            },
            {
                character: "水",
                meaning: "water",
                onyomi: "スイ",
                kunyomi: "みず",
                choices: ["かわ", "うみ", "すい", "みず"],
                correctAnswer: "みず"
            },
            {
                character: "火曜日",
                meaning: "Tuesday",
                onyomi: "カ, ヨウ",
                kunyomi: "ひ",
                choices: ["かようび", "もくようび", "げつようび", "にちようび"],
                correctAnswer: "かようび"
            },
            {
                character: "友達",
                meaning: "friend",
                onyomi: null,
                kunyomi: "ともだち",
                choices: ["せんせい", "ともだち", "なかま", "かぞく"],
                correctAnswer: "ともだち"
            },
            {
                character: "時間",
                meaning: "time, hour",
                onyomi: "ジ, カン",
                kunyomi: null,
                choices: ["とき", "じゅかん", "じかん", "いま"],
                correctAnswer: "じかん"
            },
            {
                character: "車",
                meaning: "car, vehicle",
                onyomi: "シャ",
                kunyomi: "くるま",
                choices: ["でんしゃ", "じどうしゃ", "くるま", "シャ"],
                correctAnswer: "くるま"
            },
            {
                character: "電車",
                meaning: "train",
                onyomi: "デン, シャ",
                kunyomi: null,
                choices: ["バス", "じどうしゃ", "くるま", "でんしゃ"],
                correctAnswer: "でんしゃ"
            },
            {
                character: "本",
                meaning: "book",
                onyomi: "ホン",
                kunyomi: "もと",
                choices: ["ほん", "ざっし", "もと", "しんぶん"],
                correctAnswer: "ほん"
            },
            {
                character: "猫",
                meaning: "cat",
                onyomi: "ビョウ",
                kunyomi: "ねこ",
                choices: ["ねこ", "いぬ", "とり", "うま"],
                correctAnswer: "ねこ"
            },
            {
                character: "犬",
                meaning: "dog",
                onyomi: "ケン",
                kunyomi: "いぬ",
                choices: ["いぬ", "ねこ", "とり", "うし"],
                correctAnswer: "いぬ"
            },
            {
                character: "山",
                meaning: "mountain",
                onyomi: "サン",
                kunyomi: "やま",
                choices: ["やま", "かわ", "もり", "たに"],
                correctAnswer: "やま"
            },
            {
                character: "川",
                meaning: "river",
                onyomi: "セン",
                kunyomi: "かわ",
                choices: ["かわ", "いけ", "うみ", "やま"],
                correctAnswer: "かわ"
            },
            {
                character: "空",
                meaning: "sky",
                onyomi: "クウ",
                kunyomi: "そら",
                choices: ["そら", "みず", "やま", "かわ"],
                correctAnswer: "そら"
            },
            {
                character: "雨",
                meaning: "rain",
                onyomi: "ウ",
                kunyomi: "あめ",
                choices: ["あめ", "ゆき", "くも", "かぜ"],
                correctAnswer: "あめ"
            },
            {
                character: "雪",
                meaning: "snow",
                onyomi: "セツ",
                kunyomi: "ゆき",
                choices: ["あめ", "ゆき", "くも", "はれ"],
                correctAnswer: "ゆき"
            },
            {
                character: "風",
                meaning: "wind",
                onyomi: "フウ",
                kunyomi: "かぜ",
                choices: ["はれ", "かぜ", "くも", "あめ"],
                correctAnswer: "かぜ"
            },
            {
                character: "花",
                meaning: "flower",
                onyomi: "カ",
                kunyomi: "はな",
                choices: ["はな", "き", "み", "くさ"],
                correctAnswer: "はな"
            },
            {
                character: "木",
                meaning: "tree",
                onyomi: "モク",
                kunyomi: "き",
                choices: ["き", "み", "はな", "やま"],
                correctAnswer: "き"
            },
            {
                character: "森",
                meaning: "forest",
                onyomi: "シン",
                kunyomi: "もり",
                choices: ["やま", "もり", "かわ", "はな"],
                correctAnswer: "もり"
            },
            {
                character: "人",
                meaning: "person",
                onyomi: "ジン, ニン",
                kunyomi: "ひと",
                choices: ["ひと", "ともだち", "かぞく", "せんせい"],
                correctAnswer: "ひと"
            },
            {
                character: "子供",
                meaning: "child",
                onyomi: "シ",
                kunyomi: "こども",
                choices: ["おとな", "こども", "ひと", "がくせい"],
                correctAnswer: "こども"
            },
            {
                character: "大人",
                meaning: "adult",
                onyomi: "ダイ, ニン",
                kunyomi: "おとな",
                choices: ["せんせい", "こども", "おとな", "がくせい"],
                correctAnswer: "おとな"
            },
            {
                character: "家",
                meaning: "house, home",
                onyomi: "カ",
                kunyomi: "いえ",
                choices: ["へや", "いえ", "まち", "たてもの"],
                correctAnswer: "いえ"
            },
            {
                character: "町",
                meaning: "town",
                onyomi: "チョウ",
                kunyomi: "まち",
                choices: ["まち", "いえ", "くに", "むら"],
                correctAnswer: "まち"
            },
            {
                character: "国",
                meaning: "country",
                onyomi: "コク",
                kunyomi: "くに",
                choices: ["まち", "くに", "しま", "やま"],
                correctAnswer: "くに"
            },
            {
                character: "駅",
                meaning: "station",
                onyomi: "エキ",
                kunyomi: null,
                choices: ["くるま", "バス", "えき", "まち"],
                correctAnswer: "えき"
            },
            {
                character: "店",
                meaning: "shop",
                onyomi: "テン",
                kunyomi: "みせ",
                choices: ["みせ", "や", "いえ", "たてもの"],
                correctAnswer: "みせ"
            },
            {
                character: "病院",
                meaning: "hospital",
                onyomi: "ビョウ, イン",
                kunyomi: null,
                choices: ["びょういん", "がっこう", "えき", "いえ"],
                correctAnswer: "びょういん"
            },
            {
                character: "銀行",
                meaning: "bank",
                onyomi: "ギン, コウ",
                kunyomi: null,
                choices: ["ぎんこう", "やおや", "びょういん", "がっこう"],
                correctAnswer: "ぎんこう"
            },
            {
                character: "会社",
                meaning: "company",
                onyomi: "カイ, シャ",
                kunyomi: null,
                choices: ["かいしゃ", "がっこう", "えき", "みせ"],
                correctAnswer: "かいしゃ"
            },
            {
                character: "駅前",
                meaning: "in front of station",
                onyomi: "エキ, ゼン",
                kunyomi: null,
                choices: ["えきまえ", "えきうしろ", "えきみぎ", "えきひだり"],
                correctAnswer: "えきまえ"
            },
            {
                character: "道",
                meaning: "road",
                onyomi: "ドウ",
                kunyomi: "みち",
                choices: ["みち", "まち", "かわ", "たてもの"],
                correctAnswer: "みち"
            },
            {
                character: "今日",
                meaning: "today",
                onyomi: "コン, ニチ",
                kunyomi: "きょう",
                choices: ["きのう", "あした", "きょう", "こんばん"],
                correctAnswer: "きょう"
            },
            {
                character: "昨日",
                meaning: "yesterday",
                onyomi: "サク",
                kunyomi: "きのう",
                choices: ["きのう", "きょう", "あした", "こんばん"],
                correctAnswer: "きのう"
            },
            {
                character: "明日",
                meaning: "tomorrow",
                onyomi: "ミョウ, ニチ",
                kunyomi: "あした",
                choices: ["きょう", "きのう", "あした", "こんばん"],
                correctAnswer: "あした"
            },
            {
                character: "朝",
                meaning: "morning",
                onyomi: "チョウ",
                kunyomi: "あさ",
                choices: ["ひる", "ばん", "あさ", "よる"],
                correctAnswer: "あさ"
            },
            {
                character: "昼",
                meaning: "noon",
                onyomi: "チュウ",
                kunyomi: "ひる",
                choices: ["ばん", "ひる", "あさ", "よる"],
                correctAnswer: "ひる"
            },
            {
                character: "夜",
                meaning: "night",
                onyomi: "ヤ",
                kunyomi: "よる",
                choices: ["あさ", "よる", "ばん", "ひる"],
                correctAnswer: "よる"
            },
            {
                character: "今",
                meaning: "now",
                onyomi: "コン",
                kunyomi: "いま",
                choices: ["いま", "きょう", "とき", "じかん"],
                correctAnswer: "いま"
            },
            {
                character: "時",
                meaning: "time, hour",
                onyomi: "ジ",
                kunyomi: "とき",
                choices: ["とき", "いま", "じかん", "じゅかん"],
                correctAnswer: "とき"
            },
            {
                character: "年",
                meaning: "year",
                onyomi: "ネン",
                kunyomi: "とし",
                choices: ["とし", "じかん", "とき", "いま"],
                correctAnswer: "とし"
            },
            {
                character: "月",
                meaning: "month, moon",
                onyomi: "ゲツ, ガツ",
                kunyomi: "つき",
                choices: ["つき", "にち", "とき", "ひ"],
                correctAnswer: "つき"
            },
            {
                character: "日",
                meaning: "day, sun",
                onyomi: "ニチ, ジツ",
                kunyomi: "ひ, か",
                choices: ["にち", "ひ", "か", "つき"],
                correctAnswer: "にち"
            },
            {
                character: "時間割",
                meaning: "timetable",
                onyomi: "ジ, カン, ワリ",
                kunyomi: null,
                choices: ["じかんわり", "じかん", "とき", "カレンダー"],
                correctAnswer: "じかんわり"
            },
            {
                character: "電話",
                meaning: "telephone",
                onyomi: "デン, ワ",
                kunyomi: null,
                choices: ["でんしゃ", "でんわ", "けいたい", "バス"],
                correctAnswer: "でんわ"
            },
            {
                character: "音楽",
                meaning: "music",
                onyomi: "オン, ガク",
                kunyomi: null,
                choices: ["おんがく", "がくせい", "ほん", "ざっし"],
                correctAnswer: "おんがく"
            },
            {
                character: "映画",
                meaning: "movie",
                onyomi: "エイ, ガ",
                kunyomi: null,
                choices: ["えいが", "えいご", "ほん", "ざっし"],
                correctAnswer: "えいが"
            },
            {
                character: "料理",
                meaning: "cooking, cuisine",
                onyomi: "リョウ, リ",
                kunyomi: null,
                choices: ["りょうり", "たべもの", "のみもの", "ごはん"],
                correctAnswer: "りょうり"
            }
        ]

    },
]
let preview_answers = []
const closeQuizDialog = () => {
    dialog.value = false
    dialogPreview.value = true
}
const closePreviewDialog = () => {
    dialogPreview.value = false
    resetTimer();
}
const get_Index = (id: number) => {
    timer();
    getRandomKanji(id);
    correct_answer = 0;
    wrong_answer = 0;
    preview_answer.value = false;
    disable_choices.value = false;
    dialog.value = true
}
const checkAnswer = (text: any) => {
    text === cards[index].characters[rand].correctAnswer ? correct_answer++ : wrong_answer++;
    preview_answers.push(
        { kanji: kanji.value, meaning: cards[index].characters[rand].meaning, correct_answer: cards[index].characters[rand].correctAnswer, user_answer: text }
    );
    getRandomKanji(index);
    console.log(preview_answers)
}
const getRandomKanji = (id: number) => {
    index = id;
    rand = Math.floor(Math.random() * cards[index].characters.length);
    kanji.value = cards[index].characters[rand].character;
    meaning.value = cards[index].characters[rand].meaning;
    choices.value = shuffleArray(cards[index].characters[rand].choices);
}
const shuffleArray = (array: any) => {
    let shuffled = [...array]; // copy so original isn't mutated
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const timer = () => {
    intervalTime = setInterval(() => {
        if (time.value === 0) {
            clearInterval(intervalTime);
            preview_answer.value = true;
            disable_choices.value = true;
        } else {
            time.value--;
        }
    }, 1000);
}
const resetTimer = () => {
    if (intervalTime) {
        clearInterval(intervalTime);
        intervalTime = null;
    }
    time.value = default_time;
    preview_answer.value = false;
    disable_choices.value = false;
    correct_answer = 0;
    wrong_answer = 0;
    preview_answers = [];
}
const tryAgain = () => {
    dialogPreview.value = false;
    getRandomKanji(index);
    correct_answer = 0;
    wrong_answer = 0;
    preview_answer.value = false;
    disable_choices.value = false;
    dialog.value = true;
    resetTimer();
    timer();
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
