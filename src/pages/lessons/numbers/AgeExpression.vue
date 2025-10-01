<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Expressing age with the counter <b>歳</b> <i>sai</i> </h4>
                    <p class="text-justify"> To express a person’s age, you add <b>歳</b> sai after the numeral in the Chinese system. For
                        example,
                        <b>15 歳 jū-go-sai means 15 years old</b>. You can express the age of a young child by using the
                        native
                        Japanese system also. For example, みっつ mittsu means 3 years old. To ask someone his age, say
                        何歳ですか Nan-sai desu ka (How old are you?). For elderly people, you can ask おいくつですか
                        O-ikutsu desu ka (How old are you?) to sound polite. When sai is combined with certain numer
                        als, it causes some sound change, as you can see:
                    </p>
                    <v-table>
                        <thead>
                            <tr>
                                <th>Age</th>
                                <th>Kanji</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in age">
                                <td>{{ data.number }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.chinese }}</td>
                                <td>{{ data.romaji_chinese }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const age = [
    { number: '1 year old', kanji: '1歳', chinese: 'いっさい', romaji_chinese: 'is-sai', },
    { number: '2 year\'s old', kanji: '2歳', chinese: 'にさい', romaji_chinese: 'ni-sai', },
    { number: '3 year\'s old', kanji: '3歳', chinese: 'さんさい', romaji_chinese: 'san-sai', },
    { number: '4 year\'s old', kanji: '4歳', chinese: 'よんさい', romaji_chinese: 'yon-sai', },
    { number: '5 year\'s old', kanji: '5歳', chinese: 'ごさい', romaji_chinese: 'go-sai', },
    { number: '6 year\'s old', kanji: '6歳', chinese: 'ろくさい', romaji_chinese: 'roku-sai', },
    { number: '7 year\'s old', kanji: '7歳', chinese: 'ななさい', romaji_chinese: 'nana-sai', },
    { number: '8 year\'s old', kanji: '8歳', chinese: 'はっさい', romaji_chinese: 'has-sai', },
    { number: '9 year\'s old', kanji: '9歳', chinese: 'きゅうさい', romaji_chinese: 'kyuu-sai' },
    { number: '10 year\s old', kanji: '10歳', chinese: 'じゅっさい/じっさい', romaji_chinese: 'juu-sai/jis-sai' }]

</script>