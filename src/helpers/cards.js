const getCards = () => {
    return localStorage.getItem('cards')
};

const setCards = (cards) => {
    return localStorage.setItem('cards',  JSON.stringify(cards))
};

const removeCards = () => {
    return localStorage.removeItem('cards')
};

export default {
    getCards,
    setCards,
    removeCards,
}