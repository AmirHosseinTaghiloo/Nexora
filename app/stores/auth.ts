export interface AuthUser {
  id: string

  name?: string

  email?: string

  avatar?: string
}

export const useAuthStore =
  defineStore(
    'auth',
    () => {
      const user =
        ref<AuthUser | null>(
          null
        )

      const loading =
        ref(false)

      const isLoggedIn =
        computed(() => {
          return Boolean(
            user.value
          )
        })

      async function loadUser() {
        loading.value = true

        try {
          const response =
            await $fetch(
              '/api/auth/me'
            )

          user.value =
            response.user
              ? response.user
              : null
        } catch (
          error
        ) {
          user.value = null

          console.error(
            'Auth error:',
            error
          )
        } finally {
          loading.value =
            false
        }
      }

      function loginWithGoogle() {
        window.location.href =
          '/auth/google'
      }

      async function logout() {
        try {
          await $fetch(
            '/api/auth/logout',
            {
              method: 'POST'
            }
          )
        } finally {
          user.value = null

          await navigateTo(
            '/'
          )
        }
      }

      return {
        user,
        loading,
        isLoggedIn,
        loadUser,
        loginWithGoogle,
        logout
      }
    }
  )