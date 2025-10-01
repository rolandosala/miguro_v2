<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="12" sm="12">
                    <h4 class="text-h5 font-weight-bold">{{ title }}</h4>
                    <p>{{ description }}</p>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                    <ol class="mx-md-8">
                        <li class="mt-3" v-for="data in conjunctions"><b>{{ data.word }} ({{ data.romaji }}) - {{
                            data.meaning
                                }} </b><br>
                            <b>Example</b>
                            <ul class="mx-8 mx-md-8">
                                <li>{{ data.example.jp }} <br> {{ data.example.romaji }} <br>{{ data.example.en }} <br>
                                    <b>Breakdown</b>
                                    <ul class="mx-8 mx-md-8">
                                        <li v-for="breakdown in data.breakdown">{{ breakdown }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const title = "Summarizing Conjunctions in Japanese";
const description = `
    In Japanese, summarizing conjunctions (要約接続詞 - ようやくせつぞくし) are used to wrap up or summarize what has been previously said. 
    These words or phrases help convey conclusions, recaps, or summaries. 
    Common summarizing conjunctions include つまり (tsumari), 要するに (ようするに / you suru ni), and 結局 (けっきょく / kekkyoku). 
    Understanding how to use them properly can enhance both writing and conversation.
  `;
const conjunctions = [
    {
        word: "つまり",
        romaji: "tsumari",
        meaning: "in other words / in short / that is to say",
        example: {
            jp: "彼は日本に10年住んでいた。つまり、日本語がペラペラだ。",
            romaji: "Kare wa Nihon ni juu-nen sunde ita. Tsumari, Nihongo ga perapera da.",
            en: "He lived in Japan for 10 years. In short, he is fluent in Japanese."
        },
        breakdown: [
            "彼は日本に10年住んでいた。- He lived in Japan for 10 years.",
            "つまり - In other words / to summarize",
            "日本語がペラペラだ。- He is fluent in Japanese."
        ]
    },
    {
        word: "要するに",
        romaji: "you suru ni",
        meaning: "to sum up / in short",
        example: {
            jp: "要するに、時間が足りなかったということだ。",
            romaji: "Yō suru ni, jikan ga tarinakatta to iu koto da.",
            en: "To sum up, we didn’t have enough time."
        },
        breakdown: [
            "要するに - To sum up",
            "時間が足りなかった - We didn't have enough time",
            "ということだ - That’s what it means / That’s the situation"
        ]
    },
    {
        word: "結局",
        romaji: "kekkyoku",
        meaning: "after all / in the end / ultimately",
        example: {
            jp: "彼は頑張ったが、結局試験に落ちた。",
            romaji: "Kare wa ganbatta ga, kekkyoku shiken ni ochita.",
            en: "He tried hard, but in the end, he failed the exam."
        },
        breakdown: [
            "彼は頑張ったが - He tried hard, but",
            "結局 - in the end / ultimately",
            "試験に落ちた - He failed the exam"
        ]
    }
]


</script>