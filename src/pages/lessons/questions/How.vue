<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12" sm="12" class="px-5 py-5 px-md-16 py-md-5">
                <v-col cols="12" md="10" sm="12">
                    <h4 class="text-h5 font-weight-bold">How to Ask "How?" in Japanese – Formal & Casual Usage</h4>
                    <p class="text-justify">
                        In Japanese, "how" is expressed differently depending on context. This lesson covers
                        <strong>どう</strong>,
                        <strong>どうやって</strong>, <strong>いかが</strong>, and <strong>いくら</strong>.
                    </p>
                </v-col>
                <v-col cols="12" md="10" sm="12">
                    <v-list-item v-for="(item, index) in accordion">
                        <b>{{ item.header }}</b>
                        <p class="text-justify">{{ item.description }}</p>
                        <ul class="mx-8">
                            <li v-for="list in item.type">{{ list }}</li>
                        </ul>
                    </v-list-item>
                </v-col>
                <v-alert title="Summary">
                    <ul class="mx-8">
                        <li><strong>どう</strong> – How (general condition or feeling)</li>
                        <li><strong>どうやって</strong> – How (method or procedure)</li>
                        <li><strong>いかが</strong> – Polite "how" (used in formal settings)</li>
                        <li><strong>いくら</strong> – How much (price/amount)</li>
                    </ul>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts" setup>
const accordion = [
    { header: '1. Using どう (dō)', description: 'Used to ask "how" in terms of impression or condition.', type: ['Formal: その映画はどうでしたか？(Sono eiga wa dō deshita ka?) — How was the movie?', 'Casual: 映画どうだった？(Eiga dō datta?) — How was the movie?'] },
    { header: '2. Using どうやって (dō yatte)', description: 'Asks "how" in terms of method or procedure.', type: ['Formal: どうやって会社に行きますか？(Dō yatte kaisha ni ikimasu ka?) — How do you get to work?', 'Casual: 会社ってどうやって行くの？(Kaisha tte dō yatte iku no?) — How do you get to work?'] },
    { header: '3. Bonus: いかが (ikaga)', description: 'A polite version of どう, used in formal and customer service settings.', type: ['Example: お食事はいかがでしたか？(Oshokuji wa ikaga deshita ka?) — How was your meal?'] },
    { header: '4. Asking "How much?": いくら (ikura)', description: 'いくら means "how much", and it\'s used to ask about price or quantity — not method.', type: ['Formal: この本はいくらですか？ (Kono hon wa ikura desu ka?) — How much is this book?', 'Casual: これいくら？(Kore ikura?) — How much is this?'] },
]
</script>

<style scoped>
.card-header h3 {
    margin: 0;
}
</style>
