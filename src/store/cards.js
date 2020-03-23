import cardsApi from "../api/cards";
import cardsHelper from "../helpers/cards";
import dataCards from "../data/dataCards";

const initial = () => ({
    cards: JSON.parse(cardsHelper.getCards() || "[]"),
});

const state = initial();

const mutations = {
    setCards (state, cards) {
        state.cards = cards
    },
    reset (state) {
        cardsHelper.removeCards();
        Object.assign(state, initial())
    }
};

const getters = {

};
const actions = {
    async loadCards(context) {
        // const response = await cardsApi.getCards();
        // if (!response.data) {
        //     return null;
        // }

        const response = {
            "text": "[{\"id\":\"card_mary_robson_1\",\"type\":\"card\",\"name\":\"Mary Robson\",\"birth_date\":\"2017-05-24\",\"height\":197,\"weight\":85,\"vaccination\":null,\"parent\":\"user-parents-1\"},{\"id\":\"card_nick_robson_1\",\"type\":\"card\",\"name\":\"Nick Robson\",\"birth_date\":\"2017-05-24\",\"height\":197,\"weight\":85,\"vaccination\":null,\"parent\":\"user-parents-1\"}]"
        };

        let cards = JSON.parse(response.text);
        cards[0] = dataCards.setDataForMaryCards(cards[0]);
        cards[1] = dataCards.setDataForNickCards(cards[1]);

        context.commit('setCards', cards);
        cardsHelper.setCards(cards)
    },
    updateCard(context, {cardId, params}) {
        let cards = context.state.cards;
        cards.forEach((card) => {
            if(card.id === cardId) {
                card.height = params.height;
                card.weight = params.weight;
            }
        });
        context.commit('setCards', cards);
        cardsHelper.removeCards();
        cardsHelper.setCards(context.state.cards);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}