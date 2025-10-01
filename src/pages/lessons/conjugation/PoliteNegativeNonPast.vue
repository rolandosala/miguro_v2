<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The Polite Negative Non Past Form</h4>
                    <h5 class="text-h6 font-weight-bold">1. Basic Structure</h5>
                    <p>To conjugate a verb into its <strong>polite negative form</strong>, follow these basic steps:</p>
                    <v-list-item class="mx-md-6">Start with the verb in its dictionary form (i.e., the plain
                        form).</v-list-item>
                    <v-list-item class="mx-md-6">Identify the verb type (Group 1, Group 2, or Irregular).</v-list-item>
                    <v-list-item class="mx-md-6">Apply the negative suffix and make the verb polite by adding
                        <strong>-masu</strong>.</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">2. Verb Groups and Conjugation Patterns</h5>
                    <v-list-item class="mx-md-6" v-for="data in groupVerbs">
                        <label><b>{{ data.title }}</b></label><br>
                        <p class="mx-8" v-for="verb in data.sample">{{ verb.verb }} - {{ verb.politeNegative }}({{
                            verb.meaning
                            }})</p>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">3. Usage of Polite Negative Conjugation</h5>
                    <p>The polite negative form is commonly used when:</p>
                    <v-list-item class="mx-md-6">
                        <strong>Declining offers or invitations</strong><br />
                        <strong>Talking about things you don't do</strong><br />
                        <strong>Polite refusals</strong><br />
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-alert icon="$vuetify" title="Note">
                        <p> The <strong>polite negative form</strong> is often used when speaking to strangers, in
                            formal
                            settings, or when showing respect.
                        </p>
                        <p>
                            To make a sentence even more polite, you can add <strong>desu</strong> at the end of the
                            sentence:
                            <span class="example">"行きませんです" (Ikimasen desu) – More polite, but less common.</span>
                        </p>
                        <p>
                            The polite negative form can also be used in questions:
                        </p>
                        <ul>
                            <li><span class="example">"食べませんか？" (Tabemasen ka?) = "Won't you eat?"</span></li>
                        </ul>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const groupVerbs = [{
    title: 'Group 1: U-Verbs (Godan Verbs)', sample: [
        { verb: '食べる', politeNegative: '食べません', meaning: 'to eat' },
        { verb: '聞く', politeNegative: '聞きません', meaning: 'to ask' },
    ]
},
{
    title: 'Group 2: Ru-Verbs (Ichidan Verbs)', sample: [
        { verb: 'ある', politeNegative: 'ありません', meaning: 'to be (inanimate)' },
        { verb: '食べます', politeNegative: '食べません', meaning: 'to eat' },
    ]
},
{
    title: 'Group 3: Irregular Verbs', sample: [
        { verb: 'する', politeNegative: 'しません', meaning: 'to do' },
        { verb: '来る', politeNegative: '来ません', meaning: 'to come' },
    ]
}]

</script>