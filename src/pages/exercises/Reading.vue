<template>
    <v-sheet class="px-16 py-10">
        <h4 class="text-h5 font-weight-bold">Reading Exercise</h4>
        <hr>
        <v-row>
            <v-col cols="12" md="3" sm="4" v-for="(data, index) in cards">
                <v-card class="mt-10" @click="get_index(index)">
                    <div class="d-flex justify-center flex-column align-center py-8 px-8">
                        <img :src="data.img" alt="" style="width: 70%;">
                        <h5 class="text-h6 font-weight-bold">{{ data.title }}</h5>
                    </div>
                </v-card>
            </v-col>
            <v-dialog v-model="dialog" v-for="data in cards" max-width="500" persistent>
                <v-card title="Reading Exercise">
                    <v-divider></v-divider>
                    <v-card-text>
                        <div>
                            <p style="text-align: justify"><b v-html="paragraph"></b></p>
                            <p class="text-left mt-5" v-if="show_romaji"><em>{{ data.paragraph.romaji }}</em>
                            </p>
                            <p class="text-left mt-5" v-if="show_english">{{ data.paragraph.english }}</p>
                            <v-checkbox label="Show English"></v-checkbox>
                        </div>
                        <div class="d-flex justify-end">
                            <v-btn @click="reset" color="red" class="mx-2">Close</v-btn>
                            <v-btn @click="showQuestions" color="primary">Questions</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogQuestions" max-width="500" persistent>
                <v-card title="Question">
                    <v-card-text>
                        <div class="d-flex justify-center flex-column">
                            <p class="text-center text-h6"><b v-html="question"></b></p>
                            <p v-if="show_romaji" class="text-center">({{ romaji }})</p>
                            <p v-if="show_english" class="text-center">({{ english }})</p>
                            <v-text-field label="Please type your answer.." v-model="user_answer" class="mt-5" />
                        </div>
                        <div class="modal-footer">
                            <v-btn color="primary" v-if="submit" @click="submitAnswer">Submit</v-btn>
                            <v-btn color="primary" @click="nextQuestion" v-else>Next</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogAnswer" max-width="500" persistent>
                <v-card title="Answers">
                    <v-card-text>
                        <div v-if="submit" class="px-5 ">
                            <ol>
                                <li v-for="(data, index) in preview_answer" class="mt-2">
                                    <b v-html="data.question"></b><br>
                                    <em>{{ data.romaji }}</em><br>
                                    {{ data.english }} <br>
                                    Correct Answer: <b>{{ data.answer }}</b><br>
                                    Your Answer: <b><u>{{ data.userAnswer }}</u></b>
                                </li>
                            </ol>
                        </div>
                        <div class="d-flex justify-end mt-6">
                            <v-btn color="red" @click="reset" v-if="submit">Close</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-sheet>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const checkbox = ref(false)
