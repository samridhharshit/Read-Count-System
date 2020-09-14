const History = require('../../../database/models/container/history')

const getUserCountsForStory = async (storyId) => {
    // return await History.count({
    //     where: { storyId },
    //     distinct: 'userId'
    // })

    try {
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
    } catch (e) {
        return {
            success: false,
            message: e
        }
    }
}

module.exports = getUserCountsForStory