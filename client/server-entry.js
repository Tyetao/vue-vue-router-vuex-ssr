import createApp from './create-app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matcheComponents = router.getMatchedComponents()
      if (!matcheComponents.length) {
        return reject(new Error('no component match'))
      }
      context.meta = app.$meta()
      resolve(app)
    })
  })
}