const show_romaji = ref(true)
const show_romaji_text = ref('')
const show_english_text = ref('')
const show_english = ref(true)
const question = ref('')
const romaji = ref('')
const english = ref('')
const answer = ref('')
const count = ref(0)
const user_answer = ref('')
const submit = ref(false)
const preview_answer = ref([])
const index = ref(0)
const dialog = ref(false)
const dialogQuestions = ref(false)
const dialogAnswer = ref(false)
const paragraph = ref('')
const cards = [
    {
        "id": "cardOne",
        "img": "/miguro_1.webp",
        "title": "Reading 1",
        "paragraph": {
            "japanese": "これは <ruby>田中<rt>たなか</rt></ruby>さん の <ruby>犬<rt>いぬ</rt></ruby> です。<ruby>犬<rt>いぬ</rt></ruby> の <ruby>名前<rt>なまえ</rt></ruby> は ポチ です。ポチ は <ruby>白<rt>しろ</rt></ruby>い <ruby>犬<rt>いぬ</rt></ruby> です。まいにち <ruby>公園<rt>こうえん</rt></ruby> へ いきます。",
            "romaji": "Kore wa Tanaka-san no inu desu. Inu no namae wa Pochi desu. Pochi wa shiroi inu desu. Mainichi kōen e ikimasu.",
            "english": "This is Mr. Tanaka’s dog. The dog’s name is Pochi. Pochi is a white dog. He goes to the park every day."
        },
        "questions": [
            {
                "question": "<ruby>犬<rt>いぬ</rt></ruby> の <ruby>名前<rt>なまえ</rt></ruby> は なん ですか？",
                "romaji": "Inu no namae wa nan desu ka?",
                "english": "What is the dog's name?",
                "answer": "Pochi desu."
            },
            {
                "question": "ポチ は なにいろ ですか？",
                "romaji": "Pochi wa nani iro desu ka?",
                "english": "What color is Pochi?",
                "answer": "Shiroi desu."
            },
            {
                "question": "ポチ は まいにち どこへ いきますか？",
                "romaji": "Pochi wa mainichi doko e ikimasu ka?",
                "english": "Where does Pochi go every day?",
                "answer": "Kōen e ikimasu."
            }
        ]
    },
    {
        "id": "cardTwo",
        "img": "/miguro_1.webp",
        "title": "Reading 2",
        "paragraph": {
            "japanese": "これは <ruby>山田<rt>やまだ</rt></ruby>さん の ねこ です。ねこ の <ruby>名前<rt>なまえ</rt></ruby> は ミケ です。ミケ は <ruby>小<rt>ちい</rt></ruby>さい ねこ です。まいにち <ruby>牛乳<rt>ぎゅうにゅう</rt></ruby> を のみます。そして よく ねます。",
            "romaji": "Kore wa Yamada-san no neko desu. Neko no namae wa Mike desu. Mike wa chiisai neko desu. Mainichi gyūnyū o nomimasu. Soshite yoku nemasu.",
            "english": "This is Mr. Yamada’s cat. The cat’s name is Mike. Mike is a small cat. She drinks milk every day. And she often sleeps."
        },
        "questions": [
            {
                "question": "ねこ の <ruby>名前<rt>なまえ</rt></ruby> は なん ですか？",
                "romaji": "Neko no namae wa nan desu ka?",
                "english": "What is the cat's name?",
                "answer": "Mike desu."
            },
            {
                "question": "ミケ は <ruby>大<rt>おお</rt></ruby>きい ですか <ruby>小<rt>ちい</rt></ruby>さい ですか？",
                "romaji": "Mike wa ōkii desu ka chiisai desu ka?",
                "english": "Is Mike big or small?",
                "answer": "Chiisai desu."
            },
            {
                "question": "ミケ は まいにち なに を のみますか？",
                "romaji": "Mike wa mainichi nani o nomimasu ka?",
                "english": "What does Mike drink every day?",
                "answer": "Gyūnyū o nomimasu."
            },
            {
                "question": "ミケ は よく なに を しますか？",
                "romaji": "Mike wa yoku nani o shimasu ka?",
                "english": "What does Mike often do?",
                "answer": "Nemasu."
            },
            {
                "question": "これは だれ の ねこ ですか？",
                "romaji": "Kore wa dare no neko desu ka?",
                "english": "Whose cat is this?",
                "answer": "Yamada-san no neko desu."
            }
        ]
    },
    {
        "id": "cardThree",
        "img": "/miguro_1.webp",
        "title": "Reading 3",
        "paragraph": {
            "japanese": "これは <ruby>田中<rt>たなか</rt></ruby>さん の <ruby>家族<rt>かぞく</rt></ruby> です。<ruby>田中<rt>たなか</rt></ruby>さん は <ruby>父<rt>ちち</rt></ruby> と <ruby>母<rt>はは</rt></ruby> と <ruby>弟<rt>おとうと</rt></ruby> が います。<ruby>父<rt>ちち</rt></ruby> は <ruby>会社員<rt>かいしゃいん</rt></ruby> です。<ruby>母<rt>はは</rt></ruby> は <ruby>先生<rt>せんせい</rt></ruby> です。<ruby>弟<rt>おとうと</rt></ruby> は <ruby>中学生<rt>ちゅうがくせい</rt></ruby> で、サッカー が すき です。",
            "romaji": "Kore wa Tanaka-san no kazoku desu. Tanaka-san wa chichi to haha to otōto ga imasu. Chichi wa kaishain desu. Haha wa sensei desu. Otōto wa chūgakusei de, sakkā ga suki desu.",
            "english": "This is Mr. Tanaka’s family. Mr. Tanaka has a father, a mother, and a younger brother. His father is a company employee. His mother is a teacher. His younger brother is a junior high school student, and he likes soccer."
        },
        "questions": [
            {
                "question": "<ruby>田中<rt>たなか</rt></ruby>さん の <ruby>家族<rt>かぞく</rt></ruby> に だれ が いますか？",
                "romaji": "Tanaka-san no kazoku ni dare ga imasu ka?",
                "english": "Who is in Mr. Tanaka’s family?",
                "answer": "Chichi to haha to otōto ga imasu."
            },
            {
                "question": "<ruby>田中<rt>たなか</rt></ruby>さん の <ruby>父<rt>ちち</rt></ruby> は しごと は なん ですか？",
                "romaji": "Tanaka-san no chichi wa shigoto wa nan desu ka?",
                "english": "What is Mr. Tanaka’s father’s job?",
                "answer": "Kaishain desu."
            },
            {
                "question": "<ruby>田中<rt>たなか</rt></ruby>さん の <ruby>母<rt>はは</rt></ruby> は 何 を していますか？",
                "romaji": "Tanaka-san no haha wa nani o shiteimasu ka?",
                "english": "What does Mr. Tanaka’s mother do?",
                "answer": "Sensei desu."
            },
            {
                "question": "<ruby>田中<rt>たなか</rt></ruby>さん の <ruby>弟<rt>おとうと</rt></ruby> は なんねんせい ですか？",
                "romaji": "Tanaka-san no otōto wa nan-nensei desu ka?",
                "english": "What grade is Mr. Tanaka’s younger brother?",
                "answer": "Chūgakusei desu."
            },
            {
                "question": "<ruby>田中<rt>たなか</rt></ruby>さん の <ruby>弟<rt>おとうと</rt></ruby> は 何 が すき ですか？",
                "romaji": "Tanaka-san no otōto wa nani ga suki desu ka?",
                "english": "What does Mr. Tanaka’s younger brother like?",
                "answer": "Sakkā ga suki desu."
            }
        ]
    },
    {
        "id": "cardFour",
        "img": "/miguro_1.webp",
        "title": "Reading 4",
        "paragraph": {
            "japanese": "これは <ruby>木村<rt>きむら</rt></ruby>さん の <ruby>１日<rt>いちにち</rt></ruby> です。<ruby>木村<rt>きむら</rt></ruby>さん は <ruby>毎朝<rt>まいあさ</rt></ruby> ６<ruby>時<rt>じ</rt></ruby> に おきます。<ruby>朝<rt>あさ</rt></ruby> ごはん を たべて から、<ruby>会社<rt>かいしゃ</rt></ruby> へ 行きます。<ruby>会社<rt>かいしゃ</rt></ruby> で は パソコン を つかって <ruby>仕事<rt>しごと</rt></ruby> を します。<ruby>ひる<rt>昼</rt></ruby> ごはん の とき、<ruby>同僚<rt>どうりょう</rt></ruby> と レストラン へ 行きます。よる は <ruby>家<rt>いえ</rt></ruby> に かえって、テレビ を 見たり 本 を 読んだり します。",
            "romaji": "Kore wa Kimura-san no ichinichi desu. Kimura-san wa maiasa roku-ji ni okimasu. Asa gohan o tabete kara, kaisha e ikimasu. Kaisha de wa pasokon o tsukatte shigoto o shimasu. Hiru gohan no toki, dōryō to resutoran e ikimasu. Yoru wa ie ni kaette, terebi o mitari hon o yondari shimasu.",
            "english": "This is Mr. Kimura’s day. He wakes up at 6 o’clock every morning. After eating breakfast, he goes to the company. At the company, he works using the computer. At lunchtime, he goes to a restaurant with colleagues. In the evening, he returns home and watches TV or reads books."
        },
        "questions": [
            {
                "question": "<ruby>木村<rt>きむら</rt></ruby>さん は <ruby>毎朝<rt>まいあさ</rt></ruby> なん<ruby>時<rt>じ</rt></ruby> に おきますか？",
                "romaji": "Kimura-san wa maiasa nan-ji ni okimasu ka?",
                "english": "What time does Mr. Kimura wake up every morning?",
                "answer": "Roku-ji ni okimasu."
            },
            {
                "question": "<ruby>朝<rt>あさ</rt></ruby> ごはん を たべて から、<ruby>木村<rt>きむら</rt></ruby>さん は どこ へ 行きますか？",
                "romaji": "Asa gohan o tabete kara, Kimura-san wa doko e ikimasu ka?",
                "english": "After eating breakfast, where does Mr. Kimura go?",
                "answer": "<ruby>会社<rt>かいしゃ</rt></ruby> へ 行きます。"
            },
            {
                "question": "<ruby>会社<rt>かいしゃ</rt></ruby> で <ruby>木村<rt>きむら</rt></ruby>さん は なに を しますか？",
                "romaji": "Kaisha de Kimura-san wa nani o shimasu ka?",
                "english": "What does Mr. Kimura do at the company?",
                "answer": "Pasokon o tsukatte shigoto o shimasu."
            },
            {
                "question": "<ruby>ひる<rt>昼</rt></ruby> ごはん の とき、<ruby>木村<rt>きむら</rt></ruby>さん は だれ と レストラン へ 行きますか？",
                "romaji": "Hiru gohan no toki, Kimura-san wa dare to resutoran e ikimasu ka?",
                "english": "At lunchtime, who does Mr. Kimura go to the restaurant with?",
                "answer": "<ruby>同僚<rt>どうりょう</rt></ruby> と 行きます。"
            },
            {
                "question": "よる、<ruby>木村<rt>きむら</rt></ruby>さん は <ruby>家<rt>いえ</rt></ruby> で なに を しますか？",
                "romaji": "Yoru, Kimura-san wa ie de nani o shimasu ka?",
                "english": "In the evening, what does Mr. Kimura do at home?",
                "answer": "Terebi o mitari hon o yondari shimasu."
            }
        ]
    },
    {
        "id": "cardFive",
        "img": "/miguro_1.webp",
        "title": "Reading 5",
        "paragraph": {
            "japanese": "これは <ruby>佐藤<rt>さとう</rt></ruby>さん の <ruby>週末<rt>しゅうまつ</rt></ruby> です。<ruby>土曜日<rt>どようび</rt></ruby> の <ruby>朝<rt>あさ</rt></ruby>、<ruby>佐藤<rt>さとう</rt></ruby>さん は ７<ruby>時<rt>じ</rt></ruby> に おきて、ジョギング を します。<ruby>走<rt>はし</rt></ruby>りながら <ruby>音楽<rt>おんがく</rt></ruby> を きく の が <ruby>好<rt>す</rt></ruby>き です。<ruby>午前中<rt>ごぜんちゅう</rt></ruby> に スーパー で <ruby>食<rt>た</rt></ruby>べもの を かって、<ruby>昼<rt>ひる</rt></ruby> は <ruby>家族<rt>かぞく</rt></ruby> と いっしょ に <ruby>料理<rt>りょうり</rt></ruby> を します。<ruby>日曜日<rt>にちようび</rt></ruby> に は ときどき <ruby>友達<rt>ともだち</rt></ruby> と <ruby>映画<rt>えいが</rt></ruby> を <ruby>見<rt>み</rt></ruby>に 行きます。<ruby>雨<rt>あめ</rt></ruby> の <ruby>日<rt>ひ</rt></ruby> は <ruby>家<rt>いえ</rt></ruby> に いて、<ruby>本<rt>ほん</rt></ruby> を <ruby>読<rt>よ</rt></ruby>んだり ゲーム を したり します。<ruby>佐藤<rt>さとう</rt></ruby>さん は <ruby>日本<rt>にほん</rt></ruby> を <ruby>旅行<rt>りょこう</rt></ruby> したい と 思っています。",
            "romaji": "Kore wa Satō-san no shūmatsu desu. Doyōbi no asa, Satō-san wa shichi-ji ni okite, jogingu o shimasu. Hashirinagara ongaku o kiku no ga suki desu. Gozenchū ni sūpā de tabemono o katte, hiru wa kazoku to issho ni ryōri o shimasu. Nichiyōbi ni wa tokidoki tomodachi to eiga o mi ni ikimasu. Ame no hi wa ie ni ite, hon o yondari gēmu o shitari shimasu. Satō-san wa Nihon o ryokō shitai to omotteimasu.",
            "english": "This is Mr. Sato’s weekend. On Saturday morning, he wakes up at 7 o’clock and goes jogging. He likes listening to music while running. In the morning, he buys food at the supermarket, and for lunch, he cooks together with his family. On Sundays, he sometimes goes to watch movies with friends. On rainy days, he stays at home, reading books or playing games. Mr. Sato wants to travel to Japan."
        },
        "questions": [
            {
                "question": "<ruby>佐藤<rt>さとう</rt></ruby>さん は <ruby>土曜日<rt>どようび</rt></ruby> の <ruby>朝<rt>あさ</rt></ruby> なん<ruby>時<rt>じ</rt></ruby> に おきますか？",
                "romaji": "Satō-san wa Doyōbi no asa nan-ji ni okimasu ka?",
                "english": "What time does Mr. Sato wake up on Saturday morning?",
                "answer": "Shichi-ji ni okimasu."
            },
            {
                "question": "<ruby>佐藤<rt>さとう</rt></ruby>さん は <ruby>走<rt>はし</rt></ruby>りながら なに を ききますか？",
                "romaji": "Satō-san wa hashirinagara nani o kikimasu ka?",
                "english": "What does Mr. Sato listen to while running?",
                "answer": "<ruby>音楽<rt>おんがく</rt></ruby> を ききます。"
            },
            {
                "question": "<ruby>ひる</ruby>、<ruby>佐藤<rt>さとう</rt></ruby>さん は だれ と <ruby>料理<rt>りょうり</rt></ruby> を しますか？",
                "romaji": "Hiru, Satō-san wa dare to ryōri o shimasu ka?",
                "english": "At lunch, who does Mr. Sato cook with?",
                "answer": "<ruby>家族<rt>かぞく</rt></ruby> と <ruby>料理<rt>りょうり</rt></ruby> を します。"
            },
            {
                "question": "<ruby>日曜日<rt>にちようび</rt></ruby> に、<ruby>佐藤<rt>さとう</rt></ruby>さん は ときどき 何 を しますか？",
                "romaji": "Nichiyōbi ni, Satō-san wa tokidoki nani o shimasu ka?",
                "english": "On Sundays, what does Mr. Sato sometimes do?",
                "answer": "<ruby>友達<rt>ともだち</rt></ruby> と <ruby>映画<rt>えいが</rt></ruby> を <ruby>見<rt>み</rt></ruby> に 行きます。"
            },
            {
                "question": "<ruby>佐藤<rt>さとう</rt></ruby>さん は 何 を したい と 思っていますか？",
                "romaji": "Satō-san wa nani o shitai to omotteimasu ka?",
                "english": "What does Mr. Sato want to do?",
                "answer": "<ruby>日本<rt>にほん</rt></ruby> を <ruby>旅行<rt>りょこう</rt></ruby> したい と 思っています。"
            }
        ]
    }
]
onMounted(() => {
    showRomaji();
    showEnglish();
})
const get_index = (id: number) => {
    index.value = id
    dialog.value = true
    paragraph.value = cards[index.value].paragraph.japanese
}
const showRomaji = () => {
    show_romaji.value = false;
    show_romaji_text.value = show_romaji ? 'Hide Romaji' : 'Show Romaji';
}
const showEnglish = () => {
    show_english.value = !show_english;
    show_english_text.value = show_english ? 'Hide English' : 'Show English';
}
const showQuestions = () => {

    question.value = cards[index.value].questions[count.value].question;
    romaji.value = cards[index.value].questions[count.value].romaji;
    english.value = cards[index.value].questions[count.value].english;
    answer.value = cards[index.value].questions[count.value].answer;
    dialogQuestions.value = true
    dialog.value = false

}
const nextQuestion = () => {
    if (user_answer.value == '') {
        return alert('Please write your answer')
    }
    preview_answer.value.push({ question: question.value, romaji: romaji.value, english: english.value, answer: answer.value, userAnswer: user_answer.value });
    count.value++;
    showQuestions();
    if (count.value === cards[index.value].questions.length - 1) {
        submit.value = true;
    }
    user_answer.value = ''
}
const submitAnswer = () => {
    dialogAnswer.value = true
    preview_answer.value.push({ question: question.value, romaji: romaji.value, english: english.value, answer: answer.value, userAnswer: user_answer.value });
}
const reset = () => {
    preview_answer.value = []
    count.value = 0
    question.value = ''
    romaji.value = ''
    submit.value = false
    show_romaji.value = false
    show_romaji_text.value = ''
    show_english_text.value = ''
    show_english.value = false
    user_answer.value = ''
    dialogQuestions.value = false
    dialogAnswer.value = false
    dialog.value = false
}
</script>