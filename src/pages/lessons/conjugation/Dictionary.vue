<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Dictionary Form（辞書形・じしょけい）</h4>
                    <p>The dictionary form is the basic, unconjugated form of a verb in Japanese. It's called the
                        "dictionary
                        form" because it's the form you'll find in dictionaries.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Examples:</strong></label>
                    <v-list-item class="mx-md-6" v-for="(example, index) in examples"><strong>{{ example.kanji
                            }}</strong><em>{{
                                example.kana }}</em> - {{ example.romaji }} {{ example.english }}
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Key Points:</strong></label>
                    <v-list-item class="mx-md-6" v-for="(keypoints, index) in keypoints">{{ keypoints }}</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Sentence example:</strong></label>
                    <v-list-item class="mx-md-6" v-for="example in sentence_examples"><strong>{{ example.kanji
                            }}</strong><em>{{
                                example.romaji
                            }}</em>{{ example.english }}</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Verb Groups: Godan vs Ichidan</strong></label>
                    <v-table class="table">
                        <thead>
                            <tr>
                                <th>Verb Group</th>
                                <th>Example Verbs</th>
                                <th>Conjugation Pattern</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in verb_group">
                                <td>{{ data.group }}</td>
                                <td>
                                    <ul>
                                        <li v-for="sample in data.sample">{{ sample }}</li>
                                    </ul>
                                </td>
                                <td>{{ data.desc }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Key Differences</strong></label>
                    <v-list-item class="mx-md-6"><strong>Godan Verbs (五段):</strong> These verbs change depending on the
                        final
                        syllable. For example, <strong>kaku</strong> (to write) becomes <strong>kaki</strong> when
                        conjugated
                        into the <strong>te-form</strong> (書いて *kaite*).
                    </v-list-item>
                    <v-list-item class="mx-md-6"><strong>Ichidan Verbs (一段):</strong> These verbs are simpler since they
                        all follow
                        a regular pattern of conjugation. The final <strong>-ru</strong> drops, and the root remains
                        unchanged. For
                        example, <strong>taberu</strong> (to eat) becomes <strong>tabe</strong> when conjugated into the
                        <strong>te-form</strong> (食べて *tabete*).
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>How to Identify Godan vs Ichidan Verbs:</strong></label>
                    <v-list-item class="mx-md-6"><strong>Godan verbs:</strong> Usually end in <strong>-u</strong>, but they
                        can end in various
                        syllables like <strong>-ku</strong>, <strong>-su</strong>, <strong>-mu</strong>,
                        <strong>-ru</strong>, etc.
                    </v-list-item>
                    <v-list-item class="mx-md-6"><strong>Ichidan verbs:</strong> End specifically in <strong>-eru</strong>
                        or <strong>-iru</strong>.
                    </v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
const examples = [
    { kanji: '書く', kana: '(かく)', romaji: '(kaku)', english: '– to write' },
    { kanji: '食べる', kana: '(たべる)', romaji: '(taberu)', english: '– to eat' },
    { kanji: 'する', kana: '', romaji: '(suru)', english: '– to do' },
    { kanji: '来る', kana: '(くる)', romaji: '(kuru)', english: '– to come' },
]
const keypoints = ['Used in casual speech with friends or people you’re close to.', 'It is the base form used to conjugate into other forms like masu,te,past, etc.', 'The ending of the verb tells you which verb group it belongs to (Godan, Ichidan, or Irregular), which affects how it conjugates.']
const sentence_examples = [
    { kanji: '本を読む', kana: '()', romaji: '(Hon o yomu.)', english: '– (I) read a book.' },
    { kanji: '寿司を食べる', kana: '()', romaji: '(Sushi o taberu.)', english: '– (I) eat sushi.' },
]
const verb_group = [
    { group: 'Godan (五段)', sample: ['書く(かく) – to write', '話す(はなす) – to speak', '飲む(のむ) – to drink'], desc: 'Verbs end in -u, and the final -u changes in conjugation (e.g., -ku, -su, -mu)' },
    { group: 'Ichidan (一段)', sample: ['食べる(たべる) – to eat', '見る(みる) – to see', '寝る(ねる) – to sleep'], desc: 'Verbs end in -eru or -iru, and the final -ru drops off in conjugation, leaving the stem' },
]
</script>