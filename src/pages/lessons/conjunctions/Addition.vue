<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="12" sm="12">
                    <h4 class="text-h5 font-weight-bold">{{ title }}</h4>
                    <p>{{ introduction }}</p>
                    <p>{{ explanation.definition }}</p>
                    <div class="mx-4">
                        <p><b>Usage</b> </p>
                        <span v-for="data in explanation.usage">{{ data }} <br></span>
                    </div>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                    <p><b>Examples:</b></p>
                    <ol class="mx-6 mx-md-8">
                        <li class="mt-2" v-for="data in examples"><b>{{ data.kana }}</b> <br>{{ data.romaji }} <br>{{
                            data.english }}
                            <br>
                            <b>Breakdown:</b>
                            <ul class="mx-8 mx-md-8">
                                <li v-for="breakdown in data.breakdown">{{ breakdown.word }} - {{ breakdown.translation
                                    }}</li>
                            </ul>
                        </li>
                    </ol>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const title = "Japanese Addition Conjunction (と - to)";
const introduction = "In Japanese, conjunctions are used to connect words, phrases, or clauses. One of the most common addition conjunctions is 'と' (to), which is used to express the meaning of 'and' or 'with' when linking nouns or actions.";
const explanation = {
    definition: "The particle 'と' (to) is primarily used to connect two or more nouns, and it can also be used in some other contexts to express accompaniment, similarity, or condition. It’s very similar to the English word 'and'.",
    usage: [
        "1. Connecting two or more nouns",
        "2. Indicating an action done together",
        "3. Expressing similarity or condition"
    ]
};
const examples = [
    {
        kana: "りんごとバナナを食べました。",
        romaji: "Ringo to banana o tabemashita.",
        english: "I ate an apple and a banana.",
        breakdown: [
            { word: "りんご", translation: "apple" },
            { word: "と", translation: "and" },
            { word: "バナナ", translation: "banana" },
            { word: "を", translation: "object marker" },
            { word: "食べました", translation: "ate" }
        ],
        explanation: "This example shows how 'と' is used to connect two nouns ('りんご' / apple and 'バナナ' / banana). It indicates that both were eaten together."
    },
    {
        kana: "私は友達と映画を見に行きました。",
        romaji: "Watashi wa tomodachi to eiga o mini ikimashita.",
        english: "I went to watch a movie with my friend.",
        breakdown: [
            { word: "私", translation: "I" },
            { word: "は", translation: "topic marker" },
            { word: "友達", translation: "friend" },
            { word: "と", translation: "with" },
            { word: "映画", translation: "movie" },
            { word: "を", translation: "object marker" },
            { word: "見に行きました", translation: "went to watch" }
        ],
        explanation: "In this sentence, 'と' shows the relationship of accompaniment, meaning the speaker went to the movie with their friend."
    },
    {
        kana: "彼は私と同じくらい速いです。",
        romaji: "Kare wa watashi to onaji kurai hayai desu.",
        english: "He is as fast as I am.",
        breakdown: [
            { word: "彼", translation: "he" },
            { word: "は", translation: "topic marker" },
            { word: "私", translation: "I" },
            { word: "と", translation: "with" },
            { word: "同じくらい", translation: "the same as" },
            { word: "速い", translation: "fast" },
            { word: "です", translation: "is" }
        ],
        explanation: "'と' is used here to indicate similarity, meaning the speaker is comparing the speed of 'he' and 'I'."
    }
]

</script>