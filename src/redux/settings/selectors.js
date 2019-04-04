const brandsSelector = store => store.settings.brands;
const pickupsSelector = store => store.settings.pickups;
const tremolosSelector = store => store.settings.tremolos;
const categoriesSelector = store => store.settings.categories;
const settingsFetchErrorSelector = store => store.settings.fetchError;

export {
    categoriesSelector,
    brandsSelector,
    pickupsSelector,
    tremolosSelector,
    settingsFetchErrorSelector
};
