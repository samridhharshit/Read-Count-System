const History = require('../../../database/models/container/history')

const getUserCountsForStory = async (storyId) => {
    // return await History.count({
    //     where: { storyId },
    //     distinct: 'userId'
    // })

    const rows = await History.aggregate('storyId', 'SUM', {
        where: { storyId },
        plain: false,
        group: ['userId']
    })
    if (rows !== null) {
        return {
            success: true,
            data: rows.length
        }
    }
    return {
        success: false,
        message: 'Rows Couldn\'t be found...'
    }
}

module.exports = getUserCountsForStory