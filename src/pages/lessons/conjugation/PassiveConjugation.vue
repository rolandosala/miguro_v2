<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">Japanese Passive Verb Conjugation</h4>
                    <p>In Japanese, the passive verb form is used to show that the subject is affected by an action,
                        typically when the subject is the receiver of the action rather than the doer.</p>
                    <h5 class="text-h6 font-weight-bold">How to Form the Passive Verb</h5>
                    <p>To conjugate a verb into the passive form, the process depends on whether the verb is a godan
                        verb
                        (五段動詞) or a ichidan verb (一段動詞).</p>
                    <h6 class="text-h6 font-weight-bold">For Godan Verbs (Five-Step Verbs)</h6>
                    <p>For godan verbs, you change the final syllable of the verb stem into the corresponding passive
                        form.
                        Here's the pattern:</p>
                    <ol class="mx-4 mx-6 mx-md-6">
                        <li>-u becomes -areru</li>
                        <li>-ru becomes -rareru</li>
                        <li>-tsu becomes -taru</li>
                        <li>-nu becomes -nareru</li>
                        <li>-bu becomes -bareru</li>
                        <li>-mu becomes -mareru</li>
                        <li>-ku becomes -kareru</li>
                        <li>-gu becomes -gareru</li>
                    </ol>
                    <h6 class="text-h6 font-weight-bold">For Ichidan Verbs (One-Step Verbs)</h6>
                    <p>For ichidan verbs, you simply replace the -ru ending with -rareru.</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Examples of Passive Verb Conjugation</h5>
                    <v-list-item>
                        <b>1. Casual Form (Informal)</b>
                        <ul class="mx-4 mx-6 mx-md-6">
                            <li>Taberu (食べる) = To eat <br>Passive form: Taberareru (食べられる) = To be eaten <br>Sentence
                                example:
                                <ul>
                                    <li>そのリンゴは食べられた。(そのりんごはたべられた。) <br>Sono ringo wa taberareta. <br>That apple was
                                        eaten.</li>
                                </ul>
                            </li>
                            <li>Kaku (書く) = To write <br>Passive form: Kakareru (書かれる) = To be written <br>Sentence
                                example:
                                <ul>
                                    <li>手紙が書かれる。(てがみがかかれる。)<br>Tegami ga kakareru. <br>The letter is written.</li>
                                </ul>
                            </li>
                        </ul>
                    </v-list-item>
                    <v-list-item>
                        <b>2. Polite Form (Formal)</b>
                        <ul class="mx-4 mx-6 mx-md-6">
                            <li>Taberu (食べる) = To eat<br>Passive form: Taberu (食べる) = To eat<br>Sentence example:
                                <ul>
                                    <li>このケーキは食べられます。(このけーきはたべられます。)<br>Kono keeki wa taberaremasu.<br>This cake can be
                                        eaten.
                                    </li>
                                </ul>
                            </li>
                            <li>Kaku (書く) = To write <br>Passive form: Kakaremasu (書かれます) = To be written <br>Sentence
                                example:
                                <ul>
                                    <li>その本は書かれます。(そのほんはかかれます。)<br>Sono hon wa kakaremasu.<br>That book will be written.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Usage of the Passive Form</h5>
                    <p>The passive form is commonly used to:</p>
                    <ol class="mx-8">
                        <li>Indicate that the subject is affected by an action:
                            <ul>
                                <li>彼は先生に怒られた。(かれはせんせいにおこられた。) <br>
                                    Kare wa sensei ni okorareta. <br>
                                    He was scolded by the teacher.
                                </li>
                            </ul>
                        </li>
                        <li>Show that something happens to the subject by someone or something else:
                            <ul>
                                <li>ドアが開けられた。(どあがあけられた。)<br>
                                    Doa ga akerareta.<br>
                                    The door was opened.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Polite vs. Casual Passive</h5>
                    <ul class="mx-4 mx-6 mx-md-6">
                        <li>Casual (informal) passive: 食べられた (taberareta)</li>
                        <li>Polite (formal) passive: 食べられます (taberaremasu)</li>
                    </ul>
                    <p>Using the passive form in polite conversation adds a level of respect to the speaker's tone,
                        while
                        the casual form is more commonly used in informal settings.</p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-alert icon="$vuetify" title="Important Notes">
                        <ul class="mx-4 mx-6 mx-md-6">
                            <li>The passive form can also be used with potential verbs (ability to do something). For
                                example:
                                <ul>
                                    <li>彼は歌うことができる (かれはうたうことができる) <br>
                                        Kare wa utau koto ga dekiru. <br>
                                        He can sing.
                                    </li>
                                </ul>
                            </li>
                            <li>In the passive form, it becomes:
                                <ul>
                                    <li>彼は歌われることができる (かれはうたわれることができる)<br>
                                        Kare wa utawareru koto ga dekiru.<br>
                                        He can be sung (he can have songs sung to him).
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>