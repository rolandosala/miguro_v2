<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Expressing Time</h4>
                    <p class="text-justify"> Time-related expressions include absolute time expressions that specify the time that you can
                        point at on a calendar or on a clock—for example, June 2, 4 PM, etc.—and relative time
                        expressions,
                        such as now, tomorrow, and last month. In addition, Japanese has many words that refer to
                        specific time periods in a day.</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Use counter <b>時</b>(ji) for absolute time and <b>分</b>(fun)
                        for
                        minutes</h5>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>Time</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                                <th>Time</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in time">
                                <td>{{ data.oclock }}</td>
                                <td>{{ data.counter_ji }}</td>
                                <td>{{ data.romaji_ji }}</td>
                                <td>{{ data.minute }}</td>
                                <td>{{ data.counter_fun }}</td>
                                <td>{{ data.romaji_fun }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <p class="text-justify">Add <b>午前 gozen (AM)</b> and <b>午後 gogo (PM)</b> before the time phrase. A half an hour (30
                        minutes) can
                        be expressed
                        by <b>半 han</b></p>
                    <p class="text-justify">Examples:</p>
                    <ul class="mx-8">
                        <li><b>午前2時15分</b> - <em>gozen ni-ji jū-go-fun</em> - <span>(2:15 AM)</span> </li>
                        <li><b>午後3時30分</b> - <em>gogo san-ji san-jup-pun</em> - <span>(3:30 PM)</span> </li>
                        <li><b>午前2時半</b> - <em> gozen ni-ji han</em> - <span>(2:30 AM)</span> </li>
                    </ul>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h6 font-weight-bold">Expressing Relative Time</h4>
                    <p class="text-justify"> specify time relative to the current moment, such as tomorrow or last year. The following list
                        shows
                        some common relative time expressions:</p>
                    <v-table>
                        <thead class="table-dark ">
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in relative_time">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
export default {
    data() {
        return {
            time: [
                { oclock: '1 o\'clock', counter_ji: '1 時', romaji_ji: 'ichi-ji', minute: '1 minute', counter_fun: '1 分', romaji_fun: 'ip-pun' },
                { oclock: '2 o\'clock', counter_ji: '2 時', romaji_ji: 'ni-ji', minute: '2 minutes', counter_fun: '2 分', romaji_fun: 'ni-fun' },
                { oclock: '3 o\'clock', counter_ji: '3 時', romaji_ji: 'san-ji', minute: '3 minutes', counter_fun: '3 分', romaji_fun: 'san-pun' },
                { oclock: '4 o\'clock', counter_ji: '4 時', romaji_ji: 'yo-ji', minute: '4 minutes', counter_fun: '4 分', romaji_fun: 'yon-pun' },
                { oclock: '5 o\'clock', counter_ji: '5 時', romaji_ji: 'go-ji', minute: '5 minutes', counter_fun: '5 分', romaji_fun: 'go-fun' },
                { oclock: '6 o\'clock', counter_ji: '6 時', romaji_ji: 'roku-ji', minute: '6 minutes', counter_fun: '6 分', romaji_fun: 'rop-pun' },
                { oclock: '7 o\'clock', counter_ji: '7 時', romaji_ji: 'shichi-ji', minute: '7 minutes', counter_fun: '7 分', romaji_fun: 'nana-fun' },
                { oclock: '8 o\'clock', counter_ji: '8 時', romaji_ji: 'hachi-ji', minute: '8 minutes', counter_fun: '8 分', romaji_fun: 'hap-pun(hachi-fun)' },
                { oclock: '9 o\'clock', counter_ji: '9 時', romaji_ji: 'ku-ji', minute: '9 minutes', counter_fun: '9 分', romaji_fun: 'kyuu-fun' },
                { oclock: '10 o\'clock', counter_ji: '10 時', romaji_ji: 'juu-ji', minute: '10 minutes', counter_fun: '10 分', romaji_fun: 'jup-pun(jip-pun)' },
                { oclock: '11 o\'clock', counter_ji: '11 時', romaji_ji: 'juu-ichi-ji', minute: '15 minutes', counter_fun: '11 分', romaji_fun: 'juu-go-fun' },
                { oclock: '12 o\'clock', counter_ji: '12 時', romaji_ji: 'juu-ni-ji', minute: '30 minutes', counter_fun: '12 分', romaji_fun: 'san-jup-pun' },
            ],
            relative_time: [
                { english: 'last month', kanji: '先月', romaji: 'sengetsu' },
                { english: 'last week', kanji: '先週', romaji: 'senshuu' },
                { english: 'last year', kanji: '去年', romaji: 'kyonen' },
                { english: 'next month', kanji: '来月', romaji: 'raigetsu' },
                { english: 'next week', kanji: '来週', romaji: 'raishuu' },
                { english: 'next year', kanji: '来年', romaji: 'rainen' },
                { english: 'now', kanji: '今', romaji: 'ima' },
                { english: 'this month', kanji: '今月', romaji: 'kongetsu' },
                { english: 'this morning', kanji: '今朝', romaji: 'kesa' },
                { english: 'this week', kanji: '今週', romaji: 'konshuu ' },
                { english: 'this year', kanji: '今年', romaji: 'kotoshi' },
                { english: 'today', kanji: '今日', romaji: 'kyou' },
                { english: 'tomorrow', kanji: 'あした／明日', romaji: 'ashita/asu(myounichi)' },
                { english: 'tonight', kanji: '今晩', romaji: 'konban' },
                { english: 'yesterday', kanji: '昨日', romaji: 'kinou/sakujitsu' },
            ]
        }
    }
}
</script>