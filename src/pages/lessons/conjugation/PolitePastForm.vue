<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Verb Conjugation: Polite Past & Casual Past Forms</h4>
                    <p>In Japanese, verbs change depending on formality and tense. Two common past forms:</p>
                    <v-list-item class="mx-md-6"><strong>Polite Past (〜ました / ~mashita)</strong></v-list-item>
                    <v-list-item class="mx-md-6"><strong>Casual Past (〜た / ~ta form)</strong></v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Polite Past Form (〜ました)</h5>
                    <p>Used in formal or respectful settings. Replace <code>ます</code> with <code>ました</code>.</p>
                    <v-table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Verb</th>
                                <th>Dictionary</th>
                                <th>Polite Past</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in politePastTable" :key="index">
                                <td>{{ row.verb }}</td>
                                <td>{{ row.dictionary }}</td>
                                <td>{{ row.politePast }}</td>
                                <td>{{ row.kana }}</td>
                                <td>{{ row.romaji }}</td>
                                <td>{{ row.meaning }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Casual Past Form (〜た)</h5>
                    <p>Used with friends, family, or in informal situations. Based on verb group and ending.</p>
                    <v-table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Ending</th>
                                <th>Change To</th>
                                <th>Example</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in casualPastRules" :key="index">
                                <td>{{ row.ending }}</td>
                                <td>{{ row.changeTo }}</td>
                                <td>{{ row.example }}</td>
                                <td>{{ row.kana }}</td>
                                <td>{{ row.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Irregular Verbs</h5>
                    <v-table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Verb</th>
                                <th>Past</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in irregularVerbs" :key="index">
                                <td>{{ row.verb }}</td>
                                <td>{{ row.past }}</td>
                                <td>{{ row.kana }}</td>
                                <td>{{ row.romaji }}</td>
                                <td>{{ row.meaning }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <h5 class="text-h6 font-weight-bold">Summary Chart</h5>
                    <v-table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Verb</th>
                                <th>Polite Past</th>
                                <th>Casual Past</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in summaryChart" :key="index">
                                <td>{{ row.verb }}</td>
                                <td>{{ row.polite }}</td>
                                <td>{{ row.casual }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <v-alert icon="$vuetify" title="Tip">
                        Use <strong>polite past</strong> in formal/professional settings. Use
                        <strong>casual past</strong> with friends or texting.
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
const politePastTable = [
    { verb: "食べる", dictionary: "たべる", politePast: "食べました", kana: "たべました", romaji: "tabemashita", meaning: "ate" },
    { verb: "飲む", dictionary: "のむ", politePast: "飲みました", kana: "のみました", romaji: "nomimashita", meaning: "drank" },
    { verb: "行く", dictionary: "いく", politePast: "行きました", kana: "いきました", romaji: "ikimashita", meaning: "went" },
    { verb: "来る", dictionary: "くる", politePast: "来ました", kana: "きました", romaji: "kimashita", meaning: "came" },
    { verb: "する", dictionary: "する", politePast: "しました", kana: "しました", romaji: "shimashita", meaning: "did" },
];

const casualPastRules = [
    { ending: "う, つ, る", changeTo: "った", example: "会う → 会った", kana: "あう → あった", romaji: "au → atta" },
    { ending: "ぶ, む, ぬ", changeTo: "んだ", example: "飲む → 飲んだ", kana: "のむ → のんだ", romaji: "nomu → nonda" },
    { ending: "く", changeTo: "いた", example: "書く → 書いた", kana: "かく → かいた", romaji: "kaku → kaita" },
    { ending: "ぐ", changeTo: "いだ", example: "泳ぐ → 泳いだ", kana: "およぐ → およいだ", romaji: "oyogu → oyoida" },
    { ending: "す", changeTo: "した", example: "話す → 話した", kana: "はなす → はなした", romaji: "hanasu → hanashita" },
];

const irregularVerbs = [
    { verb: "する", past: "した", kana: "した", romaji: "shita", meaning: "did" },
    { verb: "来る", past: "来た", kana: "きた", romaji: "kita", meaning: "came" },
];

const summaryChart = [
    { verb: "食べる (to eat)", polite: "食べました (tabemashita)", casual: "食べた (tabeta)" },
    { verb: "飲む (to drink)", polite: "飲みました (nomimashita)", casual: "飲んだ (nonda)" },
    { verb: "行く (to go)", polite: "行きました (ikimashita)", casual: "行った (itta)" },
    { verb: "する (to do)", polite: "しました (shimashita)", casual: "した (shita)" },
    { verb: "来る (to come)", polite: "来ました (kimashita)", casual: "来た (kita)" },
];
</script>
