<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Question Word: 「どこ」 – <em>Where?</em></h4>
                    <p class="text-justify">「どこ」 is used to ask about location or place. It is typically written in
                        hiragana and used with
                        the
                        particle <strong>に</strong> (indicates direction or destination) or <strong>で</strong>
                        (indicates
                        location of an
                        action).</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-list-item>
                        <b>Example Sentences</b>
                        <ol class="mx-8">
                            <li v-for="data in examples" class="mt-4"><strong>{{ data.jp }}</strong><br><em>{{ data.kana
                            }}</em><br>{{
                                        data.romaji }} <br> <i>Translation: {{ data.en }}</i></li>
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
        title: 'Where is the station?',
        jp: '駅はどこですか？',
        kana: 'えきはどこですか？',
        romaji: 'Eki wa doko desu ka?',
        en: 'Where is the station?',
        desc: 'Used when looking for a place.',
    },
    {
        title: 'Where do you live?',
        jp: 'どこに住んでいますか？',
        kana: 'どこにすんでいますか？',
        romaji: 'Doko ni sunde imasu ka?',
        en: 'Where do you live?',
        desc: 'Used to ask about someone’s residence.',
    },
    {
        title: 'Where did you buy that?',
        jp: 'それはどこで買いましたか？',
        kana: 'それはどこでかいましたか？',
        romaji: 'Sore wa doko de kaimashita ka?',
        en: 'Where did you buy that?',
        desc: '“で” marks where an action occurred.',
    },
    {
        title: 'Where will we meet?',
        jp: 'どこで会いますか？',
        kana: 'どこであいますか？',
        romaji: 'Doko de aimasu ka?',
        en: 'Where will we meet?',
        desc: 'Common in planning or arranging events.',
    },
    {
        title: 'Where is your hometown?',
        jp: 'あなたの出身はどこですか？',
        kana: 'あなたのしゅっしんはどこですか？',
        romaji: 'Anata no shusshin wa doko desu ka?',
        en: 'Where is your hometown?',
        desc: 'Used to ask about place of origin.',
    },
]
</script>
