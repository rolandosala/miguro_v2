<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="12" sm="12">
                    <h4 class="text-h5 font-weight-bold">{{ conjunctionContent.title }}</h4>
                    <p>{{ conjunctionContent.description }}</p>
                    <v-list-item v-for="(data, index) in conjunctionContent.conjunctions">
                        <b>{{ index + 1 }}. {{ data.conjunction }}</b>
                        <p>{{ data.explanation }}</p>
                        <b>Example</b>
                        <ul class="mx-md-8">
                            <li v-for="example in data.examples" class="mt-3">
                                {{ example.kana }} <br>
                                {{ example.romaji }}<br>
                                {{ example.english }} <br>
                                <b>Breakdown</b>
                                <ul class="mx-6">
                                    <li v-for="(value, key) in example.breakdown">{{ key }} - {{ value }}</li>
                                </ul>
                            </li>
                        </ul>
                    </v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const conjunctionContent = {
    title: "Understanding Condition Conjunctions in Japanese",
    description: "Condition conjunctions (条件接続詞) are used in Japanese to connect two parts of a sentence where one event or action is conditional on another. These conjunctions express 'if', 'when', or 'unless'. There are various ways to use condition conjunctions in Japanese depending on the level of certainty, politeness, or formality.",
    conjunctions: [
        {
            id: 'collapseOne',
            conjunction: "～たら (tara)",
            explanation: "The conjunction ～たら is commonly used to express 'if' or 'when' something happens in the future. It can be used for both present and future conditional situations.",
            examples: [
                {
                    kana: "もし雨が降ったら、出かけません。",
                    romaji: "Moshi ame ga futtara, dekakemasen.",
                    english: "If it rains, I won’t go out.",
                    breakdown: {
                        "もし (moshi)": "if, used to introduce a hypothetical situation",
                        "雨が降ったら (ame ga futtara)": "if it rains, past form (indicating future potential)",
                        "出かけません (dekakemasen)": "I won’t go out, polite negative form of the verb 出かける (dekakeru)"
                    }
                },
                {
                    kana: "宿題が終わったら、テレビを見てもいいですか？",
                    romaji: "Shukudai ga owattara, terebi o mitemo ii desu ka?",
                    english: "If I finish my homework, can I watch TV?",
                    breakdown: {
                        "宿題が終わったら (shukudai ga owattara)": "if I finish my homework, past form of 終わる (owaru)",
                        "テレビを見てもいいですか (terebi o mitemo ii desu ka)": "Can I watch TV? Polite inquiry using the verb 見る (miru) in potential form"
                    }
                }
            ]
        },
        {
            id: 'collapseTwo',
            conjunction: "～なら (nara)",
            explanation: "The conjunction ～なら is often used when the condition is something the speaker knows or assumes to be true. It's typically used to provide information or offer a suggestion based on a given condition.",
            examples: [
                {
                    kana: "もし行くなら、一緒に行こう。",
                    romaji: "Moshi iku nara, issho ni ikou.",
                    english: "If you're going, let's go together.",
                    breakdown: {
                        "もし (moshi)": "if, used to introduce a hypothetical situation",
                        "行くなら (iku nara)": "if you're going, verb 行く (iku) in conditional form",
                        "一緒に行こう (issho ni ikou)": "let’s go together, volitional form of the verb 行く (iku)"
                    }
                },
                {
                    kana: "勉強するなら、この本を使いなさい。",
                    romaji: "Benkyou suru nara, kono hon o tsukainasai.",
                    english: "If you’re going to study, use this book.",
                    breakdown: {
                        "勉強するなら (benkyou suru nara)": "if you're going to study, verb 勉強する (benkyou suru) in conditional form",
                        "この本を使いなさい (kono hon o tsukainasai)": "use this book, imperative form of the verb 使う (tsukau)"
                    }
                }
            ]
        },
        {
            id: 'collapseThree',
            conjunction: "～ば (ba)",
            explanation: "The ～ば conjunction expresses a condition that is expected to happen if the preceding condition is met. It's commonly used for hypothetical situations and to express a general rule or expectation.",
            examples: [
                {
                    kana: "この道を行けば、駅があります。",
                    romaji: "Kono michi o ikeba, eki ga arimasu.",
                    english: "If you go down this road, there is a station.",
                    breakdown: {
                        "この道を行けば (kono michi o ikeba)": "if you go down this road, verb 行く (iku) in the conditional ～ば form",
                        "駅があります (eki ga arimasu)": "there is a station, verb ある (aru) to indicate existence"
                    }
                },
                {
                    kana: "早く寝れば、元気に起きられます。",
                    romaji: "Hayaku nereba, genki ni okiraremasu.",
                    english: "If you sleep early, you can wake up feeling energetic.",
                    breakdown: {
                        "早く寝れば (hayaku nereba)": "if you sleep early, verb 寝る (neru) in the conditional ～ば form",
                        "元気に起きられます (genki ni okiraremasu)": "you can wake up feeling energetic, potential form of the verb 起きる (okiru)"
                    }
                }
            ]
        }
    ]
}
</script>