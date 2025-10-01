<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Question Word: 「誰」 – <em>Who?</em></h4>
                    <p class="text-justify">
                        「誰」 is used to ask about people. It can be used in formal and informal conversations. In casual
                        speech, you may hear 「だれ？」 simply by itself to mean “Who?”
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-list-item>
                        <b>Example Sentences</b>
                        <ol class="mx-8">
                            <li v-for="data in examples" class="mt-2"><strong>{{ data.jp }}</strong><br><em>{{ data.kana
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
        title: '1. Who is that person?',
        jp: 'あの人は誰ですか？',
        kana: 'あのひとはだれですか？',
        romaji: 'Ano hito wa dare desu ka?',
        en: 'Who is that person?',
        desc: 'Used to politely ask about someone you see.',
    },
    {
        title: '2. Who called you?',
        jp: '誰があなたに電話しましたか？',
        kana: 'だれがあなたにでんわしましたか？',
        romaji: 'Dare ga anata ni denwa shimashita ka?',
        en: 'Who called you?',
        desc: 'Used to ask who performed the action.',
    },
    {
        title: '3. Who is your teacher?',
        jp: 'あなたの先生は誰ですか？',
        kana: 'あなたのせんせいはだれですか？',
        romaji: 'Anata no sensei wa dare desu ka?',
        en: 'Who is your teacher?',
        desc: 'Common in classroom or school settings.',
    },
    {
        title: '4. Who will go to the party?',
        jp: '誰がパーティーに行きますか？',
        kana: 'だれがぱーてぃーにいきますか？',
        romaji: 'Dare ga paatii ni ikimasu ka?',
        en: 'Who will go to the party?',
        desc: 'Asking about future plans involving people.',
    },
    {
        title: '5. Who is at the door?',
        jp: 'ドアのところにいるのは誰ですか？',
        kana: 'どあのところにいるのはだれですか？',
        romaji: 'Doa no tokoro ni iru no wa dare desu ka?',
        en: 'Who is at the door?',
        desc: 'Used when reacting to a sound or knock.',
    },
]
</script>

<style scoped>
code {
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
}
</style>
