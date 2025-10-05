<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Understanding the Japanese Particle の (no)
                    </h4>
                    <p>The particle の (no) is one of the most commonly used particles in Japanese. It’s primarily used
                        to
                        indicate possession or to connect nouns in a descriptive way—kind of like using \'of\' or an
                        apostrophe-s (’s) in English.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in accordion">
                    <v-list-item><b>{{ data.title }}</b> - {{ data.description }}</v-list-item>
                    <v-list-item class="mx-6"><b><i>Example</i></b></v-list-item>
                    <v-list-item class="mx-6" v-for="(example, index) in data.example"><b>{{ example.kana }}</b><br />
                        Translation: {{ example.translation }}</v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup lang="ts">
const accordion = [
    {
       title: '1. の as Possession', description: 'Think of の like the apostrophe ’s in English. It shows that something belongs to someone. Structure: [Owner] の [Possession]',
        example: [
            { kana: 'わたし の ほん', translation: 'my book' },
            { kana: 'たなかさん の かさ', translation: 'Tanaka\'s umbrella' },
            { kana: 'がくせい の ノート', translation: 'a student\'s notebook' },
        ], note: 'Note: Just like English, the owner comes first, followed by what is owned.'
    },
    {
       title: '2. の to Connect or Describe Nouns', description: 'の can also be used to make compound nouns or to describe something using another noun. Structure: [Descriptive noun] の [Main noun]',
        example: [
            { kana: 'にほん の ぶんか', translation: 'Japanese culture' },
            { kana: 'さくら の き', translation: 'a cherry blossom tree (literally, “tree of cherry blossom”)' },
            { kana: 'おちゃ の カップ', translation: 'a teacup' },
        ], note: 'Note: In this case, the noun before の adds more information or context to the noun after it.'
    },
    {
        title: '3. の for Relationships or Categories', description: 'You can also use の to indicate relationships, locations, or categories. Structure: [Descriptive noun] の [Main noun]',
        example: [
            { kana: 'わたし の ともだち', translation: 'my friend' },
            { kana: 'がっこう の せんせい', translation: 'a teacher at a school' },
            { kana: 'いぬ の えさ', translation: 'dog food (literally, “food for dogs”)' },
        ], note: ''
    },
    {
        title: '4. の in Questions', description: 'When you\'re asking a question and want to know who owns something or what something is related to, の still works the same.',
        example: [
            { kana: 'これは だれ の かばん ですか？', translation: 'Whose bag is this?' },
        ], note: ''
    },
]
</script>