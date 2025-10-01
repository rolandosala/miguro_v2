<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5" v-for="content in content">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">{{ content.title }}</h4>
                    <p>{{ content.intro }}</p>
                    <h5 class="text-h6 font-weight-bold">How to Conjugate Verbs into the Te-Form</h5>
                    <p>{{ content.how_to }}</p>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in content.groups">
                    <label><strong>{{ index + 1 }}. {{ data.title }}</strong> - {{ data.desc }}</label>
                    <v-list-item class="mx-2 mx-md-6" v-for="subdata in data.sample"><b>{{ subdata.label }}</b> <br
                            v-if="subdata.label" />
                        Examples:<br />
                        <p v-for="example in subdata.examples" class="mx-2 mx-md-6">{{ example }}</p>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12" v-for="(data, index) in content_2">
                    <h5 class="text-h6 font-weight-bold">{{ data.title }}</h5>
                    <p>{{ data.intro }}</p>
                    <v-list-item class="mx-2 mx-md-6" v-for="usage in data.usages"><b>{{ usage.title }}</b> - {{ usage.desc
                        }} <br />
                        Examples:<br />
                        <p v-for="example in usage.examples" class="mx-2 mx-md-6"><b>{{ example.jp }}</b><br />{{
                            example.romaji
                            }}<br />{{ example.en }}</p>
                    </v-list-item>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup>
const content = [{
    "title": "Japanese Te-Form Verb Conjugation",
    "intro": "The te-form is one of the most important verb conjugations in the Japanese language. It serves as a building block for a wide range of grammatical structures and is essential for forming questions, commands, requests, and connecting sentences. Mastering the te-form will give you a solid foundation for speaking and understanding Japanese.",
    "how_to": "There are three main categories of verbs in Japanese: Group 1 (u-verbs), Group 2 (ru-verbs), and Group 3 (irregular verbs). Each group follows a different rule for forming the te-form.",
    "groups": [
        {
            "title": "Group 1: U-verbs (Godan Verbs)",
            "desc": "For u-verbs, the ending of the verb changes based on the last syllable of the verb's stem.",
            "sample": [
                {
                    "label": "Ending with -u, -tsu, or -ru: Replace with -tte",
                    "examples": [
                        "会う (au) → 会って (atte) – \"to meet\"",
                        "待つ (matsu) → 待って (matte) – \"to wait\"",
                        "取る (toru) → 取って (totte) – \"to take\""
                    ]
                },
                {
                    "label": "Ending with -mu, -bu, or -nu: Replace with -nde",
                    "examples": [
                        "読む (yomu) → 読んで (yonde) – \"to read\"",
                        "遊ぶ (asobu) → 遊んで (asonde) – \"to play\"",
                        "死ぬ (shinu) → 死んで (shinde) – \"to die\""
                    ]
                },
                {
                    "label": "Ending with -ku: Replace with -ite",
                    "examples": [
                        "書く (kaku) → 書いて (kaite) – \"to write\""
                    ]
                },
                {
                    "label": "Ending with -gu: Replace with -ide",
                    "examples": [
                        "泳ぐ (oyogu) → 泳いで (oyoide) – \"to swim\""
                    ]
                },
                {
                    "label": "Ending with -su: Replace with -shite",
                    "examples": [
                        "話す (hanasu) → 話して (hanashite) – \"to talk\""
                    ]
                }
            ]
        },
        {
            "title": "Group 2: Ru-verbs (Ichidan Verbs)",
            "desc": "For ru-verbs, the conjugation is simple: remove the -ru and add -te.",
            "sample": [
                {
                    "examples": [
                        "食べる (taberu) → 食べて (tabete) – \"to eat\"",
                        "寝る (neru) → 寝て (nete) – \"to sleep\"",
                        "見る (miru) → 見て (mite) – \"to see\""
                    ]
                }
            ]
        },
        {
            "title": "Group 3: Irregular Verbs",
            "desc": "There are only two common irregular verbs in Japanese, する (suru) and 来る (kuru), which follow unique conjugation patterns.",
            "sample": [
                {
                    "examples": [
                        "する (suru) → して (shite) – \"to do\"",
                        "来る (kuru) → 来て (kite) – \"to come\""
                    ]
                }
            ]
        }
    ]
}
]
const content_2 = [
    {
        "title": "Usage of the Te-Form",
        "intro": "The te-form has many uses in Japanese. Here are a few key examples:",
        "usages": [
            {
                "title": "Connecting Verbs (and / then)",
                "desc": "The te-form can be used to connect multiple verbs in a sentence, showing that the actions happen one after the other.",
                "examples": [
                    {
                        "jp": "朝ごはんを食べて、学校に行きます。",
                        "romaji": "Asagohan o tabete, gakkou ni ikimasu.",
                        "en": "I eat breakfast and then go to school."
                    }
                ]
            },
            {
                "title": "Requests (Please...)",
                "desc": "You can use the te-form to make polite requests by adding ください (kudasai).",
                "examples": [
                    {
                        "jp": "ちょっと待ってください",
                        "romaji": "Chotto matte kudasai.",
                        "en": "Please wait a moment."
                    }
                ]
            },
            {
                "title": "Prohibition (Don't...)",
                "desc": "The te-form can also be used to express prohibition when paired with いけない (ikenai) or だめ (dame).",
                "examples": [
                    {
                        "jp": "ここでタバコを吸ってはいけません。",
                        "romaji": "Koko de tabako o sutte wa ikemasen.",
                        "en": "You must not smoke here."
                    }
                ]
            },
            {
                "title": "Continuous Action (～ている)",
                "desc": "The te-form combined with いる (iru) can express continuous or ongoing actions, similar to the English present progressive (e.g., 'I am doing').",
                "examples": [
                    {
                        "jp": "今、勉強している。",
                        "romaji": "Ima, benkyou shite iru.",
                        "en": "I am studying right now."
                    }
                ]
            }
        ]
    }

]
</script>