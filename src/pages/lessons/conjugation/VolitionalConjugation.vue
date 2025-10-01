<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The Volitional Form in Japanese ～しよう / ～こう / ～ろう</h4>
                    <p>The <b>volitional form</b> is used to <i>express intention, suggestion, or invitation</i> — like
                        saying <b>“Let’s do something” </b>or <b>“I will do something”</b> in English. <br>There are two
                        styles:</p>
                    <v-list-item class="mx-md-4"><b>Casual (plain)</b>: ～しよう、～こう、～ろう</v-list-item>
                    <v-list-item class="mx-md-4"><b>Polite</b>: ～ましょう</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">How to Form the Volitional</h5>
                    <v-list-item v-for="(data, index) in groups">
                        <b>{{ data.title }}</b><br />
                        <p>{{ data.description }}</p>
                        <v-table>
                            <thead>
                                <tr>
                                    <th><b>Dictionary</b></th>
                                    <th><b>Casual Volitional</b></th>
                                    <th><b>Polite Volitional</b></th>
                                    <th><b>Meaning</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(group, index) in data.group">
                                    <td>{{ group.dictionary }}</td>
                                    <td>{{ group.casual }}</td>
                                    <td>{{ group.polite }}</td>
                                    <td>{{ group.meaning }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Example Sentences (Casual & Polite)</h5>
                    <v-row>
                        <v-col cols="12" md="6" sm="12">
                            <v-card title="Casual Style">
                                <v-card-text>
                                    <b>Example</b>
                                    <v-list-item class="mx-md-4" v-for="data in casual_example">
                                        <b>{{ data.kana }}</b><br />
                                        {{ data.romaji }}<br />
                                        {{ data.meaning }}<br />
                                    </v-list-item>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6" sm="12">
                            <v-card title="Polite Style">
                                <v-card-text>
                                    <b>Example</b>
                                    <v-list-item class="mx-md-4" v-for="data in polite_example">
                                        <b>{{ data.kana }}</b><br />
                                        {{ data.romaji }}<br />
                                        {{ data.meaning }}<br />
                                    </v-list-item>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-alert icon="$vuetify" title="Notes">
                    <ul>
                        <li>Use <b>casual volitional</b> with friends, family, or in inner monologues. <br>
                            Example: <br /><b>明日から頑張ろう。</b><br>
                            <i>Ashita kara ganbarou.</i><br>
                            I’ll do my best starting tomorrow.
                        </li>
                        <li>Use <b>polite volitional</b> in formal settings or when speaking respectfully.<br>
                            Example: <br /><b> 一緒に勉強しましょう。</b><br>
                            <i>Issho ni benkyou shimashou.</i><br>
                            Let’s study together.
                        </li>
                    </ul>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const groups = [
    {
        title: 'Group 1 Verbs (Godan verbs)', description: 'Change the u-ending to the corresponding <b>o-row + う (casual)</b>, or use the ます stem + ましょう (polite).', group: [
            { dictionary: '行く（いく）iku', casual: '行こう（いこう）ikou', polite: '行きましょう（いきましょう）ikimashou', meaning: `Let's go` },
            { dictionary: '飲む（のむ）nomu', casual: '飲もう（のもう）nomou', polite: '飲みましょう（のみましょう）nomimashou', meaning: `Let's drink` },
            { dictionary: '話す（はなす）hanasu', casual: '話そう（はなそう）hanasou', polite: '話しましょう（はなしましょう）hanashimashou', meaning: `Let's talk` },
        ]
    },
    {
        title: 'Group 2 Verbs (Ichidan verbs)', description: 'Drop the final る and add: よう for casual and ます stem + ましょう for polite', group: [
            { dictionary: '食べる（たべる）taberu', casual: '食べよう（たべよう）tabeyou', polite: '食べましょう（たべましょう）tabemashou', meaning: `Let's eat` },
            { dictionary: '見る（みる）miru', casual: '見よう（みよう）miyou', polite: '見ましょう（みましょう）mimashou', meaning: `Let's watch` },
        ]
    },
    {
        title: 'Irregular Verbs', description: '', group: [
            { dictionary: 'する suru', casual: 'しよう shiyou', polite: 'しましょう shimashou', meaning: `Let’s do` },
            { dictionary: '来る（くる）kuru', casual: '来よう（こよう）koyou', polite: '来ましょう（きましょう）kimashou', meaning: `Let’s come` },
        ]
    }
]
const polite_example = [
    { kana: '明日、海に行きましょう。', romaji: 'Ashita, umi ni ikimashou.', meaning: `Let’s go to the beach tomorrow.` },
    { kana: '映画を見ましょうか？', romaji: 'Eiga o mimashou ka?', meaning: `Shall we watch a movie?` },
    { kana: '美味しいものを食べましょう。', romaji: 'Oishii mono o tabemashou.', meaning: `Let’s eat something delicious.` },
    { kana: '宿題をしましょう。', romaji: 'Shukudai o shimashou.', meaning: `Let’s do the homework.` },
]
const casual_example = [
    { kana: '明日、海に行こう！', romaji: 'Ashita, umi ni ikou!', meaning: `Let’s go to the beach tomorrow.` },
    { kana: '映画を見ようか？', romaji: 'Eiga o miyou ka?', meaning: `Shall we watch a movie?` },
    { kana: '美味しいものを食べよう！', romaji: 'Oishii mono o tabeyou!', meaning: `Let’s eat something delicious.` },
    { kana: '宿題をしよう。', romaji: 'Shukudai o shiyou.', meaning: `I’ll do the homework.` },
]
</script>