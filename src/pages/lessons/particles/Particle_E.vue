<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Particle 「へ」(pronounced e)</h4>
                    <p>The particle へ is one of the basic direction particles in Japanese. While it is written as へ, it
                        is
                        pronounced "e" (not "he"). This often trips up beginners, so remember: written へ, spoken え!. The
                        particle へ marks the direction or destination of a movement. Think of it like the English word
                        “to” when
                        saying "go to", "come to", "head to", etc.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-list-item class="mx-6"><b><i>Example</i></b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in example">
                        <b>{{ example.kana }}</b><br />
                        Romaji: {{ example.translation }}<br />
                        Translation: {{ example.translation }}
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h6 font-weight-bold"><b>へ</b> vs <b>に</b> – What's the Difference?</h4>
                    <span>Both <b>へ</b> and <b>に</b> can indicate direction, but:</span>
                    <v-list-item class="mx-6"><b>へ</b> emphasizes the direction or movement toward a
                        place.</v-list-item>
                    <v-list-item class="mx-6"><b>に</b> emphasizes the arrival at or existence in a place.</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <span>Both are often interchangeable when talking about direction, but: <br>Examples:</span>
                    <v-list-item class="mx-6"><b>学校へ行きます</b> – I'm heading toward school. (more directional
                        nuance)</v-list-item>
                    <v-list-item class="mx-6"><b>学校に行きます</b> – I'm going to school. (more neutral/common)</v-list-item>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <v-alert icon="$vuetify" title="Tip:">
                        <v-list-item>In most cases, に is more common, but へ is still perfectly correct and often used in
                            formal writing or poetic/literary expressions.
                            <br><span><b>Use it with motion verbs like:</b></span>
                        </v-list-item>
                        <v-list-item class="mx-6">行く (iku) – to go</v-list-item>
                        <v-list-item class="mx-6">来る (kuru) – to come</v-list-item>
                        <v-list-item class="mx-6">帰る (kaeru) – to return</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const example = [
    {
        kana: '学校へ行きます。', romaji: 'Gakkou e ikimasu. ', translation: 'I go to school.', breakdown: [
            { word: '学校 (gakkou)', meaning: 'school' },
            { word: 'へ (e)', meaning: 'to (destination marker)' },
            { word: '行きます (ikimasu)', meaning: 'go' },
        ]
    },
    {
        kana: '日本へ行きたいです。', romaji: 'Nihon e ikitai desu.', translation: 'I want to go to Japan.', breakdown: [
            { word: '日本 (Nihon)', meaning: 'Japan' },
            { word: 'へ (e)', meaning: 'to (destination marker)' },
            { word: '行きたい (ikitai)', meaning: 'want to go' },
            { word: 'です (desu)', meaning: 'polite ending' },
        ]
    },
    {
        kana: '友だちの家へ来ました。', romaji: 'Tomodachi no ie e kimashita.', translation: 'I came to my friend’s house.', breakdown: [
            { word: '友だちの家 (tomodachi no ie)', meaning: 'friend’s house' },
            { word: 'へ (e)', meaning: 'to (destination marker)' },
            { word: '来ました (kimashita)', meaning: 'came' },
        ]
    },
]
</script>