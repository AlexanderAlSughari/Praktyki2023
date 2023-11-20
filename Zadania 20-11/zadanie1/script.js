const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const getBooksWithEvenNumberOfPages = (list) => list.filter(book => book.pages%2 == 0);
const getBooksWhereGengreEndsWithY = (list) => list.filter(book => book.genre.endsWith('y'));
const sumLettersInTitle = (book) => book.reduce((total, book) => total + book.title.replace(/\s/g,' ').length, 0);

const result1 = compose(getBooksWithEvenNumberOfPages, getBooksWhereGengreEndsWithY, sumLettersInTitle);
console.log(result1(books));

const getBooksWithOddNumberOfPages = (list) => list.filter(book => book.pages%2 == 1);
const getBooksWithNumberInTitle = (list) => list.filter(book => /[0-9]/.test(book.title));
const getBooksWithRatingMoreThanFive = (list) => list.filter((book) => book.rating > 5);
const arrayToNumber = (book) => book.reduce((total, book) => total + 1, 0);

const result2 = compose(getBooksWithOddNumberOfPages, getBooksWithNumberInTitle, getBooksWithRatingMoreThanFive, arrayToNumber);
console.log(result2(books));

const sortBooksDescendingByTitleLength = (list) => list.sort((a, b) => b.title.length - a.title.length);
const mapTitlesOfBooks = (list) => list.map((book) => book.title);

const result3 = compose(sortBooksDescendingByTitleLength, mapTitlesOfBooks);
console.log(result3(books).at(1));