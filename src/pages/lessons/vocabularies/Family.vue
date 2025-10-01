<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Talking about family members</h4>
                    <p class="text-justify"> To refer to your own family members, use the plain forms. To refer to someone else’s family mem
                        bers, use the polite forms. You can also use the polite forms for addressing your own family
                        members who are older than you. (See Chapter 1 for how to address one’s older family members.)
                        The following table shows the plain forms and the polite forms you can use for referring to your
                        close family members:</p>

                    <v-table>
                        <thead class="bg-primary font-weight-bold">
                            <tr>
                                <th></th>
                                <th colspan="2" class="text-center">Plain</th>
                                <th colspan="2" class="text-center">Polite</th>
                            </tr>
                            <tr>
                                <th>English</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                                <th>Kanji</th>
                                <th>Romaji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in data">
                                <td>{{ data.english }}</td>
                                <td>{{ data.kanji }}</td>
                                <td>{{ data.romaji }}</td>
                                <td>{{ data.polite }}</td>
                                <td>{{ data.polite_romaji }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
const data = [
    { english: 'father', kanji: '父', romaji: 'chichi', polite: 'お父さん', polite_romaji: 'otōsan' },
    { english: 'mother', kanji: '母', romaji: 'haha', polite: 'お母さん', polite_romaji: 'okāsan' },
    { english: 'older brother', kanji: '兄', romaji: 'ani', polite: 'お兄さん', polite_romaji: 'onīsan' },
    { english: 'older sister', kanji: '姉', romaji: 'ane', polite: 'お姉さん', polite_romaji: 'onēsan' },
    { english: 'younger brother', kanji: '弟', romaji: 'otōto', polite: '弟さん', polite_romaji: 'otōtosan' },
    { english: 'younger sister', kanji: '妹', romaji: 'imōto', polite: '妹さん', polite_romaji: 'imōtosan' },
]
</script>