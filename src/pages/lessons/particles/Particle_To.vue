<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The Japanese Particle 「と」 – Meaning, Usage & Examples</h4>
                    <p>The particle と is one of the first particles Japanese learners encounter, and it has several core
                        functions. It’s often used to mean "and," "with," or to quote someone. Let’s break it down!
                    </p>
                </v-col>
                <v-col cols="12" md="8" sm="12" v-for="(data, index) in accordion">
                    <label><strong>{{ data.title }}</strong></label>
                    <v-list-item>{{ data.description }}</v-list-item>
                    <v-list-item class="mx-4"><b>Example:</b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana
                            }}</b><br />Romaji: {{
                                example.romaji }}<br />Translation: {{ example.translation }}</v-list-item>
                    <v-alert icon="$vuetify" title="Note:">
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
        id: 'collapseOne', title: '1. 「と」 as "And" (Listing Items)', description: 'This is the most straightforward use. When listing two or more specific nouns, you use と to mean "and." Structure: Noun 1 + と + Noun 2', example: [
            { kana: 'パンとバターを食べました。', romaji: 'Pan to batā o tabemashita.', translation: 'I ate bread and butter.' },
            { kana: '猫と犬が好きです。', romaji: 'Neko to inu ga suki desu.', translation: 'I like cats and dogs.' },
        ], note: '「と」 is only used when listing complete and specific items. For general incomplete lists, use や (ya) or など (nado).', collapsed: 'collapsed'
    },
    {
        id: 'collapseTwo', title: '2. 「と」 as "With" (Together with Someone)', description: 'When used with a person or living being, と can mean "with." It shows that someone is doing something together with someone else. Structure: Person + と + Verb',
        example: [
            { kana: '友だちと映画を見ました。', romaji: 'Tomodachi to eiga o mimashita.', translation: 'I watched a movie with my friend.' },
            { kana: '家族と住んでいます。', romaji: 'Kazoku to sundeimasu.', translation: 'I live with my family.' },
        ], note: 'Be careful! If you\'re talking about "with a tool" (like "with a pen"),you\'d use で instead of と.', collapsed: 'collapsed'
    },
    {
        id: 'collapseThree', title: '3. 「と」 for Quoting or Thoughts (Like “That”)', description: 'When quoting directly or expressing what someone says or thinks, use と before verbs like 言う (to say), 思う (to think), 聞く (to hear), etc. Structure: Phrase + と + 言う / 思う / 聞く etc. ',
        example: [
            { kana: '「行きたい」と言いました。', romaji: '"Ikitai" to iimashita.', translation: 'He said, "I want to go."' },
            { kana: '彼は来ないと思います。', romaji: 'Kare wa konai to omoimasu.', translation: 'I think he won’t come.' },
            { kana: '明日は雨だと聞きました。', romaji: 'Ashita wa ame da to kikimashita.', translation: 'I heard that it will rain tomorrow.' },
        ], note: 'Be careful! If you\'re talking about "with a tool" (like "with a pen"),you\'d use で instead of と.', collapsed: 'collapsed'
    },
]
</script>