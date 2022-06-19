const sortDataByEmployeeNumber = (arr, order = 'asc') => {
    if (order === 'asc') {
        return [...arr].sort((a, b) => a.numberOfEmployees - b.numberOfEmployees)
    }
    return [...arr].sort((a, b) => b.numberOfEmployees - a.numberOfEmployees)
}

const sortDataByName = (arr, order = 'asc') => {

}

export { sortDataByEmployeeNumber, sortDataByName }