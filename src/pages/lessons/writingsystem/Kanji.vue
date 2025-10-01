<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <h4 class="text-h5 font-weight-bold mb-4">Introduction to Kanji</h4>
                <p>Kanji (漢字) are the adopted Chinese characters used in the Japanese writing system. Alongside
                    hiragana
                    and katakana, kanji are one of the three scripts that make up written Japanese.Each kanji character
                    represents a meaning (or concept), and often has multiple readings depending on
                    context. For example:</p>
                <v-list density="compact">
                    <v-list-item>山 means "mountain"</v-list-item>
                    <v-list-item class="mx-4">Read as yama (やま) when standing alone</v-list-item>
                    <v-list-item class="mx-4">Read as san (さん) in compound words, like 富士山 (Fujisan – Mt.
                        Fuji)</v-list-item>
                </v-list>

                <h5 class="text-h6 font-weight-bold">A Brief History</h5>
                <label>Kanji originated from Chinese characters and were introduced to Japan over 1,500 years ago. At
                    first,
                    they were used mainly by scholars and monks, but over time they became a core part of everyday
                    Japanese writing.</label>
                <h5 class="text-h6 font-weight-bold mt-4">Why Learn Kanji?</h5>
                <label>You might be wondering: Do I have to learn kanji? Yes—if you want to read and write Japanese with
                    any
                    fluency. <br />Here’s why kanji are essential:</label>
                <v-list density="compact">
                    <v-list-item><b>Clarity:</b> Japanese has many homophones. Kanji helps differentiate
                        them.</v-list-item>
                    <v-list-item class="mx-4">Example: こうこう could mean "high school (高校)" or "navigation
                        (航行)"</v-list-item>
                    <v-list-item><b>Efficiency:</b> A single kanji can pack a lot of meaning into one
                        character.</v-list-item>
                    <v-list-item><b>Authenticity:</b> Native-level Japanese includes thousands of kanji in books,
                        newspapers,
                        signs, and more.</v-list-item>
                </v-list>
                <h5 class="text-h6 font-weight-bold">How Many Kanji Are There?</h5>
                <label>There are thousands of kanji, but don’t worry—you don’t need to learn them all at once.</label>
                <v-list density="compact">
                    <v-list-item>The Japanese government defines 2,136 "Jōyō Kanji" (常用漢字) as the essential characters
                        for daily
                        use.</v-list-item>
                    <v-list-item>Most educated Japanese adults know between 2,000–3,000 kanji.</v-list-item>
                </v-list>
                <h5 class="text-h6 font-weight-bold">Types of Kanji Readings</h5>
                <label>Kanji have two main types of readings:</label>
                <v-list density="compact">
                    <v-list-item>On'yomi (音読み) – "Sino-Japanese" reading (from Chinese)</v-list-item>
                    <v-list-item>Kun'yomi (訓読み) – Native Japanese reading</v-list-item>
                </v-list>
                <v-list density="compact">
                    <v-list-item>Example: 水 (water)</v-list-item>
                    <v-list-item class="mx-4">On’yomi: sui (used in compounds like 水曜日 – Suiyōbi,
                        Wednesday)</v-list-item>
                    <v-list-item class="mx-4">Kun’yomi: mizu (used when standing alone)</v-list-item>
                </v-list>
                <v-alert icon="$vuetify" title="Tips for Learning Kanji">
                    <v-list-item>Learn kanji in context – with vocabulary, not just as isolated
                        characters.</v-list-item>
                    <v-list-item>Use mnemonics – create stories or visuals to remember meanings.</v-list-item>
                    <v-list-item>Practice writing by hand – it helps reinforce stroke order and memory.</v-list-item>
                    <v-list-item>Start with JLPT levels or by frequency – many learners follow JLPT lists
                        (N5-N1).</v-list-item>
                    <v-list-item>Use spaced repetition (SRS) – tools like Anki or WaniKani help with long-term
                        retention.</v-list-item>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>

