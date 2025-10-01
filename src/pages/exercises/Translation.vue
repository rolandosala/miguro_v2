<template>
    <v-container>
        <v-row>
            <v-col class="px-16 py-10">
                <h4 class="text-h5 font-weight-bold">Translation Exercise</h4>
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
                    <v-dialog v-model="dialog" max-width="600" persistent>
                        <v-card :title="cardtitle">
                            <v-card-text>
                                <v-col cols="12" md="12" sm="12" class="d-flex flex-column align-center justify-center">
                                    <v-col>
                                        <h3>{{ count }} / {{ limit }}</h3>
                                        <hr />
                                        <h6 class="text-h6 font-weight-bold text-center mt-8" v-html="kana"></h6>
                                        <!-- <p class="text-center">({{ romaji }})</p> -->
                                        <v-text-field label="Your English Translation" v-model="user_answer"
                                            class="mt-5" />
                                        <div class="d-flex justify-end">
                                            <v-btn color="primary" @click="submitAnswer" class="mx-3"
                                                v-if="count == limit">Submit Answers</v-btn>
                                            <v-btn color="primary" @click="checkAnswer" class="mx-3" v-else>Next</v-btn>

                                        </div>
                                    </v-col>
                                </v-col>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogPreview" max-width="1000" persistent>
                        <v-card title="Answers">
                            <v-card-text>
                                <div class="table-responsive">
                                    <v-table>
                                        <thead>
                                            <tr>
                                                <th>Kana</th>
                                                <th>Romaji</th>
                                                <th>Meaning</th>
                                                <th>Your Answer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(data, index) in preview_answers">
                                                <td v-html="data.kana"></td>
                                                <td>{{ data.romaji }}</td>
                                                <td>{{ data.meaning }}</td>
                                                <td>{{ data.userAnswer }}</td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                    <div class="mt-5 d-flex justify-end">
                                        <v-btn color="primary" @click="tryAgain" class="mx-3">Try Again</v-btn>
                                        <v-btn color="red" @click="closePreviewDialog">Close</v-btn>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
const index = ref(0);
const kana = ref('');
const romaji = ref('');
const meaning = ref('');
const cardtitle = ref('');
const user_answer = ref('');
const rand = ref(0);
const preview_answer = ref(false);
const limit = 10;
const count = ref(1);

