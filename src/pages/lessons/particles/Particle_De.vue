<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Particle 「で」 – Mastering One of the Most Versatile
                        Particles
                    </h4>
                    <p>The particle <b>「で」</b> is one of the most useful tools in the Japanese language. It’s used to
                        indicate where an
                        action takes place, the means or method used to do something, and sometimes even the cause or
                        reason
                        behind an event. Let’s break it down with simple explanations and examples.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in accordion">
                    <v-list-item><b>{{ data.title }}</b> - {{ data.description }}</v-list-item>
                    <v-list-item class="mx-6"><b><i>Example</i></b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana
                            }}</b><br />Romaji: {{
                                example.romaji }}<br /> Translation: {{ example.translation }}</v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
const accordion = [
    {
        title: '1. 「で」 as the Place of Action', description: 'When you want to say where something happens, use 「で」. Pattern: [Place] + で + [Action]',
        example: [
            {
                kana: '学校で勉強します。', romaji: 'Gakkō de benkyō shimasu. ', translation: 'I study at school.', breakdown: [
                    { word: '学校 (gakkō)', meaning: 'school' },
                    { word: 'で', meaning: 'at (indicating place where the action occurs)' },
                    { word: '勉強します (benkyō shimasu)', meaning: 'study (polite form)' },
                ], note: 'Function of で: Marks the place where the action of studying is happening — at school.'
            },
            {
                kana: 'カフェで友だちに会いました。', romaji: 'Kafe de tomodachi ni aimashita.', translation: 'I met my friend at a café.', breakdown: [
                    { word: 'カフェ (kafe)', meaning: 'café' },
                    { word: 'で', meaning: 'at (indicating place where the action occurs)' },
                    { word: '友だちに (tomodachi ni)', meaning: 'to my friend / with my friend (target of the action)' },
                    { word: '会いました (aimashita)', meaning: 'met (past tense of 会う)' },
                ], note: 'Function of で: Indicates where the meeting took place — at the café.'
            },
        ], note: 'Tip: Don’t confuse this with the particle に, which is used for destinations or existence (like “I went to school” → 学校に行きました).'
    },
    {
       title: '2. 「で」 as the Means or Tool', description: 'Use 「で」 to describe how or with what something is done. Pattern: [Tool/Method] + で + [Action]',
        example: [
            {
                kana: 'バスで行きます。', romaji: 'Basu de ikimasu.', translation: 'I go by bus.', breakdown: [
                    { word: 'バス (basu)', meaning: 'bus' },
                    { word: 'で', meaning: 'by (means of transportation)' },
                    { word: '行きます (ikimasu)', meaning: 'go (polite form)' },
                ], note: 'Function of で: Expresses the method of transportation — by bus.'
            },
            {
                kana: 'はしで食べます。', romaji: 'Hashi de tabemasu.', translation: 'I eat with chopsticks.', breakdown: [
                    { word: 'はし (hashi)', meaning: 'chopsticks' },
                    { word: 'で', meaning: 'with / using (tool used)' },
                    { word: '食べます (tabemasu)', meaning: 'eat (polite form)' },
                ], note: 'Function of で: Shows the tool or instrument used for the action — using chopsticks.'
            },
            {
                kana: '日本語で話しましょう。', romaji: 'Nihongo de hanashimashou.', translation: 'Let’s speak in Japanese.', breakdown: [
                    { word: '日本語 (nihongo)', meaning: 'Japanese (language)' },
                    { word: 'で', meaning: 'in (means of communication)' },
                    { word: '話しましょう (hanashimashou)', meaning: 'let’s speak' },
                ], note: 'Function of で: Shows the language being used as the method of communication — in Japanese.'
            },
        ], note: 'Think of 「で」 here as "using" or "by means of."'
    },
    {
       title: '3. 「で」 as the Cause or Reason', description: 'In some cases, 「で」 can express a cause or reason, usually with emotions or natural events. Pattern: [Reason] + で + [Result]',
        example: [
            {
                kana: '病気で学校を休みました。', romaji: 'Byōki de gakkō o yasumimashita.', translation: 'I missed school because of illness.', breakdown: [
                    { word: '病気 (byōki)', meaning: 'illness' },
                    { word: 'で', meaning: 'due to (cause or reason)' },
                    { word: '学校を (gakkō o)', meaning: 'school (object of "missed")' },
                    { word: '休みました (yasumimashita)', meaning: 'took a break / was absent' },
                ], note: 'Function of で: Indicates reason for the absence — because of illness.'
            },
            {
                kana: '地震で電車が止まりました。', romaji: 'Jishin de densha ga tomarimashita.', translation: 'The train stopped due to the earthquake.', breakdown: [
                    { word: '地震 (jishin)', meaning: 'earthquake' },
                    { word: 'で', meaning: 'due to (cause)' },
                    { word: '電車が (densha ga)', meaning: 'train (subject)' },
                    { word: '止まりました (tomarimashita)', meaning: 'stopped (polite past)' },
                ], note: 'Function of で: Explains why the train stopped — because of the earthquake.'
            },

        ], note: ''
    },
]
</script>