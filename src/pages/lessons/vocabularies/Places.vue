<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Words for places</h4>
                    <p class="text-justify">The following are some nouns for places: </p>

                    <v-table>
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in obj_places">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <!-- <p class="text-justify">When you are describing yourself or your family, use <b>教師 kyōshi</b> instead of <b>先生
                            sensei</b>.</p> -->
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const obj_places = [
    { english: 'apartment', kanji: 'アパート', romaji: 'apāto' },
    { english: 'bookstore', kanji: '本屋', romaji: 'hon’ya' },
    { english: 'cafe', kanji: '喫茶店', romaji: 'kissaten' },
    { english: 'department store', kanji: 'デパート', romaji: 'depāto' },
    { english: 'home', kanji: 'うち', romaji: 'uchi' },
    { english: 'hospital', kanji: '病院', romaji: 'byōin' },
    { english: 'karaoke', kanji: 'カラオケ', romaji: 'karaoke' },
    { english: 'library', kanji: '図書館 ', romaji: 'toshokan' },
    { english: 'movie theater ', kanji: '映画館', romaji: 'eigakan' },
    { english: 'park', kanji: '公園', romaji: 'kōen' },
    { english: 'post office ', kanji: '公園', romaji: 'yūbinkyoku' },
    { english: 'restaurant', kanji: 'レストラン', romaji: 'resutoran' },
    { english: 'supermarket', kanji: 'スーパー', romaji: 'sūpā' },
    { english: '(Korean style) barbecue restaurant ', kanji: '焼肉屋', romaji: 'yakinikuya' },
    { english: 'bakery', kanji: 'パン屋', romaji: 'pan’ya' },
    { english: 'bar', kanji: '飲み屋', romaji: 'nomiya' },
    { english: 'fish market', kanji: '魚屋', romaji: 'sakanaya' },
    { english: 'flower shop', kanji: '花屋', romaji: 'hanaya' },
    { english: 'Japanese-style bar', kanji: '居酒屋', romaji: 'izakaya' },
    { english: 'liquor store ', kanji: '酒屋', romaji: 'sakaya' },
    { english: 'meat store', kanji: '肉屋', romaji: 'nikuya' },
    { english: 'ramen shop', kanji: 'ラーメン屋', romaji: 'rāmen’ya' },
    { english: 'shoe store', kanji: '靴屋', romaji: 'kutsuya' },
    { english: 'sushi shop', kanji: 'すし屋', romaji: 'sushiya' },
    { english: ' toy store', kanji: 'おもちゃ屋', romaji: 'omochaya' },
]
</script>