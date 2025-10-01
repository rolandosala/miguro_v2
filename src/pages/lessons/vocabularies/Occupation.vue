<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Words for occupation</h4>
                    <p class="text-justify">The following are some nouns for occupation: </p>

                    <v-table>
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in obj_occupations">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <p class="text-justify">When you are describing yourself or your family, use <b>教師 kyōshi</b> instead of <b>先生
                            sensei</b>.</p>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const obj_occupations = [
    { english: 'doctor', kanji: '医者', romaji: 'isha' },
    { english: 'lawyer', kanji: '弁護士', romaji: 'bengoshi' },
    { english: 'nurse', kanji: '看護師', romaji: 'kangoshi' },
    { english: 'store worker', kanji: '店員', romaji: 'ten’in' },
    { english: 'student', kanji: '学生', romaji: 'gakusei' },
    { english: 'teacher', kanji: '先生 / 教師', romaji: 'sensei/kyōshi' },
    /* { english: 'Saturday', kanji: '土曜日', romaji: 'Doyoubi' }, */
]
</script>