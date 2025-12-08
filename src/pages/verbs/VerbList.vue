<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold">Basic Dictionary Verb Forms</h4>
                <v-table>
                    <thead>
                        <tr>
                            <th>Kanji</th>
                            <th>Romaji</th>
                            <th>Meaning</th>
                            <th>Example</th>
                            <th>Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="x in verbList">
                            <td><b>{{ x.kanji }}</b></td>
                            <td>{{ x.romaji }}</td>
                            <td>{{ x.meaning }}</td>
                            <td>{{ x.example }}</td>
                            <td>{{ x.translation }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const verbList = [
    { kanji: '取る', romaji: 'toru', meaning: 'take', example: 'Watashi wa sushi o torimashita.', translation: 'I took a sushi.' },
    { kanji: '売る', romaji: 'uru', meaning: 'sell', example: 'Watashitachi wa sakana urimasu.', translation: 'We sell a fish.' },
    { kanji: '始まる', romaji: 'hajimaru', meaning: 'start', example: 'Paatte wa hajimarimashita', translation: 'The has started.' },
    { kanji: '作る', romaji: 'tsukuru', meaning: 'make', example: 'Haha wa keki o tsukurimasu.', translation: 'Mother is making a cake.' },
    { kanji: '読む', romaji: 'yomu', meaning: 'read', example: 'Chichi wa shinbun o yomimasu.', translation: 'Father is reading a newspaper' },
    { kanji: '飲む', romaji: 'nomu', meaning: 'drink', example: 'Watashi wa beru o nomitai desu.', translation: 'I want to drink a beer.' },
    { kanji: '買う', romaji: 'kau', meaning: 'buy', example: 'Ani wa kaban atarashi o kaimashita.', translation: 'My sister bought a new bag.' },
    { kanji: '書く', romaji: 'kaku', meaning: 'write', example: 'Watashi wa tegami o kakimasu.', translation: 'I write a letter.' },
    { kanji: '泳ぐ', romaji: 'oyogu', meaning: 'swim', example: 'Sakana ga mizu o oyogimashita', translation: 'The fish swam on the water.' },
    { kanji: '運ぶ', romaji: 'hakobu', meaning: 'carry', example: 'Watashi wa ookii ki o hakobimasu', translation: 'I carry a big tree.' },
    { kanji: '待つ', romaji: 'matsu', meaning: 'wait', example: 'Matchimasu', translation: 'Please wait' },
    { kanji: '話す', romaji: 'hanasu', meaning: 'speak', example: 'Watashi wa chotto nihongo o hanashimasu.', translation: 'I can speak a bit of nihongo.' },
    { kanji: '変える', romaji: 'kaeru', meaning: 'change', example: '', translation: '' },
    { kanji: '着る', romaji: 'kiru', meaning: 'wear', example: '', translation: '' },
    { kanji: '食べる', romaji: 'taberu', meaning: 'eat', example: 'Kinou wa sushi o tabemashita.', translation: 'I ate sushi yesterday.' },
    { kanji: '寝る', romaji: 'neru', meaning: 'sleep', example: 'Watashi wa gogo juu-ji ni nemasu.', translation: 'I sleep at 10 PM' },
    { kanji: '帰る', romaji: 'kaeru', meaning: 'return', example: '', translation: '' },
    { kanji: '切る', romaji: 'kiru', meaning: 'cut', example: '', translation: '' },
    { kanji: '走る', romaji: 'hashiru', meaning: 'run', example: '', translation: '' },
    { kanji: 'しゃべる', romaji: 'shaberu', meaning: 'chat', example: '', translation: '' },
    { kanji: '掃除する', romaji: 'sōji suru', meaning: 'clean', example: 'Watashi wa heya o soji shimasu.', translation: 'I\'ve clean my room' },
    { kanji: '来る', romaji: 'kuru', meaning: 'come', example: 'Kinou wa depato ni kimashita', translation: 'I was in the department store yesterday' },
    { kanji: 'する', romaji: 'suru', meaning: 'do', example: '', translation: '' },
    { kanji: '洗濯する', romaji: 'sentaku suru', meaning: 'do laundry', example: '', translation: '' },
    { kanji: '飲む', romaji: 'nomu', meaning: 'drink', example: '', translation: '' },
    { kanji: '行く', romaji: 'iku', meaning: 'go', example: '', translation: '' },
    { kanji: 'コピーする', romaji: 'kopī suru', meaning: 'make a copy', example: '', translation: '' },
    { kanji: '勉強する', romaji: 'benkyō-suru', meaning: 'study', example: '', translation: '' },
    { kanji: '起きる', romaji: 'okiru', meaning: 'wake up', example: '', translation: '' },
    { kanji: 'なる', romaji: 'naru', meaning: 'become', example: '', translation: '' },
    { kanji: '聞く', romaji: 'kiku', meaning: 'listen', example: '', translation: '' },
    { kanji: '歩く', romaji: 'aruku', meaning: 'walk', example: '', translation: '' },
    { kanji: '貸す', romaji: 'kasu', meaning: 'lend', example: '', translation: '' },
    { kanji: '会う', romaji: 'au', meaning: 'meet', example: '', translation: '' },
    { kanji: '洗う', romaji: 'arau', meaning: 'wash', example: '', translation: '' },
    { kanji: '持つ', romaji: 'motsu', meaning: 'hold', example: '', translation: '' },
    { kanji: '休む', romaji: 'yasumu', meaning: 'rest', example: '', translation: '' },
    { kanji: '住む', romaji: 'sumu', meaning: 'reside, live', example: '', translation: '' },
    { kanji: '死ぬ', romaji: 'shinu', meaning: 'die', example: '', translation: '' },
    { kanji: '選ぶ', romaji: 'erabu', meaning: 'select', example: '', translation: '' },
    { kanji: '入る', romaji: 'hairu', meaning: 'enter', example: '', translation: '' },
    { kanji: '走る', romaji: 'hashiru', meaning: 'run', example: '', translation: '' },
    { kanji: '開ける', romaji: 'akeru', meaning: 'open', example: '', translation: '' },
    { kanji: '閉める', romaji: 'shimeru', meaning: 'close', example: '', translation: '' },
    { kanji: 'あげる', romaji: 'ageru', meaning: 'give', example: '', translation: '' },
    { kanji: '知る', romaji: 'shiru', meaning: 'get to know', example: '', translation: '' },
    { kanji: 'つける', romaji: 'tsukeru', meaning: 'turn on', example: '', translation: '' },
    { kanji: '捨てる', romaji: 'suteru', meaning: 'throw away', example: '', translation: '' },
    { kanji: '覚える', romaji: 'oboeru', meaning: 'memorize', example: '', translation: '' },
]
</script>