try {
    require('typescript')
    require('core-js')
    require('lodash')
    require('weapp-tailwindcss')
    require('tailwindcss')
    require('@iconify/json')
    require('@weapp-tailwindcss/cli')
    require('react')
    require('vue')
    require('tsup');
} catch (error) {
    // 可能会在 serveless 函数加载失败，需要进一步拍错
    console.error(error)
}



const handler = (event, context, callback) => {
    // const eventObj = JSON.parse(event.toString());
    console.log('----------------------hello world-----------------------');
    callback(null, 'hello world');
}

module.exports = {
    handler
}
