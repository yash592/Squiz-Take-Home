const sortDataByEmployeeNumber = (arr, order = 'asc') => {
    console.log('employee sort')
    if (order === 'asc') {
        return [...arr].sort((a, b) => a.numberOfEmployees - b.numberOfEmployees)
    }
    return [...arr].sort((a, b) => b.numberOfEmployees - a.numberOfEmployees)
}

const sortDataByName = (arr, order = 'asc') => {
    console.log('sort by name')

}

export { sortDataByEmployeeNumber, sortDataByName }