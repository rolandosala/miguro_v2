<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The Calendar</h4>
                    <p class="text-justify"> To refer to a specific day, you can combine the name of the day in a week, the name of the
                        month,
                        the name of the date in the month, and the name of the year. Unlike in English, the names of
                        months include numerals in Japanese. This section shows you how to combine these names to
                        refer to a specific day in Japanese. </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Days of the Week</h5>
                    <v-table>
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in obj_daysoftheweek">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">obj_months</h5>
                    <p class="text-justify">To express month use the counter <b>月</b>(getsu/gatsu)</p>
                    <v-table>
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in obj_months">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Day of the Month</h5>
                    <p class="text-justify"> The days of the month are very difficult to learn because the first 10 days are not systematic.
                        As
                        the following list shows, most of the days after the 10th follow an easily learned pattern:</p>
                    <v-col cols="12" md="6" sm="6">
                        <v-table>
                            <thead>
                                <tr>
                                    <th>English</th>
                                    <th>Kanji</th>
                                    <th>Romaji</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in obj_daysofthemonth">
                                    <td>{{ data.day }}</td>
                                    <td>{{ data.kanji }}</td>
                                    <td>{{ data.romaji }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>

                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Expressing Year with the counter <b>年</b>(nen)</h5>
                    <p class="text-justify"> Years are expressed using the Western system, with the counter 年 -nen, as in 2013年 ni-sen
                        jū-san-nen (2013), or using the Japanese system, with 年号 nengō (era name) and the counter -nen,
                        as in
                        平成25年 Heisei ni-jū-go-nen (Heisei 25, 2013). A new nengō is created every time a
                        new emperor ascends the throne in Japan and continues to be used until a different emperor
                        takes his place. For example, a date can be written as:</p>
                    <v-list-item>
                        <b>Examples</b>
                        <ol class="mx-8">
                            <li><b>2013年12月14日 土曜日</b><br>
                                <em>ni-sen-jū-san-nen jū-ni-gatsu jū-yokka Doyōbi</em><br>
                                <span>Saturday, December 14th, 2013</span>
                            </li>
                            <li><b>2025年5月26日 月曜日</b><br>
                                <em>ni-sen-ni-juu-go-nen go-gatsu ni-juu-roku-nichi Getsuyoubi</em><br>
                                <span>Monday, May 26th, 2025</span>
                            </li>
                        </ol>
                    </v-list-item>

                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const obj_daysoftheweek = [
    { english: 'Sunday', kanji: '日曜日', romaji: 'Nichiyoubi' },
    { english: 'Monday', kanji: '月曜日', romaji: 'Getsuyoubi' },
    { english: 'Tuesday', kanji: '火曜日', romaji: 'Kayoubi' },
    { english: 'Wednesday', kanji: '水曜日', romaji: 'Suiyoubi' },
    { english: 'Thursday', kanji: '木曜日', romaji: 'Mokuyoubi' },
    { english: 'Friday', kanji: '金曜日', romaji: 'Kinyoubi' },
    { english: 'Saturday', kanji: '土曜日', romaji: 'Doyoubi' },
]
const obj_months = [
    { english: 'January', kanji: '1月', romaji: 'ichi-gatsu' },
    { english: 'February', kanji: '2月', romaji: 'ni-gatsu' },
    { english: 'March', kanji: '3月', romaji: 'san-gatsu' },
    { english: 'April', kanji: '4月', romaji: 'shi-gatsu' },
    { english: 'May', kanji: '5月', romaji: 'go-gatsu' },
    { english: 'June', kanji: '6月', romaji: 'roku-gatsu' },
    { english: 'July', kanji: '7月', romaji: 'shichi-gatsu' },
    { english: 'August', kanji: '8月', romaji: 'hachi-gatsu' },
    { english: 'September', kanji: '9月', romaji: 'ku-gatsu' },
    { english: 'October', kanji: '10月', romaji: 'juu-gatsu' },
    { english: 'November', kanji: '11月', romaji: 'juu-ichi-gatsu' },
    { english: 'December', kanji: '12月', romaji: 'juu-ni-gatsu' },
]
const obj_daysofthemonth = [
    { day: '1st', kanji: '1日', romaji: 'tsuitachi' },
    { day: '2nd', kanji: '2日', romaji: 'futsuka' },
    { day: '3rd', kanji: '3日', romaji: 'mikka' },
    { day: '4th', kanji: '4日', romaji: 'yokka' },
    { day: '5th', kanji: '5日', romaji: 'itsuka' },
    { day: '6th', kanji: '6日', romaji: 'muika' },
    { day: '7th', kanji: '7日', romaji: 'nanoka' },
    { day: '8th', kanji: '8日', romaji: 'yooka' },
    { day: '9th', kanji: '9日', romaji: 'kokonoka' },
    { day: '10th', kanji: '10日', romaji: 'tooka' },
    { day: '11th', kanji: '11日', romaji: 'juu-ichi-nichi' },
    { day: '12th', kanji: '12日', romaji: 'juu-ni-nichi' },
    { day: '13th', kanji: '13日', romaji: 'juu-san-nichi' },
    { day: '14th', kanji: '14日', romaji: 'juu-yokka' },
    { day: '15th', kanji: '15日', romaji: 'juu-go-nichi' },
    { day: '16th', kanji: '16日', romaji: 'juu-roku-nichi' },
    { day: '17th', kanji: '17日', romaji: 'juu-shichi-nichi' },
    { day: '18th', kanji: '18日', romaji: 'juu-hachi-nichi' },
    { day: '19th', kanji: '19日', romaji: 'juu-ku-nichi' },
    { day: '20th', kanji: '20日', romaji: 'hatsuka' },
    { day: '21st', kanji: '21日', romaji: 'ni-juu-ichi-nichi' },
    { day: '22nd', kanji: '22日', romaji: 'ni-juu-ni-nichi' },
    { day: '23rd', kanji: '23日', romaji: 'ni-juu-san-nichi' },
    { day: '24th', kanji: '24日', romaji: 'ni-juu-yokka' },
    { day: '25th', kanji: '25日', romaji: 'ni-juu-go-nichi' },
    { day: '26th', kanji: '26日', romaji: 'ni-juu-roku-nichi' },
    { day: '27th', kanji: '27日', romaji: 'ni-juu-shichi-nichi' },
    { day: '28th', kanji: '28日', romaji: 'ni-juu-hachi-nichi' },
    { day: '29th', kanji: '29日', romaji: 'ni-juu-ku-nichi' },
    { day: '30th', kanji: '30日', romaji: 'san-juu-nichi' },
    { day: '31st', kanji: '31日', romaji: 'san-juu-ichi-nichi' },
]
</script>