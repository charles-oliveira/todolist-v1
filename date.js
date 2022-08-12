
exports.getDate = function() {

    const today = new Date()

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return day = today.toLocaleDateString('pt-BR', options)
}

exports.getDay = function() {

    const today = new Date()

    const options = {
        weekday: 'long'
    }

    return today = today.toLocaleDateString('pt-BR', options)
}

