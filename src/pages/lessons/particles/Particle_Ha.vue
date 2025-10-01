<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="8" sm="12">
                    <h4 class="text-h5 font-weight-bold">Understanding the Japanese Particle は (wa)</h4>
                    <p>In Japanese, <b style="font-size: 1.2em;">は</b> is one of the
                        most common particles you'll come across. Although it's written as <b
                            style="font-size: 1.2em;">は</b> in
                        hiragana, it's pronounced <strong>"wa"</strong> when used as a particle. Its main job? To mark
                        the
                        <strong>topic</strong> of a sentence. Think of it like this: <b style="font-size: 1.2em;">は</b>
                        tells us
                        what the sentence is about.
                    </p>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <h6 class="text-h6 font-weight-bold">Basic Sentence Structure</h6>
                    <label><strong>[Topic] + は + [Information about the topic]</strong></label>
                    <v-list-item>Examples: </v-list-item>
                    <v-list-item class="mx-4" v-for="(data, index) in examples"><u><b>{{ data.kana }}</b></u>
                        <br />
                        Romaji: <b>{{ data.romaji }}</b> <br /> Translation: <b>{{ data.translation }}</b></v-list-item>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <h6 class="text-h6 font-weight-bold">は vs. が? (Quick Tip)</h6>
                    <label>Beginners often confuse <b>は</b> and <b>が</b>, since both can seem similar. A simple way to
                        remember
                        the difference at first: </label>
                    <v-list-item class="mx-4" v-for="(data, index) in wa_vs_ga_examples"><b>{{ data.kana }}</b>
                        <br />
                        Romaji: <b>{{ data.romaji }}</b> <br /> Translation: <b>{{ data.translation }}</b></v-list-item>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <h6 class="text-h6 font-weight-bold">When to Use は (wa)</h6>
                    <label>Use <b>は</b> when:</label>
                    <v-list-item class="mx-4">You're introducing a new topic</v-list-item>
                    <v-list-item class="mx-4">You want to talk <strong>about</strong> something or someone</v-list-item>
                    <v-list-item class="mx-4">You’re contrasting two things</v-list-item>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <h6 class="text-h6 font-weight-bold">Example of contrast:</h6>
                    <v-list-item class="mx-4"><b>さかな は すき です。でも にく は すきじゃない です。</b><br />Sakana wa suki desu. Demo niku
                        wa suki
                        janai desu. <br />I like fish. But I don’t like meat.</v-list-item>
                </v-col>
                <v-col cols="12" md="8" sm="12">
                    <v-alert icon="$vuetify" title="Final Tip: は ≠ is">
                        <v-list-item>While in English we say <b>“A is B”</b>, in Japanese <b>は</b> doesn’t mean<b>
                                “is”</b>. It just
                            shows what we’re talking about. The <strong>です (desu)</strong> part usually does
                            the job of “is” or “am”.</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const examples = [
    {
        kana: 'わたし は がくせい です。', romaji: 'Watashi wa gakusei desu.', translation: 'I am a student.'
    },
    {
        kana: 'にほんご は むずかしい です。', romaji: 'Nihongo wa muzukashii desu.', translation: 'Japanese is difficult.'
    },
]
const wa_vs_ga_examples = [
    { kana: 'わたし は たなか です。', romaji: 'Watashi wa Tanaka desu.', translation: ' As for me, I’m Tanaka. (Topic = "me")' },
    { kana: 'だれ が たなか です か？', romaji: 'Dare ga Tanaka desu ka?', translation: ' Who is Tanaka? (Subject = "Who")' },
]
</script>