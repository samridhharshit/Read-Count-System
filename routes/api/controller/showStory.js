const Story = require('../../../database/models/container/story')
const History = require('../../../database/models/container/history')

const getStory = async (userId, storyId) => {
    const historyObj = { userId, storyId }

    await History.create(historyObj)

    return await Story.findOne({
        where: {
            id: storyId,
        }
    })
}

module.exports = getStory