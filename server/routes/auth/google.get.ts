export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        id: user.sub,
        name: user.name,
        email: user.email,
        avatar: user.picture
      }
    })

    return sendRedirect(
      event,
      '/account'
    )
  },

  onError(event, error) {
    console.error(
      'Google login error:',
      error
    )

    return sendRedirect(
      event,
      '/login?error=google'
    )
  }
})