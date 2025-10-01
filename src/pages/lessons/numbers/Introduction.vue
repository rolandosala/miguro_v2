<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Numbers from 1 - 10</h4>
                    <p class="text-justify"> There are two number systems in Japanese: the Chinese system and the native
                        Japanese system. The native Japanese system is a native numeral plus the native
                        counter つ tsu. It is frequently used, and it only goes up to 10 in modern
                        Japanese. </p>
                    <p class="text-justify">The Chinese system is predominantly used in business/administrative/aca
                        demic contexts. However, shi (four) and shichi (seven) in the Chinese system are
                        often replaced by yon and nana in the native Japanese system. In fact, shi, shichi,
                        and ku (a variation of kyū) are used only in reciting numerals, such as when
                        quickly counting or doing physical exercises. </p>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Number</th>
                                <th>Kanji</th>
                                <th>Chinese System</th>
                                <th>Romaji</th>
                                <th>Native System</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in numbers_1_to_10">
                                <td>{{ data.number }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.chinese }}</td>
                                <td>{{ data.romaji_chinese }}</td>
                                <td>{{ data.native }}</td>
                                <td>{{ data.romaji_native }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Numbers from 11 - 99</h4>
                    <p class="text-justify">
                        The native Japanese number system goes only through 10 in modern Japanese, so beyond that,
                        Japanese use the Chinese system. In the Chinese system, the numbers from 11 to 19 are compound
                        words consisting of jū (ten) plus one of the other digits. For example, 12 is jū-ni. The even
                        tens
                        (twenty, thirty, forty, etc.) are compound words consisting of one of the numbers plus jū (ten).
                        For
                        example, 20 is ni-jū. Beyond 20, you use the word for the even ten plus the other digit. As you
                        would expect, 23 is ni-jū-san, and 99 is kyū-jū-kyū.</p>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Number</th>
                                <th>Kanji</th>
                                <th>Chinese System</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in numbers_11_to_99">
                                <td>{{ data.number }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.chinese }}</td>
                                <td>{{ data.romaji_chinese }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Numbers from 100 to 1,000</h4>
                    <p class="text-justify">
                        The following table shows the multiples of 100, 1,000, and 10,000. Notice some sound changes
                        with the multiples of 100 (hyaku, byaku, and pyaku) and 1,000 (sen and zen).</p>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Number</th>
                                <th>Kanji</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in numbers_100_to_1000">
                                <td>{{ data.number }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.chinese }}</td>
                                <td>{{ data.romaji_chinese }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Numbers from 1,000 to 10,000</h4>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Number</th>
                                <th>Kanji</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in numbers_1000_to_10000">
                                <td>{{ data.number }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.chinese }}</td>
                                <td>{{ data.romaji_chinese }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Numbers from 10,000 to 1,000,000</h4>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Number</th>
                                <th>Kanji</th>
                                <th>Kana</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in numbers_10000_to_1000000">
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
const numbers_1_to_10 = [
    { number: 1, kanji: '一', chinese: 'いち', romaji_chinese: 'ichi', native: 'ひとつ', romaji_native: 'hitotsu' },
    { number: 2, kanji: '二', chinese: 'に', romaji_chinese: 'ni', native: 'ふたつ', romaji_native: 'futatsu' },
    { number: 3, kanji: '三', chinese: 'さん', romaji_chinese: 'san', native: 'みっつ', romaji_native: 'mittsu' },
    { number: 4, kanji: '四', chinese: 'し/よん', romaji_chinese: 'shi/yon', native: 'よっつ', romaji_native: 'yottsu' },
    { number: 5, kanji: '五', chinese: 'ご', romaji_chinese: 'go', native: 'いつつ', romaji_native: 'itsutsu' },
    { number: 6, kanji: '六', chinese: 'ろく', romaji_chinese: 'roku', native: 'むっつ', romaji_native: 'muttsu' },
    { number: 7, kanji: '七', chinese: 'しち/なな', romaji_chinese: 'shichi/nana', native: 'ななつ', romaji_native: 'nanatsu' },
    { number: 8, kanji: '八', chinese: 'はち', romaji_chinese: 'hachi', native: 'やっつ', romaji_native: 'yattsu' },
    { number: 9, kanji: '九', chinese: 'きゅう/く', romaji_chinese: 'kyuu/ku', native: 'ここのつ', romaji_native: 'kokonotsu' },
    { number: 10, kanji: '十', chinese: 'じゅう', romaji_chinese: 'juu', native: 'とお', romaji_native: 'too' },
]
const numbers_11_to_99 = [
    { number: 11, kanji: '十一', chinese: 'じゅういち', romaji_chinese: 'juu-ichi' },
    { number: 12, kanji: '十二', chinese: 'じゅうに', romaji_chinese: 'juu-ni' },
    { number: 13, kanji: '十三', chinese: 'じゅうさん', romaji_chinese: 'juu-san' },
    { number: 14, kanji: '十四', chinese: 'じゅうし/じゅうよん', romaji_chinese: 'juu-shi/juu-yon' },
    { number: 15, kanji: '十五', chinese: 'じゅうご', romaji_chinese: 'juu-go' },
    { number: 16, kanji: '十六', chinese: 'じゅうろく', romaji_chinese: 'juu-roku' },
    { number: 17, kanji: '十七', chinese: 'じゅうしち/じゅうなな', romaji_chinese: 'juu-shichi/juu-nana' },
    { number: 18, kanji: '十八', chinese: 'じゅうはち', romaji_chinese: 'juu-hachi' },
    { number: 19, kanji: '十九', chinese: 'じゅうきゅう/じゅうく', romaji_chinese: 'juu-kyuu/juu-ku' },
    { number: 20, kanji: '二十', chinese: 'にじゅう', romaji_chinese: 'ni-juu' },
    { number: 30, kanji: '三十', chinese: 'さんじゅう', romaji_chinese: 'san-juu' },
    { number: 40, kanji: '四十', chinese: 'よんじゅう', romaji_chinese: 'yon-juu' },
    { number: 50, kanji: '五十', chinese: 'ごじゅう', romaji_chinese: 'go-juu' },
    { number: 60, kanji: '六十', chinese: 'ろくじゅう', romaji_chinese: 'roku-juu' },
    { number: 70, kanji: '七十', chinese: 'ななじゅう', romaji_chinese: 'nana-juu' },
    { number: 80, kanji: '八十', chinese: 'はちじゅう', romaji_chinese: 'hachi-juu' },
    { number: 90, kanji: '九十', chinese: 'きゅうじゅう', romaji_chinese: 'kyuu-juu' },
    { number: 99, kanji: '九十九', chinese: 'きゅうじゅうきゅう', romaji_chinese: 'kyuu-juu-kyuu' },
]
const numbers_100_to_1000 = [
    { number: 100, kanji: '百', chinese: 'ひゃく', romaji_chinese: 'hyaku' },
    { number: 200, kanji: '二百', chinese: 'にひゃく', romaji_chinese: 'ni-hyaku' },
    { number: 300, kanji: '三百', chinese: 'さんびゃく', romaji_chinese: 'san-byaku' },
    { number: 400, kanji: '四百', chinese: 'よんひゃく', romaji_chinese: 'yon-hyaku' },
    { number: 500, kanji: '五百', chinese: 'ごひゃく', romaji_chinese: 'go-hyaku' },
    { number: 600, kanji: '六百', chinese: 'ろっぴゃく', romaji_chinese: 'rop-pyaku' },
    { number: 700, kanji: '七百', chinese: 'ななひゃく', romaji_chinese: 'nana-hyaku' },
    { number: 800, kanji: '八百', chinese: 'はっぴゃく', romaji_chinese: 'hap-pyaku' },
    { number: 900, kanji: '九百', chinese: 'きゅうひゃく', romaji_chinese: 'kyuu-hyaku' },
    { number: 1000, kanji: '千', chinese: 'せん', romaji_chinese: 'sen' },
]
const numbers_1000_to_10000 = [
    { number: '1,000', kanji: '千', chinese: 'せん', romaji_chinese: 'sen' },
    { number: '2,000', kanji: '二千', chinese: 'にせん', romaji_chinese: 'ni-sen' },
    { number: '3,000', kanji: '三千', chinese: 'さんぜん', romaji_chinese: 'san-zen' },
    { number: '4,000', kanji: '四千', chinese: 'よんせん', romaji_chinese: 'yon-sen' },
    { number: '5,000', kanji: '五千', chinese: 'ごせん', romaji_chinese: 'go-sen' },
    { number: '6,000', kanji: '六千', chinese: 'ろくせん', romaji_chinese: 'rop-sen' },
    { number: '7,000', kanji: '七千', chinese: 'ななせん', romaji_chinese: 'nana-sen' },
    { number: '8,000', kanji: '八千', chinese: 'はっせん', romaji_chinese: 'hap-sen' },
    { number: '9,000', kanji: '九千', chinese: 'きゅうせん', romaji_chinese: 'kyuu-sen' },
    { number: '10,000', kanji: '一万', chinese: 'いちまん', romaji_chinese: 'ichi-man' },
]
const numbers_10000_to_1000000 = [
    { number: '10,000', kanji: '一万', chinese: 'いちまん', romaji_chinese: 'ichi-man' },
    { number: '20,000', kanji: '二万', chinese: 'にまん', romaji_chinese: 'ni-man' },
    { number: '30,000', kanji: '三万', chinese: 'さんまん', romaji_chinese: 'san-man' },
    { number: '40,000', kanji: '四万', chinese: 'よんまん', romaji_chinese: 'yon-man' },
    { number: '50,000', kanji: '五万', chinese: 'ごまん', romaji_chinese: 'go-man' },
    { number: '60,000', kanji: '六万', chinese: 'ろくまん', romaji_chinese: 'rop-man' },
    { number: '70,000', kanji: '七万', chinese: 'ななまん', romaji_chinese: 'nana-man' },
    { number: '80,000', kanji: '八万', chinese: 'はっまん', romaji_chinese: 'hap-man' },
    { number: '90,000', kanji: '九万', chinese: 'きゅうまん', romaji_chinese: 'kyuu-man' },
    { number: '100,000', kanji: '十万', chinese: 'じゅうまん', romaji_chinese: 'juu-man' },
    { number: '1,000,000', kanji: '百万', chinese: 'ひゃくまん', romaji_chinese: 'hyaku-man' },
]
</script>