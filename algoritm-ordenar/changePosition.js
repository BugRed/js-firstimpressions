const changePosition = (list, lowerPosition, actualPosition) => {

    let a = list[lowerPosition];
    let b = list[actualPosition];

    list[lowerPosition] = b;
    list[actualPosition] = a;

};

module.exports = changePosition;