const cards = [
    {
        id: 'cardOne', img: '/miguro_1.webp', title: 'Translation 1',
        translations: [
            {
                id: 1,
                level: 1,
                japanese: "これは　りんごです。",
                romaji: "Kore wa ringo desu.",
                english: "This is an apple."
            },
            {
                id: 2,
                level: 1,
                japanese: "ねこが　います。",
                romaji: "Neko ga imasu.",
                english: "There is a cat."
            },
            {
                id: 3,
                level: 1,
                japanese: "わたしは　がくせいです。",
                romaji: "Watashi wa gakusei desu.",
                english: "I am a student."
            },
            {
                id: 4,
                level: 1,
                japanese: "いぬは　そとに　います。",
                romaji: "Inu wa soto ni imasu.",
                english: "The dog is outside."
            },
            {
                id: 5,
                level: 1,
                japanese: "でんしゃで　いきます。",
                romaji: "Densha de ikimasu.",
                english: "I go by train."
            },
            {
                id: 6,
                level: 1,
                japanese: "みずを　のみます。",
                romaji: "Mizu o nomimasu.",
                english: "I drink water."
            },
            {
                id: 7,
                level: 1,
                japanese: "きのう、えいがを　みました。",
                romaji: "Kinō, eiga o mimashita.",
                english: "I watched a movie yesterday."
            },
            {
                id: 8,
                level: 1,
                japanese: "としょかんは　どこですか？",
                romaji: "Toshokan wa doko desu ka?",
                english: "Where is the library?"
            },
            {
                id: 9,
                level: 1,
                japanese: "あさごはんを　たべましたか？",
                romaji: "Asagohan o tabemashita ka?",
                english: "Did you eat breakfast?"
            },
            {
                id: 10,
                level: 1,
                japanese: "にほんごを　べんきょうしています。",
                romaji: "Nihongo o benkyō shiteimasu.",
                english: "I am studying Japanese."
            }
        ]
    },
    {
        id: 'cardTwo',
        img: '/miguro_1.webp',
        title: 'Translation 2',
        translations: [
            {
                id: 11,
                level: 2,
                japanese: "<ruby>本<rt>ほん</rt></ruby>は おもしろいです。",
                romaji: "Kono hon wa omoshiroi desu.",
                english: "This book is interesting."
            },
            {
                id: 12,
                level: 2,
                japanese: "<ruby>今日<rt>きょう</rt></ruby>は あついですから、<ruby>水<rt>みず</rt></ruby>を たくさん のみましょう。",
                romaji: "Kyō wa atsui desu kara, mizu o takusan nomimashō.",
                english: "Since it is hot today, let’s drink a lot of water."
            },
            {
                id: 13,
                level: 2,
                japanese: "バスより <ruby>電車<rt>でんしゃ</rt></ruby>のほうが はやいです。",
                romaji: "Basu yori densha no hō ga hayai desu.",
                english: "The train is faster than the bus."
            },
            {
                id: 14,
                level: 2,
                japanese: "スーパーで <ruby>野菜<rt>やさい</rt></ruby>と <ruby>果物<rt>くだもの</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました。",
                romaji: "Sūpā de yasai to kudamono o kaimashita.",
                english: "I bought vegetables and fruits at the supermarket."
            },
            {
                id: 15,
                level: 2,
                japanese: "<ruby>友達<rt>ともだち</rt></ruby>と いっしょに <ruby>公園<rt>こうえん</rt></ruby>で さんぽしました。",
                romaji: "Tomodachi to issho ni kōen de sanpo shimashita.",
                english: "I took a walk in the park with my friend."
            },
            {
                id: 16,
                level: 2,
                japanese: "<ruby>今晩<rt>こんばん</rt></ruby>、いっしょに ばんごはんを <ruby>食<rt>た</rt></ruby>べませんか？",
                romaji: "Konban, issho ni bangohan o tabemasen ka?",
                english: "Shall we eat dinner together tonight?"
            },
            {
                id: 17,
                level: 2,
                japanese: "<ruby>日本<rt>にほん</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>作<rt>つく</rt></ruby>ってみたいです。",
                romaji: "Nihon no ryōri o tsukutte mitai desu.",
                english: "I want to try making Japanese food."
            },
            {
                id: 18,
                level: 2,
                japanese: "<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>富士山<rt>ふじさん</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>りました。",
                romaji: "Senshū, Fujisan ni noborimashita.",
                english: "I climbed Mt. Fuji last week."
            },
            {
                id: 19,
                level: 2,
                japanese: "<ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったら、<ruby>京都<rt>きょうと</rt></ruby>に <ruby>行<rt>い</rt></ruby>きたいです。",
                romaji: "Nihon e ittara, Kyōto ni ikitai desu.",
                english: "If I go to Japan, I want to visit Kyoto."
            },
            {
                id: 20,
                level: 2,
                japanese: "<ruby>宿題<rt>しゅくだい</rt></ruby>を してから、<ruby>テレビ<rt>てれび</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。",
                romaji: "Shukudai o shite kara, terebi o mimasu.",
                english: "I will watch TV after doing my homework."
            }
        ]
    },
    {
        id: 'cardThree',
        img: '/miguro_1.webp',
        title: 'Translation 3',
        translations: [
            {
                id: 21,
                level: 3,
                japanese: "<ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きながら <ruby>勉強<rt>べんきょう</rt></ruby>します。",
                romaji: "Ongaku o kikinagara benkyō shimasu.",
                english: "I study while listening to music."
            },
            {
                id: 22,
                level: 3,
                japanese: "<ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>ったことが ありますか？",
                romaji: "Nihon e itta koto ga arimasu ka?",
                english: "Have you ever been to Japan?"
            },
            {
                id: 23,
                level: 3,
                japanese: "<ruby>お菓子<rt>おかし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べすぎて おなかが <ruby>痛<rt>いた</rt></ruby>いです。",
                romaji: "Okashi o tabesugite onaka ga itai desu.",
                english: "I ate too many sweets, and now my stomach hurts."
            },
            {
                id: 24,
                level: 3,
                japanese: "<ruby>風<rt>かぜ</rt></ruby>を ひいてしまいました。",
                romaji: "Kaze o hiite shimaimashita.",
                english: "I caught a cold (unfortunately)."
            },
            {
                id: 25,
                level: 3,
                japanese: "<ruby>明日<rt>あした</rt></ruby>までに この<ruby>仕事<rt>しごと</rt></ruby>を しなければなりません。",
                romaji: "Ashita made ni kono shigoto o shinakereba narimasen.",
                english: "I must finish this work by tomorrow."
            },
            {
                id: 26,
                level: 3,
                japanese: "<ruby>雨<rt>あめ</rt></ruby>が ふるかもしれません。",
                romaji: "Ame ga furu kamoshiremasen.",
                english: "It might rain."
            },
            {
                id: 27,
                level: 3,
                japanese: "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>早<rt>はや</rt></ruby>く <ruby>起<rt>お</rt></ruby>きるように しています。",
                romaji: "Mainichi, hayaku okiru yō ni shiteimasu.",
                english: "I try to wake up early every day."
            },
            {
                id: 28,
                level: 3,
                japanese: "ここで たばこを <ruby>吸<rt>す</rt></ruby>ってはいけません。",
                romaji: "Koko de tabako o sutte wa ikemasen.",
                english: "You must not smoke here."
            },
            {
                id: 29,
                level: 3,
                japanese: "<ruby>友達<rt>ともだち</rt></ruby>に <ruby>本<rt>ほん</rt></ruby>を <ruby>貸<rt>か</rt></ruby>してあげました。",
                romaji: "Tomodachi ni hon o kashite agemashita.",
                english: "I lent a book to my friend."
            },
            {
                id: 30,
                level: 3,
                japanese: "<ruby>先生<rt>せんせい</rt></ruby>に <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えてもらいました。",
                romaji: "Sensei ni Nihongo o oshiete moraimashita.",
                english: "I was taught Japanese by my teacher."
            }
        ]
    },
    {
        id: 'cardFour',
        img: '/miguro_1.webp',
        title: 'Translation 4',
        translations: [
            {
                id: 31,
                level: 4,
                japanese: "<ruby>時間<rt>じかん</rt></ruby>が あれば、<ruby>本<rt>ほん</rt></ruby>を よみます。",
                romaji: "Jikan ga areba, hon o yomimasu.",
                english: "If I have time, I will read a book."
            },
            {
                id: 32,
                level: 4,
                japanese: "<ruby>日本<rt>にほん</rt></ruby>に いくなら、<ruby>京都<rt>きょうと</rt></ruby>に いったほうがいいですよ。",
                romaji: "Nihon ni iku nara, Kyōto ni itta hō ga ii desu yo.",
                english: "If you go to Japan, you should visit Kyoto."
            },
            {
                id: 33,
                level: 4,
                japanese: "<ruby>来年<rt>らいねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>留学<rt>りゅうがく</rt></ruby>しようと おもっています。",
                romaji: "Rainen Nihon e ryūgaku shiyō to omotteimasu.",
                english: "I’m thinking of studying abroad in Japan next year."
            },
            {
                id: 34,
                level: 4,
                japanese: "<ruby>友達<rt>ともだち</rt></ruby>が くる<ruby>前<rt>まえ</rt></ruby>に、<ruby>部屋<rt>へや</rt></ruby>を <ruby>掃除<rt>そうじ</rt></ruby>しておきます。",
                romaji: "Tomodachi ga kuru mae ni, heya o sōji shite okimasu.",
                english: "I will clean the room before my friend comes (in preparation)."
            },
            {
                id: 35,
                level: 4,
                japanese: "この<ruby>靴<rt>くつ</rt></ruby>を はいてみても いいですか？",
                romaji: "Kono kutsu o haite mite mo ii desu ka?",
                english: "May I try on these shoes?"
            },
            {
                id: 36,
                level: 4,
                japanese: "わたしは <ruby>先生<rt>せんせい</rt></ruby>に <ruby>褒<rt>ほ</rt></ruby>められました。",
                romaji: "Watashi wa sensei ni homeraremashita.",
                english: "I was praised by my teacher."
            },
            {
                id: 37,
                level: 4,
                japanese: "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいルールを <ruby>守<rt>まも</rt></ruby>らせます。",
                romaji: "Kaisha wa atarashii rūru o mamorasemasu.",
                english: "The company makes us follow the new rules."
            },
            {
                id: 38,
                level: 4,
                japanese: "<ruby>明日<rt>あした</rt></ruby>は <ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>るそうです。",
                romaji: "Ashita wa ame ga furu sō desu.",
                english: "I heard it will rain tomorrow."
            },
            {
                id: 39,
                level: 4,
                japanese: "<ruby>先生<rt>せんせい</rt></ruby>は わたしたちに <ruby>勉強<rt>べんきょう</rt></ruby>するように <ruby>言<rt>い</rt></ruby>いました。",
                romaji: "Sensei wa watashitachi ni benkyō suru yō ni iimashita.",
                english: "The teacher told us to study."
            },
            {
                id: 40,
                level: 4,
                japanese: "もっと <ruby>野菜<rt>やさい</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたほうが いいですよ。",
                romaji: "Motto yasai o tabeta hō ga ii desu yo.",
                english: "You had better eat more vegetables."
            }
        ]
    },
    {
        id: 'cardFive',
        img: '/miguro_1.webp',
        title: 'Translation 5',
        translations: [
            {
                id: 41,
                level: 5,
                japanese: "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っても、<ruby>散歩<rt>さんぽ</rt></ruby>に いきます。",
                romaji: "Ame ga futte mo, sanpo ni ikimasu.",
                english: "Even if it rains, I will go for a walk."
            },
            {
                id: 42,
                level: 5,
                japanese: "<ruby>勉強<rt>べんきょう</rt></ruby>すればするほど、<ruby>日本語<rt>にほんご</rt></ruby>が たのしくなります。",
                romaji: "Benkyō sureba suru hodo, Nihongo ga tanoshiku narimasu.",
                english: "The more I study, the more fun Japanese becomes."
            },
            {
                id: 43,
                level: 5,
                japanese: "<ruby>来週<rt>らいしゅう</rt></ruby>から <ruby>毎日<rt>まいにち</rt></ruby> <ruby>走<rt>はし</rt></ruby>ることにしました。",
                romaji: "Raishū kara mainichi hashiru koto ni shimashita.",
                english: "I decided to run every day starting next week."
            },
            {
                id: 44,
                level: 5,
                japanese: "<ruby>健康<rt>けんこう</rt></ruby>のために、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>野菜<rt>やさい</rt></ruby>を <ruby>食<rt>た</rt></ruby>べるようにしています。",
                romaji: "Kenkō no tame ni, mainichi yasai o taberu yō ni shiteimasu.",
                english: "For my health, I try to eat vegetables every day."
            },
            {
                id: 45,
                level: 5,
                japanese: "かれは <ruby>もうすぐ<rt>soon</rt></ruby> <ruby>結婚<rt>けっこん</rt></ruby>するらしいです。",
                romaji: "Kare wa mōsugu kekkon suru rashii desu.",
                english: "It seems he will get married soon."
            },
            {
                id: 46,
                level: 5,
                japanese: "<ruby>今度<rt>こんど</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>で <ruby>絶対<rt>ぜったい</rt></ruby> <ruby>勝<rt>か</rt></ruby>ってみせます。",
                romaji: "Kondo no shiai de zettai katte misemasu.",
                english: "In the next match, I’ll definitely win (I’ll show you I can)."
            },
            {
                id: 47,
                level: 5,
                japanese: "<ruby>朝ご飯<rt>あさごはん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べずに <ruby>学校<rt>がっこう</rt></ruby>へ いきました。",
                romaji: "Asagohan o tabezu ni gakkō e ikimashita.",
                english: "I went to school without eating breakfast."
            },
            {
                id: 48,
                level: 5,
                japanese: "<ruby>日本人<rt>にほんじん</rt></ruby>だからといって、みんなが <ruby>刺身<rt>さしみ</rt></ruby>を <ruby>好<rt>す</rt></ruby>きなわけではありません。",
                romaji: "Nihonjin dakara to itte, minna ga sashimi o suki na wake de wa arimasen.",
                english: "Just because someone is Japanese doesn’t mean everyone likes sashimi."
            },
            {
                id: 49,
                level: 5,
                japanese: "あの<ruby>人<rt>ひと</rt></ruby>は <ruby>有名<rt>ゆうめい</rt></ruby>に <ruby>違<rt>ちが</rt></ruby>いありません。",
                romaji: "Ano hito wa yūmei ni chigai arimasen.",
                english: "That person must be famous."
            },
            {
                id: 50,
                level: 5,
                japanese: "<ruby>先生<rt>せんせい</rt></ruby>の おかげで、<ruby>日本語<rt>にほんご</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>に なりました。",
                romaji: "Sensei no okage de, Nihongo ga jōzu ni narimashita.",
                english: "Thanks to my teacher, my Japanese has improved."
            }
        ]
    },

]
const preview_answers = ref([]);
const dialog = ref(false);
const dialogPreview = ref(false);
const get_Index = (id: any) => {
    getRandomSentence(id);
    preview_answer.value = false;
    dialog.value = true
}
const checkAnswer = () => {
    preview_answers.value.push(
        { kana: cards[index.value].translations[rand.value].japanese, romaji: cards[index.value].translations[rand.value].romaji, meaning: cards[index.value].translations[rand.value].english, userAnswer: user_answer.value }
    );
    getRandomSentence(index.value);
    count.value++;
    user_answer.value = '';
}

const getRandomSentence = (id: number) => {
    index.value = id;
    rand.value = Math.floor(Math.random() * cards[index.value].translations.length);
    kana.value = cards[index.value].translations[rand.value].japanese;
    romaji.value = cards[index.value].translations[rand.value].romaji;
    meaning.value = cards[index.value].translations[rand.value].english;
    cardtitle.value = cards[index.value].title;
}

const reset = () => {
    count.value = 1;
    preview_answers.value = [];
    user_answer.value = '';
}
const closePreviewDialog = () => {
    reset()
    dialogPreview.value = false
}
const submitAnswer = () => {
    preview_answers.value.push(
        { kana: cards[index.value].translations[rand.value].japanese, romaji: cards[index.value].translations[rand.value].romaji, meaning: cards[index.value].translations[rand.value].english, userAnswer: user_answer }
    );
    dialogPreview.value = true
    dialog.value = false
}
const tryAgain = () => {
    reset()
    dialogPreview.value = false;
    dialog.value = true;
    getRandomSentence(index.value);
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

.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
