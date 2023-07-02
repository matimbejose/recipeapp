import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'matimbe-jose',
        title: 'matimbe jose',
        description: 'lavar arroz duas vezes com agua deixar cozinhar por dois minutos com potencia maxima no fugao a agas se for carvao aumente toda hora',
        ingredients: [
          '1kg de arroz pode ser sina',
          '20litros de agua',
          '20litros de agua',
          '20litros de agua'
        ],
        method: [
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
        ]
      },

      {
        slug: 'jose-justino',
        title: 'jose justino',
        description: 'lavar arroz duas vezes com agua deixar cozinhar por dois minutos com potencia maxima no fugao a agas se for carvao aumente toda hora',
        ingredients: [
          '1kg de arroz pode ser sina',
          '20litros de agua',
          '20litros de agua',
          '20litros de agua'
        ],
        method: [
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
        ]
      }
      
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
