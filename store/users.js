export const state = () => ({
  users: [],
  gallery: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({ commit }) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')

    // Если использовать ЧПУ
    /*const modifyUsers = users.map(u => {
      const newUser = Object.assign({}, u)
      newUser.slug = u.name.replace(/ /g, "_").replace(/\./g, "").toLowerCase()
      return newUser
    })*/

    commit('setUsers', users)
  },
}

export const getters = {
  users: s => s.users,
}

