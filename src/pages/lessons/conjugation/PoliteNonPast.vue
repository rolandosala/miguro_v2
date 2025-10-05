<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">The Polite Non Past Form</h4>
                    <p>The <strong>Masu form</strong> is the polite form of Japanese verbs. It's used in formal settings
                        or when
                        speaking to people you don’t know well, such as in business or with strangers. The Masu form is
                        often
                        the first verb form taught to beginners because it's the most commonly used in daily
                        conversation.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Examples:</strong></label>
                    <v-list-item class="mx-md-6" v-for="(example, index) in examples"><strong>{{ example.kanji
                            }}</strong><em>{{
                                example.kana }}</em> - {{ example.romaji }} {{ example.english }}
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <label><strong>Key Points:</strong></label>
                    <v-list-item class="mx-md-6" v-for="(keypoints, index) in keypoints">{{ keypoints }}</v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">How to Conjugate to Masu Form:</h5>
                    <label><strong>For **Godan** verbs:</strong></label>
                    <p>To conjugate a Godan verb into the Masu form, replace the **-u** sound at the end of the verb
                        with
                        the
                        corresponding **-i** sound, and then add **-masu**.</p>
                    <v-list-item class="mx-md-6"><strong>書く</strong> (かく) – <em>(kaku)</em> becomes <strong>書きます</strong>
                        (かきます) –
                        <em>(kakimasu)</em> –to write
                    </v-list-item>
                    <v-list-item class="mx-md-6"><strong>話す</strong> (はなす) – <em>(hanasu)</em> becomes
                        <strong>話します</strong>
                        (はなします) – <em>(hanashimasu)</em> – to speak
                    </v-list-item>
                    <label><strong>For **Ichidan** verbs:</strong></label>
                    <p>To conjugate an Ichidan verb, simply replace the **-ru** at the end with **-masu**.</p>
                    <v-list-item class="mx-md-6"><strong>食べる</strong> (たべる) – <em>(taberu)</em> becomes
                        <strong>食べます</strong>
                        (たべます) – <em>(tabemasu)</em> – to eat
                    </v-list-item>
                    <v-list-item class="mx-md-6"><strong>見る</strong> (みる) – <em>(miru)</em> becomes <strong>見ます</strong>
                        (みます) –
                        <em>(mimasu)</em> – to see
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Use in a Sentence:</h5>
                    <v-list-item class="mx-md-6"><strong>本を読みます</strong> (ほんを よみます) <br>
                        <em>(Hon o yomimasu.)</em> – I will read a book. / I read a book (polite).
                    </v-list-item>
                    <v-list-item class="mx-md-6"><strong>寿司を食べます</strong> (すしを たべます) <br>
                        <em>(Sushi o tabemasu.)</em> – I will eat sushi. / I eat sushi (polite).
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <h5 class="text-h6 font-weight-bold">Key Differences between **Masu Form** and **Dictionary Form**:
                    </h5>
                    <v-list-item class="mx-md-6">
                        <strong>Dictionary Form</strong> is used in casual speech, and it is the base form of the verb.
                        <br />
                        <strong>Dictionary Form</strong> is used in casual speech, and it is the base form of the verb.
                        <br />
                        <strong>Masu Form</strong> is used in formal speech and when showing respect to the listener.
                        <br />
                        When making requests or speaking politely, you must use the Masu form. <br />
                    </v-list-item>
                    <h5 class="text-h6 font-weight-bold">Common Polite Expressions Using Masu Form:</h5>
                    <v-list-item class="mx-md-6">
                        <strong>あります</strong> (あります) – <em>(arimasu)</em> – There is/are (used for inanimate objects)
                        <br />
                        <strong>います</strong> (います) – <em>(imasu)</em> – There is/are (used for animate objects) <br />
                        <strong>行きます</strong> (いきます) – <em>(ikimasu)</em> – I will go <br />
                        <strong>見ます</strong> (みます) – <em>(mimasu)</em> – I will see <br />
                    </v-list-item>
                    <v-alert icon="mdi-information" title="Note">
                        <p>To make questions in the polite form, simply add the question marker **か** (ka) at the end of
                            the
                            sentence.
                            For example:</p>
                        <v-list-item class="mx-md-6">あなたは日本語を**話しますか**? (あなたは にほんごを はなしますか?) <br> <em>(Anata wa Nihongo o
                                hanashimasu ka?)</em> – Do you speak Japanese?</v-list-item>
                    </v-alert>
                </v-col>
            </v-col>
        </v-row>
    </v-container>

</template>
<script lang="ts" setup>
const examples = [
    { kanji: '書きます', kana: '(かきます)', romaji: '(kakimasu)', english: '– to write' },
    { kanji: '食べます', kana: '(たべます)', romaji: '(tabemasu)', english: '– to eat' },
    { kanji: 'します', kana: '', romaji: '(shimasu)', english: '– to do' },
    { kanji: '来ます', kana: '(きます)', romaji: '(kimasu)', english: '– to come' },
]
const keypoints = ['The Masu form is used in polite speech, typically with people you\'re not familiar with or in formal situations.', 'It is formed by replacing the **-u** ending of the verb’s dictionary form with **-masu**. However, **Ichidan verbs** (ending in **-eru** or **-iru**) follow a simpler pattern than **Godan verbs**.', 'Masu form verbs are often used to ask questions in a polite way, making it very useful in daily conversation.']
</script>