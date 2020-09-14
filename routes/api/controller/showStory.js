const Story = require('../../../database/models/container/story')
const History = require('../../../database/models/container/history')
const getUserCountsForStory = require('../controller/getUserCountsForStory')

const getStory = async (userId, storyId) => {
    if (userId !== null && storyId !== null) {
        const historyObj = { userId, storyId }

        await History.create(historyObj)
        const readCount = await getUserCountsForStory(storyId)

        const story = await Story.findOne({
            where: {
                id: storyId
            }
        })

        return { story, readCount }
    }
    return {
        success: false,
        message: `please provide user id and story id in order to get desired results... `
    }

}

module.exports = getStory