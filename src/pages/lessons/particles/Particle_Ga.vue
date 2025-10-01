<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The が "Ga" Particle in Japanese: Understanding Its Role</h4>
                    <p>In Japanese, particles are used to mark the relationships between words in a sentence. One of the
                        most
                        important and commonly used particles is "が" (ga). While it can be a bit tricky for beginners,
                        understanding the "ga" particle is essential for mastering Japanese grammar. The "ga" particle
                        is often
                        translated as "subject marker" in English, but it has several nuanced uses. Here, we\'ll explore
                        its
                        primary functions with examples to help you understand how it works.
                    </p>
                </v-col>
                <v-col cols="12" md="8" sm="12" v-for="(data, index) in accordion">
                    <label><strong>{{ data.title }}</strong></label>
                    <v-list-item>{{ data.paragraph }}</v-list-item>
                    <v-list-item class="mx-4"><b>Example:</b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana
                            }}</b><br />Romaji: {{ example.romaji }}<br />Translation: {{ example.translation
                        }}</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-alert icon="$vuetify" title="Conclusion">
                        <v-list-item>The <b>"が"</b> particle is a crucial part of Japanese grammar, especially for
                            indicating the subject of a sentence. It can also emphasize certain elements, specify
                            particular items, or form questions. Once
                            you become comfortable with its various uses, you'll find that it plays a vital role in
                            helping you
                            communicate clearly and effectively in Japanese. <br>
                            Remember to practice with examples, and you'll soon master the "ga" particle!</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const accordion = [
    {
        id: 'collapseOne', title: '1. "Ga" as a Subject Marker', paragraph: 'In Japanese, the subject of a sentence is often marked by the particle "が" (ga). This helps clarify who or what is performing the action in the sentence. While English often uses word order to determine the subject, Japanese relies more on particles like "が."',
        example: [
            {
                kana: 'ねこがいます。', romaji: 'Neko ga imasu. ', translation: '"There is a cat."', breakdown: [
                    { word: 'ねこ (neko)', translation: 'cat' },
                    { word: 'が', translation: 'marks it as the subject of the sentence' },
                    { word: 'います (imasu)', translation: 'to exist [used for living things.]' },
                ]
            },
            {
                kana: 'たけしが食べます。', romaji: 'Takeshi ga tabemasu.', translation: '"Takeshi eats."', breakdown: [
                    { word: 'たけし (Takeshi)', translation: 'The subject of the sentence' },
                    { word: 'が', translation: 'marks the subject of the sentence' },
                    { word: '食べます (tabemasu)', translation: 'eats' },
                ]
            },
        ], collapsed: '', show: ''
    },
    {
        id: 'collapseTwo', title: '2. "Ga" to Indicate Emphasis or Specificity', paragraph: 'The "ga" particle can also be used to emphasize or specify a particular subject within a larger context. This is often seen when a sentence contrasts or highlights one thing over another.',
        example: [
            {
                kana: 'りんごが好きです。', romaji: 'Ringo ga suki desu.', translation: '"I like apples."', explanation: 'By using "が," the speaker emphasizes that it is specifically apples that they like, as opposed to something else.'
            },
            {
                kana: '彼が行きます。', romaji: 'Kare ga ikimasu.', translation: '"He is the one who is going."', explanation: 'In this example, "彼 (kare)" means "he," and the use of "が" highlights that he is the person going, as opposed to someone else.'
            },
        ], collapsed: 'collapsed', show: ''
    },
    {
        id: 'collapseThree', title: '3. "Ga" in Sentences with "Arimasu" or "Imasu"', paragraph: 'In certain sentences where the verb "ある (aru)" or "いる (iru)" is used (to exist for inanimate or animate objects, respectively), the "ga" particle is commonly used to mark the subject.',
        example: [
            {
                kana: 'そこにお店があります。', romaji: 'Soko ni o-mise ga arimasu.', translation: '"There is a shop there."', explanation: '"お店 (o-mise)" means "shop," and "が" marks it as the subject of the sentence.'
            },
            {
                kana: '公園に犬がいます。', romaji: 'Kōen ni inu ga imasu.', translation: '"There is a dog in the park."', explanation: 'Here, "犬 (inu)" means "dog," and the use of "が" indicates that it is the dog that exists in the park.'
            },
        ], collapsed: 'collapsed', show: ''
    },
    {
        id: 'collapseFour', title: '4. "Ga" in Questions (When Using "Dare" or "Nani")', paragraph: 'The "ga" particle is also used in questions, especially when asking about specific subjects or things.',
        example: [
            {
                kana: 'だれが来ますか？', romaji: 'Dare ga kimasu ka?', translation: '"Who is coming?"', explanation: 'In this sentence, "だれ (dare)" means "who," and "が" marks it as the subject of the question.'
            },
            {
                kana: '何が欲しいですか？', romaji: 'Nani ga hoshii desu ka?', translation: '"What do you want?"', explanation: 'Here, "何 (nani)" means "what," and "が" indicates that we are asking about the specific thing someone wants.'
            },
        ], collapsed: 'collapsed', show: ''
    },
    {
        id: 'collapseFive', title: '5. "Ga" vs. "Wa"', paragraph: 'You might be wondering about the difference between the particles "が" (ga) and "は" (wa), as both can sometimes be used to mark the subject of a sentence. Here\'s a brief comparison:', sub_paragraph: ['"が" (ga) is used when introducing a new subject or emphasizing a particular subject in a specific context.', '"は" (wa) is a topic marker and is used to indicate the general topic of the sentence. It gives more of a "This is about..." feeling.'],
        example: [
            {
                kana: 'さくらんぼは甘いです。', romaji: 'Sakuranbo wa amai desu.', translation: '"Cherries are sweet." ', explanation: '(This sentence talks about cherries in general.)'
            },
            {
                kana: 'さくらんぼが甘いです。', romaji: 'Sakuranbo ga amai desu.', translation: '"The cherries are sweet."', explanation: '(Here, the focus is specifically on the cherries being sweet, as opposed to just mentioning them.)'
            },
        ], collapsed: 'collapsed', show: ''
    },
]
</script>