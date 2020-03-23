const setDataForMaryCards = (card) => {
    card.age = 7;
    card.avatar = '/avatars/img-2.png';
    card.gender = 'Girl';
    card.dateOfNextVisit = '09/22/2019';
    card.dateOfNextVaccine = '09/25/2019';
    card.hospital = 'Bellevue Hospital Center';
    card.school = 'Fox Meadow School';

    return card;
};

const setDataForNickCards = (card) => {
    card.age = 8;
    card.avatar = '/avatars/img-3.png';
    card.gender = 'Boy';
    card.dateOfNextVisit = '09/22/2019';
    card.dateOfNextVaccine = '09/25/2019';
    card.hospital = "Cohen Children's Medical Centre";
    card.school = 'Lakeville Elementary School';

    return card;
};

export default {
    setDataForMaryCards,
    setDataForNickCards
}