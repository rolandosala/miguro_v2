<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Particle: まで (made)</h4>
                    <p>The particle まで is commonly used in Japanese to indicate "until" a certain point in time or "up
                        to" a
                        certain place or limit. It shows the end point of an action or state.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in accordion">
                    <label><strong>{{ index + 1 }}. {{ data.title }}</strong></label>
                    <v-list-item>{{ data.description }}</v-list-item>
                    <v-list-item class="mx-4"><b>Example:</b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana
                            }}</b><br />Romaji: {{
                                example.romaji }}<br />Translation: {{ example.translation }}</v-list-item>
                    <v-alert icon="mdi-information" title="Note:" v-if="data.note != ''">
                        <v-list-item>{{ data.note }}</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
const accordion = [
    {
        title: ' Time Limit – “Until”', description: 'Use まで to express that something happens until a certain time.',
        example: [
            { kana: '午後5時まで働きます。', romaji: 'Gogo go-ji made hatarakimasu.', translation: 'I work until 5 PM.' },
            { kana: '来週までにレポートを出してください。', romaji: 'Raishuu made ni repooto o dashite kudasai.', translation: 'Please submit the report by next week.' },
        ], note: 'While "までに" means "by (a deadline)", just "まで" focuses on the duration or endpoint.'
    },
    {
        title: ' Place Limit – “Up to”', description: 'Use まで to describe the endpoint of movement or distance.',
        example: [
            { kana: '駅まで歩きます。', romaji: 'Eki made arukimasu. ', translation: 'I walk to the station.' },
            { kana: '京都まで新幹線で行きました。', romaji: 'Kyouto made shinkansen de ikimashita.', translation: 'I went as far as Kyoto by bullet train.' },
        ], note: ''
    },
    {
        title: ' Extent – “Even” (emphasizing limits)', description: 'Sometimes, まで can be used for emphasis, like saying “even…” to show something surprising or extreme.',
        example: [
            { kana: '子どもまで泣き出した。', romaji: 'Kodomo made nakidashita.  ', translation: 'Even the children started crying.' },
            { kana: '鳥まで逃げてしまった。', romaji: 'Tori made nigete shimatta.', translation: 'Even the birds ran away.' },
        ], note: ''
    },
    {
        title: ' Common Pair: から (kara) ～ まで (made)', description: 'These two are often paired to show a range: “from ～ to ～”',
        example: [
            { kana: '9時から5時まで働きます。', romaji: 'Ku-ji kara go-ji made hatarakimasu. ', translation: 'I work from 9 to 5.' },
        ], note: ''
    },
]
</script>