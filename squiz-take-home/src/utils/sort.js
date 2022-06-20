const sortDataByEmployeeNumber = (arr, order = 'asc') => {
    console.log('employee sort')
    if (order === 'asc') {
        return [...arr].sort((a, b) => a.numberOfEmployees - b.numberOfEmployees)
    }
    return [...arr].sort((a, b) => b.numberOfEmployees - a.numberOfEmployees)
}

const sortDataByName = (arr, order = 'asc') => {
    console.log('sort by name')
    return [...arr].sort((a, b) => {
        let first = a.name.toLowerCase();
        let second = b.name.toLowerCase();
        console.log(first, second);

        if (first < second) {
            return -1;
        }
        if (first > second) {
            return 1;
        }
        return 0;


    })

}

export { sortDataByEmployeeNumber, sortDataByName }