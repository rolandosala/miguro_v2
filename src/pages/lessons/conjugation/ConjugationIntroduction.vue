<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-row>
                    <v-col cols="12" md="10" sm="12">
                        <h4 class="text-h5 font-weight-bold">Japanese Verb Conjugation: The Basics</h4>
                        <p>Verb conjugation is key to expressing actions in Japanese. While it might seem challenging at
                            first,
                            Japanese verbs are very regular compared to many other languages.
                        </p>
                    </v-col>
                    <v-col cols="12" md="10" sm="12">
                        <h4 class="text-h6 font-weight-bold">Verb Groups</h4>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>Group</th>
                                    <th>Also Called</th>
                                    <th>Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Group I</td>
                                    <td>Godan verbs (五段動詞)</td>
                                    <td>書く (かく / kaku), 話す (はなす / hanasu), 飲む (のむ / nomu)</td>
                                </tr>
                                <tr>
                                    <td>Group II</td>
                                    <td>Ichidan verbs (一段動詞)</td>
                                    <td>食べる (たべる / taberu), 見る (みる / miru)</td>
                                </tr>
                                <tr>
                                    <td>Group III</td>
                                    <td>Irregular verbs (不規則動詞)</td>
                                    <td>する (suru), 来る (くる / kuru)</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-col>
                    <v-col cols="12" md="10" sm="12">
                        <h4 class="text-h6 font-weight-bold">Basic Verb Conjugations</h4>
                        <v-col cols="12" md="12" sm="12" v-for="(data, index) in accordion">
                            <label><strong>{{ data.title }}</strong></label>
                            <v-table class="table align-middle">
                                <thead>
                                    <tr>
                                        <th v-for="header in data.header">{{ header }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in data.rows">
                                        <td>{{ item.form }}</td>
                                        <td>{{ item.group1 }}</td>
                                        <td>{{ item.group2 }}</td>
                                        <td>{{ item.group3 }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-col>
                    </v-col>
                    <v-col cols="12" md="10" sm="12">
                        <h4 class="text-h6 font-weight-bold">Example Sentences</h4>
                        <v-col cols="12" md="12" sm="12" v-for="(data, index) in accordion_2">
                            <label><strong>{{ data.title }}</strong></label>
                            <v-list-item class="mx-md-6" v-for="(example, index) in data.list"><b>{{ example.label }}</b>
                                <v-list-item class="mx-md-8" v-for="(ex, index) in example.sample">
                                    {{ ex.kanji }}<br />
                                    Romaji: {{ ex.romaji }}<br />
                                    Translation: {{ ex.english }}<br />
                                </v-list-item>
                            </v-list-item>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const accordion = [
    {
        title: '1. Present / Future Tense', collapse: 'collapsed', show: 'show',
        header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
        rows: [
            { form: 'Dictionary Form', group1: '話す (hanasu)', group2: '食べる (taberu)', group3: 'する (suru) / 来る (kuru)' },
            { form: 'Polite Form', group1: '話します (hanashimasu)', group2: '食べます (tabemasu)', group3: '' }],
    },
    {
        title: '2. Past Tense', collapse: 'collapsed', show: '',
        header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
        rows: [
            { form: 'Plain Past', group1: '話した (hanashita)', group2: '食べた (tabeta)', group3: 'した (shita) / 来た (kita)' },
            { form: 'Polite Past', group1: '話しました(hanashimashita)', group2: '食べました(tabemashita)', group3: 'しました (shimashita) / 来ました (kimashita)' }],
    },
    {
        title: '3. Negative Form', collapse: 'collapsed', show: '',
        header: ['Form', 'Group 1', 'Group 2', 'Group 3'],
        rows: [
            { form: 'Plain Negative', group1: '話さない (hanasanai)', group2: '食べない (tabenai)', group3: 'しない (shinai) / 来ない (konai)' },
            { form: 'Polite Negative', group1: '話しません (hanashimasen)', group2: '食べません (tabemasen)', group3: 'しません (shimasen) / 来ません (kimasen)' }],
    },
]
const accordion_2 = [
    {
        title: 'Group 1 – 話す (hanasu) – to speak', collapse: 'collapsed', show: 'show',
        list: [
            {
                label: 'Present:',
                sample: [{ kanji: '彼は日本語を話します。', kana: 'かれは にほんごを はなします。', romaji: 'Kare wa Nihongo o hanashimasu. ', english: 'He speaks Japanese.' }]
            },
            {
                label: 'Past:',
                sample: [{ kanji: '昨日、日本語を話しました。', kana: 'きのう、にほんごを はなしました。', romaji: 'Kinō, Nihongo o hanashimashita.', english: 'Yesterday, I spoke Japanese.' }]
            },
            {
                label: 'Negative:',
                sample: [{ kanji: '英語を話しません。', kana: 'えいごを はなしません。', romaji: 'Eigo o hanashimasen.', english: 'I don’t speak English.' }]
            },
        ],
    },
    {
        title: 'Group 2 – 食べる (taberu) – to eat', collapse: 'collapsed', show: '',
        list: [
            {
                label: 'Present:',
                sample: [{ kanji: '毎日、朝ごはんを食べます。', kana: 'まいにち、あさごはんを たべます。', romaji: 'Mainichi, asagohan o tabemasu.', english: 'I eat breakfast every day.' }]
            },
            {
                label: 'Past:',
                sample: [{ kanji: '寿司を食べました。', kana: 'すしを たべました。', romaji: 'Sushi o tabemashita.', english: 'I ate sushi.' }]
            },
            {
                label: 'Negative:',
                sample: [{ kanji: '肉を食べません。', kana: 'にくを たべません。', romaji: 'Niku o tabemasen.', english: 'I don’t eat meat.' }]
            },
        ],
    },
    {
        title: 'Group 3 – する (suru) – to do', collapse: 'collapsed', show: '',
        list: [
            {
                label: 'Present:',
                sample: [{ kanji: '宿題をします。', kana: 'しゅくだいを します。', romaji: 'Shukudai o shimasu.', english: 'I do homework.' }]
            },
            {
                label: 'Past:',
                sample: [{ kanji: '運動をしました。', kana: 'うんどうを しました。', romaji: 'Undō o shimashita.', english: 'I exercised. ' }]
            },
            {
                label: 'Negative:',
                sample: [{ kanji: '宿題をしません。', kana: 'しゅくだいを しません。', romaji: 'Shukudai o shimasen.', english: 'I didn’t do homework.' }]
            },
        ],
    },
]
</script>