<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Question Word: 「いつ」 – <em>When?</em></h4>
                    <p class="text-justify">
                        The word <strong>いつ</strong> is used to ask about time — when something happened, will happen,
                        or is
                        happening. It’s typically used with verbs related to time or events.
                    </p>
                    <p class="text-justify">
                        <strong>いつ</strong> is always written in <strong>hiragana</strong> and is not usually associated
                        with a kanji.
                    </p>
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
        title: '1. When is your birthday?',
        jp: '誕生日はいつですか？',
        kana: 'たんじょうびはいつですか？',
        romaji: 'Tanjoubi wa itsu desu ka?',
        en: 'When is your birthday?',
        desc: 'Used to ask about someone’s birthday date.',
    },
    {
        title: '2. When are you going to Japan?',
        jp: 'いつ日本に行きますか？',
        kana: 'いつにほんにいきますか？',
        romaji: 'Itsu Nihon ni ikimasu ka?',
        en: 'When are you going to Japan?',
        desc: 'Used to ask about future travel plans.',
    },
    {
        title: '3. When did you come here?',
        jp: 'いつここに来ましたか？',
        kana: 'いつここにきましたか？',
        romaji: 'Itsu koko ni kimashita ka?',
        en: 'When did you come here?',
        desc: 'Used to ask about a past action.',
    },
    {
        title: '4. When will the meeting start?',
        jp: '会議はいつ始まりますか？',
        kana: 'かいぎはいつはじまりますか？',
        romaji: 'Kaigi wa itsu hajimarimasu ka?',
        en: 'When will the meeting start?',
        desc: 'Useful in formal or work settings.',
    },
    {
        title: '5. When do you usually wake up?',
        jp: '普段はいつ起きますか？',
        kana: 'ふだんはいつおきますか？',
        romaji: 'Fudan wa itsu okimasu ka?',
        en: 'When do you usually wake up?',
        desc: 'Used to ask about routine or habit.',
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
