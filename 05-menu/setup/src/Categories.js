import data from './data';

const repeatedCategories = ['all'];

data.forEach((element) => repeatedCategories.push(element.category));

const categories = Array.from(new Set(repeatedCategories));

export default categories;
