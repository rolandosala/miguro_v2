<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Question Word: 「なぜ」 / 「どうして」 – <em>Why?</em></h4>
                    <p class="text-justify">
                        「なぜ」 is a formal way to ask "why" in Japanese. It is often used in writing or formal speech.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-list-item>
                        <b>Example Sentences</b>
                        <ol class="mx-8">
                            <li v-for="data in examples" class="mt-4"><strong>{{ data.jp }}</strong><br><em>{{ data.kana
                            }}</em><br>{{
                                        data.romaji }} <br> <i>Translation: {{ data.en }}</i> <br><b
                                    style="color: blue">Description: {{
                                        data.desc }}</b></li>
                        </ol>
                    </v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts" setup>
const examples = [
    {
        title: '1. Why did you come to Japan?',
        jp: 'なぜ日本に来ましたか？',
        kana: 'なぜひほんにきましたか？',
        romaji: 'Naze Nihon ni kimashita ka?',
        en: 'Why did you come to Japan?',
        desc: 'Formal usage of 「なぜ」 to ask reason.',
    },
    {
        title: '2. Why are you crying?',
        jp: 'どうして泣いているの？',
        kana: 'どうしてないているの？',
        romaji: 'Doushite naite iru no?',
        en: 'Why are you crying?',
        desc: 'Casual usage of 「どうして」 in conversation.',
    },
    {
        title: '3. Why did you not call me?',
        jp: 'なぜ電話をかけなかったのですか？',
        kana: 'なぜひでんわをかけなかったのですか？',
        romaji: 'Naze denwa o kakenakatta no desu ka?',
        en: 'Why didn’t you call me?',
        desc: 'Formal question about a past action.',
    },
    {
        title: '4. Why don’t you eat sushi?',
        jp: 'どうして寿司を食べないの？',
        kana: 'どうしてすしをたべないの？',
        romaji: 'Doushite sushi o tabenai no?',
        en: 'Why don’t you eat sushi?',
        desc: 'Casual question about a habit or preference.',
    },
]
</script>

<style scoped>
.timeline {
    position: relative;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 4px solid #0d6efd;
}

.timeline-item {
    position: relative;
}

.timeline-icon {
    position: absolute;
    left: -40px;
    top: 0;
    width: 32px;
    height: 32px;
    font-weight: bold;
    font-size: 1.2rem;
}

code {
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
}
</style>
