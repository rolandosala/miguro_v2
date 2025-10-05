<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Imperative Verb Conjugation in Japanese: Casual and Polite
                        Forms</h4>
                    <p>In Japanese, the imperative form of verbs is used to give commands, requests, or instructions.
                        It’s
                        important to use the right form depending on the level of politeness or familiarity with the
                        person
                        you're speaking to. This content will explain how to form the imperative in both casual and
                        polite
                        speech, with examples for each.</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Casual Imperative Form</h5>
                    <p>The casual imperative is used when speaking to friends, family, or people of the same or lower
                        status. This form is direct, and it's typically used in informal settings.</p>
                    <v-list-item v-for="data in casual">
                        <b>{{ data.title }}</b><br />
                        <span class="mx-md-4">{{ data.paragraph }}</span>
                        <v-list-item class="mx-md-4" v-for="ex in data.list">{{ ex.item }}</v-list-item>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Polite Imperative Form</h5>
                    <p>The polite imperative form is used when speaking to strangers, superiors, or in more formal
                        situations. This form is more respectful and is commonly used in customer service or formal
                        instructions.</p>
                    <v-list-item v-for="data in polite">
                        <b>{{ data.title }}</b><br />
                        <span class="mx-md-4">{{ data.paragraph }}</span>
                        <v-list-item class="mx-md-4" v-for="ex in data.list">{{ ex.item }}</v-list-item>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Summary Table:</h5>
                    <v-table>
                        <thead>
                            <tr>
                                <th>Verb Type</th>
                                <th>Casual Imperative</th>
                                <th>Polite Imperative</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in summary">
                                <td>{{ data.type }}</td>
                                <td>{{ data.casual }}</td>
                                <td>{{ data.polite }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
                <v-alert icon="mdi-information" title="Additional Notes">
                    <ul>
                        <li><b>Casual vs. Polite:</b>The casual imperative is direct and often used with close friends
                            or in
                            relaxed environments, whereas the polite form is used in situations that require respect,
                            like
                            talking to superiors, teachers, or strangers.
                        </li>
                        <li><b>Negative Imperative:</b>To make a verb negative in the imperative form (telling someone
                            not
                            to do something), you can use -na for casual and -nasai for polite forms.
                            <ul>
                                <li><b>Casual: Tabena</b> (食べな) (Don’t eat!)</li>
                                <li><b>Polite: Tabenai nasai</b> (食べないなさい) (Please don’t eat!)</li>
                            </ul>
                        </li>
                    </ul>
                </v-alert>

            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const casual = [
    {
        id: 'collapse_1', title: '1. Group 1 Verbs (u-verbs)',
        paragraph: 'For Group 1 (u-verbs), the imperative form is created by changing the -u ending to -e.',
        list: [
            { item: 'Taberu (食べる) → Tabeろ (食べろ) (Eat!)' },
            { item: 'Kiku (聞く) → Kike (聞け) (Ask!)' },
        ]
    },
    {
        id: 'collapse_2', title: '2. Group 2 Verbs (ru-verbs)',
        paragraph: 'For Group 2 (ru-verbs), the imperative form is created by changing the -ru ending to -ro.',
        list: [
            { item: 'Tachiru (立ちる) → Tachiro (立ちろ) (Stand up!)' },
            { item: 'Miru (見る) → Miro (見ろ) (Look!)' },
        ]
    },
    {
        id: 'collapse_3', title: '3. Group 3 Verbs (irregular verbs)',
        paragraph: 'There are two common irregular verbs in Japanese: suru (する) and kuru (来る).',
        list: [
            { item: 'Suru (する) → Shiro (しろ) (Do it!)' },
            { item: 'Kuru (来る) → Koi (来い) (Come!)' },
        ]
    },
]
const polite = [
    {
        id: 'polite_1', title: '1. Group 1 Verbs (u-verbs)',
        paragraph: 'For Group 1 (u-verbs), you need to change the verb ending -u to -masu and then use the polite imperative form by adding -nasai.',
        list: [
            { item: 'Taberu (食べる) → Tabenasai (食べなさい) (Please eat!)' },
            { item: 'Kiku (聞く) → Kikinasai (聞きなさい) (Please ask!)' },
        ]
    },
    {
        id: 'polite_2', title: '2. Group 2 Verbs (ru-verbs)',
        paragraph: 'For Group 2 (ru-verbs), the same rule applies as with u-verbs. You change -ru to -nasai.',
        list: [
            { item: 'Miru (見る) → Minasai (見なさい) (Please look!)' },
            { item: 'Tachiru (立ちる) → Tachinasai (立ちなさい) (Please stand!)' },
        ]
    },
    {
        id: 'collapse_3', title: '3. Group 3 Verbs (irregular verbs)',
        paragraph: 'For suru (する) and kuru (来る), use the polite -nasai form.',
        list: [
            { item: 'Suru (する) → Shinasai (しなさい) (Please do it!)' },
            { item: 'Kuru (来る) → Kinasai (来なさい) (Please come!)' },
        ]
    },
]
const summary = [
    { type: 'Group 1 Verbs', casual: '-e', polite: '-nasai' },
    { type: 'Group 2 Verbs', casual: '-ro', polite: '-nasai' },
    { type: 'Suru (する)', casual: 'Shiro (しろ)', polite: 'Shinasai (しなさい)' },
    { type: 'Kuru (来る)', casual: 'Koi (来い)', polite: 'Kinasai (来なさい)' },
]
</script>