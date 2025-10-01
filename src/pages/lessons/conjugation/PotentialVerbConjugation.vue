<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5" v-for="content in content">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">{{ content.title }}</h4>
                    <p>{{ content.intro }}</p>
                    <h5 class="text-h6 font-weight-bold">How to Form the Potential Form</h5>
                    <p>{{ content.how_to }}</p>
                </v-col>
                <!-- Groups (U-verbs, Ru-verbs, Irregular verbs) -->
                <v-col cols="12" md="12" sm="12" v-for="(data, index) in content.groups" :key="index">
                    <label><strong>{{ index + 1 }}. {{ data.title }}</strong> - {{ data.rule }}</label><br />
                    <v-table>
                        <thead>
                            <tr>
                                <th>Dictionary Form</th>
                                <th>Potential Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(subdata, i) in data.verbs" :key="i">
                                <td>{{ subdata.dictionary }}</td>
                                <td>{{ subdata.potential }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                    <v-list-item class="mx-md-6">
                        Examples:<br />
                        <p v-for="(example, j) in data.examples" :key="j" class="mx-md-6">
                            <b>{{ example.jp }}</b><br />
                            {{ example.romaji }}<br />
                            {{ example.en }}
                        </p>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="12" sm="12" v-for="(data, index) in negative_form" :key="index">
                    <h5 class="text-h6 font-weight-bold">Potential Negative Form</h5>
                    <label>{{ data.desc }}</label><br />
                    <v-list-item class="mx-md-6" v-for="rules in data.rules">
                        <b>{{ rules }}</b><br />
                    </v-list-item>
                    <v-list-item class="mx-md-6">
                        Examples:<br />
                        <p v-for="(example, j) in data.examples" :key="j" class="mx-md-6">
                            <b>{{ example.jp }}</b><br />
                            {{ example.romaji }}<br />
                            {{ example.en }}
                        </p>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="12" sm="12" v-for="(data, index) in usage" :key="index">
                    <h5 class="text-h6 font-weight-bold">Usage in Sentence</h5>
                    <label>{{ data.desc }}</label><br />
                    <v-list-item class="mx-md-6" v-for="cases in data.cases">
                        <b>{{ cases.title }}</b><br />
                        <span v-for="ex in cases.examples">{{ ex.jp }}<br />{{ ex.romaji }}<br />{{ ex.en
                            }}<br /></span>
                    </v-list-item>
                    <v-alert icon="$vuetify" title="Summary">
                        <v-list-item><b>Group 1 (U-verbs)</b>: Replace -u with -eru.</v-list-item>
                        <v-list-item><b>Group 2 (Ru-verbs)</b>: Replace -ru with -rareru.</v-list-item>
                        <v-list-item><b>Group 3 (Irregular verbs)</b>: する becomes できる, and 来る becomes
                            来られる.</v-list-item>
                        <v-list-item><b>Negative potential</b>: Add -nai or -masen to the potential form.</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup>
const content = [
    {
        "title": "Japanese Potential Form Verb Conjugation",
        "intro": "In Japanese, the potential form of a verb expresses the ability or possibility to do something. It’s equivalent to saying “can” or “able to” in English. The potential form is used when talking about actions you can perform or things that can happen.",
        "how_to": "The way you conjugate verbs into the potential form depends on whether the verb is Group 1 (U-verbs), Group 2 (Ru-verbs), or Group 3 (Irregular verbs).",
        "groups": [
            {
                "title": "Group 1 (U-verbs)",
                "rule": "Change the final -u sound to the corresponding -eru sound. Replace the -u ending with -eru.",
                "verbs": [
                    { "dictionary": "かく (kaku) – to write", "potential": "かける (kakeru) – can write" },
                    { "dictionary": "飲む (nomu) – to drink", "potential": "飲める (nomeru) – can drink" },
                    { "dictionary": "話す (hanasu) – to speak", "potential": "話せる (hanaseru) – can speak" }
                ],
                "examples": [
                    { "jp": "私は日本語を話せる。", "romaji": "Watashi wa Nihongo o hanaseru.", "en": "I can speak Japanese." },
                    { "jp": "彼はピアノが弾ける。", "romaji": "Kare wa piano ga hikeru.", "en": "He can play the piano." }
                ]
            },
            {
                "title": "Group 2 (Ru-verbs)",
                "rule": "Drop the -ru and add -rareru.",
                "verbs": [
                    { "dictionary": "食べる (taberu) – to eat", "potential": "食べられる (taberareru) – can eat" },
                    { "dictionary": "見る (miru) – to see", "potential": "見られる (mirareru) – can see" },
                    { "dictionary": "寝る (neru) – to sleep", "potential": "寝られる (nerareru) – can sleep" }
                ],
                "examples": [
                    { "jp": "私は寿司を食べられる。", "romaji": "Watashi wa sushi o taberareru.", "en": "I can eat sushi." },
                    { "jp": "彼女は映画を見られる。", "romaji": "Kanojo wa eiga o mirareru.", "en": "She can watch movies." }
                ]
            },
            {
                "title": "Group 3 (Irregular Verbs)",
                "rule": "There are only two irregular verbs in Japanese, and they conjugate in a special way.",
                "verbs": [
                    { "dictionary": "する (suru) – to do", "potential": "できる (dekiru) – can do" },
                    { "dictionary": "来る (kuru) – to come", "potential": "来られる (korareru) – can come" }
                ],
                "examples": [
                    { "jp": "私は勉強ができる。", "romaji": "Watashi wa benkyou ga dekiru.", "en": "I can study." },
                    { "jp": "明日、彼は来られる。", "romaji": "Ashita, kare wa korareru.", "en": "He can come tomorrow." }
                ]
            }
        ],
        "summary": [
            "Group 1 (U-verbs): Replace -u with -eru.",
            "Group 2 (Ru-verbs): Replace -ru with -rareru.",
            "Group 3 (Irregular verbs): する becomes できる, and 来る becomes 来られる.",
            "Negative potential: Add -nai or -masen to the potential form."
        ]
    }
]
const negative_form = [{
    "desc": "To make the potential form negative (i.e., “cannot” or “unable to”), you simply add -nai or -masen to the potential form.",
    "rules": [
        "Group 1 (U-verbs): Drop the -ru and add -nai or -masen.",
        "Group 2 (Ru-verbs): Drop the -ru and add -rarenai or -masen.",
        "Group 3 (Irregular verbs): Use できない (dekinai) for する (suru) and 来られない (korarenai) for 来る (kuru)."
    ],
    "examples": [
        { "jp": "私は日本語を話せない。", "romaji": "Watashi wa Nihongo o hanasenai.", "en": "I cannot speak Japanese." },
        { "jp": "彼はピアノが弾けない。", "romaji": "Kare wa piano ga hikenai.", "en": "He cannot play the piano." }
    ]
}]
const usage = [{
    "desc": "The potential form is versatile and can be used in various contexts to express ability or possibility.",
    "cases": [
        {
            "title": "Expressing ability",
            "examples": [
                { "jp": "私は泳げる。", "romaji": "Watashi wa oyogeru.", "en": "I can swim." }
            ]
        },
        {
            "title": "Expressing permission or possibility",
            "examples": [
                { "jp": "ここでタバコを吸ってもいいですか？", "romaji": "Koko de tabako o sutte mo ii desu ka?", "en": "Is it okay to smoke here?" },
                { "jp": "ここでタバコを吸えますか？", "romaji": "Koko de tabako o suemasu ka?", "en": "Can I smoke here?" }
            ]
        },
        {
            "title": "Polite requests or suggestions",
            "examples": [
                { "jp": "この本を読めますか？", "romaji": "Kono hon o yomemasu ka?", "en": "Can you read this book?" }
            ]
        }
    ]
}]
</script>