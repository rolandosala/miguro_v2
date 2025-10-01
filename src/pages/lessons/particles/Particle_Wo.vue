<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The <b>を</b> (wo) Particle – The Direct Object Marker</h4>
                    <p>The <b>を</b> particle, pronounced "o" (not "wo"), is one of the most essential particles in
                        Japanese. It
                        marks the direct object of a sentence — the thing that is directly affected by the action. In
                        simple
                        terms: [Something] <b>を</b> [Action] - "Do [action] to [something]"
                    </p>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <v-list-item class="mx-4"><b>Example:</b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in examples"><b>{{ index + 1 }}. {{ example.kana
                            }}</b><br />Romaji: {{
                                example.romaji }}<br />Translation: {{ example.translation }}</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-alert icon="$vuetify" title="Quick Tips">
                        <v-list-item><b>を</b> always comes right after the object.</v-list-item>
                        <v-list-item>Even if the subject is dropped (which is common in Japanese), <b>を</b> still marks
                            the object
                            clearly.</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const examples = [
    {
        kana: '本を読みます。', romaji: 'Hon o yomimasu.', translation: 'I read a book.', breakdown: [
            { word: '本 (ほん)', meaning: 'book' },
            { word: '読みます (よみます)', meaning: 'read “(I) read a book.”' },
        ]
    },
    {
        kana: 'ごはんを食べます。', romaji: 'Gohan o tabemasu.', translation: 'I eat rice / a meal.', breakdown: [
            { word: 'ごはん', meaning: 'rice/meal' },
            { word: '食べます (たべます)', meaning: 'eat “(I) eat rice.”' },
        ]
    },
    {
        kana: '映画を見ます。', romaji: 'Eiga o mimasu.', translation: 'I watch a movie.', breakdown: [
            { word: '映画 (えいが)', meaning: 'movie' },
            { word: '見ます (みます)', meaning: 'watch “(I) watch a movie.”' },
        ]
    },
]
</script>