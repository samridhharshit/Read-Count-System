const Story = require('../../../database/models/container/story')

const showStoryCollection = async () => {
    return await Story.findAll()
}

module.exports = showStoryCollection