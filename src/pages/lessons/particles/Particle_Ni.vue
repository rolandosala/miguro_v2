<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The に (ni) Particle – Pointing to Time, Place, and Direction
                    </h4>
                    <p>The に particle is super versatile. It's used to indicate:
                        <b>Time</b> something happens
                        <b>Place</b> where something exists
                        <b>Direction</b> or <b>goal</b> of movement
                        The <b>recipient</b> of an action
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in accordion">
                    <v-list-item><b>{{ data.title }}</b> - {{ data.description }}</v-list-item>
                    <v-list-item class="mx-6"><b><i>Example</i></b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana
                            }}</b><br />Romaji: {{ example.romaji }}<br /> Translation: {{ example.translation
                        }}</v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const accordion = [
    {
        title: '1️. に(ni) for Time', description: 'に marks specific points in time (dates, hours, days of the week).',
        example: [
            { kana: '７時に起きます。', romaji: 'Shichi-ji ni okimasu.', translation: 'I wake up at 7 o\'clock.' },
            { kana: '月曜日に学校へ行きます。', romaji: 'Getsuyōbi ni gakkō e ikimasu.', translation: 'I go to school on Monday.' },
        ], note: 'Note: You don’t use に for vague time words like yesterday (きのう) or every day (まいにち).'
    },
    {
        title: '2. に(ni) for Place of Existence', description: 'Used with いる (to exist for people/animals) or ある (to exist for things) to mark where something is.',
        example: [
            { kana: 'いすの上にねこがいます。', romaji: 'Isu no ue ni neko ga imasu.', translation: 'There is a cat on the chair.' },
            { kana: '学校に先生がいます。', romaji: 'Gakkō ni sensei ga imasu.', translation: 'There is a teacher at the school.' },
        ], note: ''
    },
    {
        title: '3. に(ni) for Direction or Destination', description: 'Used with movement verbs like 行く (iku = to go), 来る (kuru = to come), 帰る (kaeru = to return).',
        example: [
            { kana: '日本に行きます。', romaji: 'Nihon ni ikimasu.', translation: 'I’m going to Japan.' },
            { kana: '家に帰ります。', romaji: 'Ie ni kaerimasu.', translation: 'I’m going home.' },
        ], note: ''
    },
    {
        title: '4. に for Recipient of an Action', description: 'When you give, show, or say something to someone, に marks the recipient.',
        example: [
            { kana: '友だちにプレゼントをあげます。', romaji: 'Tomodachi ni purezento o agemasu.', translation: 'I give a present to my friend.' },
            { kana: '先生に質問をします。', romaji: 'Sensei ni shitsumon o shimasu.', translation: 'I ask a question to the teacher.' },
        ], note: ''
    },
]
</script>