<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Conditional Verb Forms – ば & たら</h4>
                    <p>In Japanese, conditionals are used to express "if" or "when" something happens. Two of the most
                        common forms are: <b>ば-form</b> and <b>たら-form</b>These are essential when you want to say
                        things
                        like "If I study, I’ll pass," or "If it rains, we won’t go out."</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">1. ば-form (If...)</h5>
                    <p>This is a more formal or written style, often used in polite speech or logical statements.</p>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>Group 1 verbs (Godan):</strong> Change the last u sound to its e equivalent and add
                        ば<br />
                        Example: のむ → のめば (nomu → nomeba)
                    </v-list-item>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>Group 2 verbs (Ichidan):</strong> Remove る and add れば<br />
                        Example: たべる → たべれば (taberu → tabereba)
                    </v-list-item>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>Irregular verbs:</strong><br />
                        Example: する → すれば (suru → sureba) | くる → くれば (kuru → kureba)
                    </v-list-item>
                    <span class="mx-2 mx-md-4"><b>Example (Polite):</b></span>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>もっと　べんきょうすれば、しけんに　ごうかくします。</strong><br />
                        Motto benkyou sureba, shiken ni goukaku shimasu.<br />
                        (If you study more, you’ll pass the exam.)
                    </v-list-item>
                    <span class="mx-2 mx-md-4"><b>Example (Casual):</b></span>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>はやく　ねれば、つかれが　とれるよ。</strong><br />
                        Hayaku nereba, tsukare ga toreru yo.<br />
                        (If you sleep early, you'll feel less tired.)
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">2. たら-form (If/when...)</h5>
                    <p>This form is very commonly used in both casual and polite speech. It can mean "if" or "when"
                        depending on the context.</p>
                    <v-list-item class="mx-2 mx-md-6">
                        <strong>Conjugate the verb to past tense (た-form) and Add ら</strong><br />
                        <span>Examples:</span><br />
                        <ul class="mx-2 mx-md-6">
                            <li>のむ → のんだ → のんだら (nomu → nonda → nondara)</li>
                            <li>たべる → たべた → たべたら (taberu → tabeta → tabetara)</li>
                        </ul>
                    </v-list-item>
                    <span class="mx-2 mx-md-4"><b>Example (Polite):</b></span>
                    <ul class="mx-2 mx-md-6">
                        <li><b>あめが　ふったら、ピクニックは　ちゅうしです。</b> <br>
                            Ame ga futtara, pikunikku wa chuushi desu.<br>
                            (If it rains, the picnic will be canceled.)
                        </li>
                    </ul>
                    <span class="mx-2 mx-md-4"><b>Example (Casual):</b></span>
                    <ul class="mx-2 mx-md-6">
                        <li><b>うちに　かえったら、ゲームしよう。</b> <br>
                            Uchi ni kaettara, geemu shiyou.<br>
                            (When I get home, let’s play a game.)
                        </li>
                    </ul>
                </v-col>
                <v-alert icon="$vuetify" title="Additional Notes">
                    <ul class="mx-2 mx-md-6">
                        <li><b>ば-form</b> is more logical or theoretical.</li>
                        <li><b>たら-form</b> is more natural and flexible in conversation.</li>
                        <li><b>Group 3 (Irregular verbs)</b>: する becomes できる, and 来る becomes 来られる.</li>
                        <li>Both forms work in polite and casual speech, just adjust the verb endings (ます vs. dictionary
                            form).</li>
                    </ul>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>

</template>