</template>
<script setup>
import { ref } from 'vue'
const dialog = ref(false)
const selectedChar = ref('')
const characters = ref([
    { character: ['ア (a)', 'イ (i)', 'ウ (u)', 'エ (e)', 'オ (o)'] },
    { character: ['カ (ka)', 'キ (ki)', 'ク (ku)', 'ケ (ke)', 'コ (ko)'] },
    { character: ['サ (sa)', 'シ (shi)', 'ス (su)', 'セ (se)', 'ソ (so)'] },
    { character: ['タ (ta)', 'チ (chi)', 'ツ (tsu)', 'テ (te)', 'ト (to)'] },
    { character: ['ナ (na)', 'ニ (ni)', 'ヌ (nu)', 'ネ (ne)', 'ノ (no)'] },
    { character: ['ハ (ha)', 'ヒ (hi)', 'フ (fu)', 'ヘ (he)', 'ホ (ho)'] },
    { character: ['マ (ma)', 'ミ (mi)', 'ム (mu)', 'メ (me)', 'モ (mo)'] },
    { character: ['ラ (ra)', 'リ (ri)', 'ル (ru)', 'レ (re)', 'ロ (ro)'] },
    { character: ['ヤ (ya)', '-', 'ユ (yu)', '-', 'ヨ (yo)'] },
    { character: ['ワ (wa)', '-', '-', '-', 'ヲ (wo)'] },
    { character: ['ん (n)', '-', '-', '-', '-'] },
])
const dakuten = ref([
    { character: ['ガ (ga)', 'ギ (gi)', 'グ (gu)', 'ゲ (ge)', 'ゴ (go)'] },
    { character: ['ザ (za)', 'ジ (ji)', 'ズ (zu)', 'ゼ (ze)', 'ゾ (zo)'] },
    { character: ['ダ (da)', 'ヂ (ji/di)', 'ヅ (zu/du)', 'デ (de)', 'ド (do)'] },
    { character: ['バ (ba)', 'ビ (bi)', 'ブ (bu)', 'ベ (be)', 'ボ (bo)'] },
    { character: ['パ (pa)', 'ピ (pi)', 'プ (pu)', 'ペ (pe)', 'ポ (po)'] },
])
const yoonCharacters = ref([
    { character: ['キャ (kya)', 'キュ (kyu)', 'キョ (kyo)'] },
    { character: ['ギャ (gya)', 'ギュ (gyu)', 'ギョ (gyo)'] },
    { character: ['シャ (sha)', 'シュ (shu)', 'ショ (sho)'] },
    { character: ['ジャ (ja)', 'ジュ (ju)', 'ジョ (jo)'] },
    { character: ['チャ (cha)', 'チュ (chu)', 'チョ (cho)'] },
    { character: ['ニャ (nya)', 'ニュ (nyu)', 'ニョ (nyo)'] },
    { character: ['ヒャ (hya)', 'ヒュ (hyu)', 'ヒョ (hyo)'] },
    { character: ['ビャ (bya)', 'ビュ (byu)', 'ビョ (byo)'] },
    { character: ['ピャ (pya)', 'ピュ (pyu)', 'ピョ (pyo)'] },
    { character: ['ミャ (mya)', 'ミュ (myu)', 'ミョ (myo)'] },
    { character: ['リャ (rya)', 'リュ (ryu)', 'リョ (ryo)'] },
])
const otherCharacters = ([
    { character: 'ー', usage: 'Long vowel mark (e.g., コーヒー "coffee")' },
    { character: 'ヴ', usage: '"V" sound, often used in foreign words (e.g., ヴァイオリン for "violin")' },
    { character: 'ヵ / ヶ', usage: 'Small versions of カ and ケ, used in counters and place names' },
    { character: 'ㇰ, ㇱ, etc.', usage: 'Rare small katakana for Ainu or linguistic use (not commonly used in standard Japanese)' },
])
const tips = [
    "Start with recognition – Learn to read and pronounce Katakana before worrying about writing it.",
    "Use flashcards or apps – Consistent repetition helps with memorization.",
    "Spot it in the wild – Katakana is everywhere in Japan. Try reading signs, menus, or packaging.",
    "Practice with real words – Learning words like コーヒー (coffee) and パン (bread) makes it more fun and practical.",
    "Compare with Hiragana – It’s useful to understand the difference and when each is used."
]
const toggleDialog = (char) => {
    dialog.value = true
    selectedChar.value = char
}
const splitChar = (str) => {
    const match = str.match(/^(.+?)\s*\((.+)\)$/);
    if (match) {
        return { kana: match[1], romaji: match[2] };
    }
    return { kana: str, romaji: "" };
};
</script>