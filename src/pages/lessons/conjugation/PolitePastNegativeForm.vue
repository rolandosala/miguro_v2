<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Verb Conjugation: Polite and Casual Past Negative</h4>
                    <h5 class="text-h6 font-weight-bold">1. Polite Past Negative Form（丁寧語 過去否定形）</h5>
                    <p> The polite past negative form is used in formal situations to say that something did not happen.
                        It is formed by conjugating the verb into its ます-form negative, then making it past tense: Verb
                        stem +
                        <strong>ませんでした</strong>
                    </p>
                    <p><strong>Examples:</strong></p>
                    <v-table class="table table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th>Verb</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                                <th>Polite Past Negative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="verb in politeExamples" :key="verb.base">
                                <td>{{ verb.base }}</td>
                                <td>{{ verb.kana }}</td>
                                <td>{{ verb.romaji }}</td>
                                <td>{{ verb.meaning }}</td>
                                <td>{{ verb.politePastNegative }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h5 font-weight-bold">2. Casual Past Negative Form（普通形 過去否定形）</h5>
                    <p> The casual past negative is used in informal conversation. It's formed by taking the negative
                        (ない)
                        form and replacing <strong>ない</strong> with <strong>なかった</strong>. Negative stem +
                        <strong>なかった</strong>
                    </p>
                    <p><strong>Examples:</strong></p>
                    <v-table class="table table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th>Verb</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                                <th>Casual Past Negative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="verb in casualExamples" :key="verb.base">
                                <td>{{ verb.base }}</td>
                                <td>{{ verb.kana }}</td>
                                <td>{{ verb.romaji }}</td>
                                <td>{{ verb.meaning }}</td>
                                <td>{{ verb.casualPastNegative }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts" setup>
const politeExamples = [
    {
        base: "食べる",
        kana: "たべる",
        romaji: "taberu",
        meaning: "to eat",
        politePastNegative: "tabemasen deshita"
    },
    {
        base: "行く",
        kana: "いく",
        romaji: "iku",
        meaning: "to go",
        politePastNegative: "ikimasen deshita"
    },
    {
        base: "する",
        kana: "する",
        romaji: "suru",
        meaning: "to do",
        politePastNegative: "shimasen deshita"
    },
    {
        base: "見る",
        kana: "みる",
        romaji: "miru",
        meaning: "to see/watch",
        politePastNegative: "mimasen deshita"
    }
]
const casualExamples = [
    {
        base: "飲む",
        kana: "のむ",
        romaji: "nomu",
        meaning: "to drink",
        casualPastNegative: "nomanakatta"
    },
    {
        base: "買う",
        kana: "かう",
        romaji: "kau",
        meaning: "to buy",
        casualPastNegative: "kawanakatta"
    },
    {
        base: "話す",
        kana: "はなす",
        romaji: "hanasu",
        meaning: "to speak",
        casualPastNegative: "hanasanakatta"
    },
    {
        base: "する",
        kana: "する",
        romaji: "suru",
        meaning: "to do",
        casualPastNegative: "shinakatta"
    }
]
</script>