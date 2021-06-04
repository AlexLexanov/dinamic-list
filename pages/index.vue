<template>
  <div>
    <list
      v-for="(item, i) of categories"
      :key="i"
      :child="item"
      categories='categories'
      class="text-gray-800 font-semibold text-lg"
    />
  </div>
</template>

<script>
import List from '~/components/List'

export default {
  components: { List },
  data: () => ({
    categories: [
      {
        name: 'Электроника',
        checked: false,
        categories: [
          { name: 'Телевизоры', checked: false },
          { name: 'Телефоны', checked: false },
          { name: 'Бытовая техника', checked: false },
          {
            name: 'Ноутбуки',
            checked: false,
            categories: [
              { name: 'Samsung', checked: true },
              { name: 'Apple', checked: false },
              { name: 'Lenovo', checked: false },
              { name: 'Acer', checked: false },
              {
                name: 'Категория',
                checked: false,
                categories: [
                  { name: 'Фрукты', checked: false },
                  { name: 'Овощи', checked: false },
                  { name: 'Злаки', checked: false },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Продукты питания',
        checked: false,
        categories: [
          { name: 'Фрукты', checked: false },
          { name: 'Овощи', checked: false },
          { name: 'Злаки', checked: false },
          { name: 'Мясо', checked: false },
        ],
      },
    ],
  }),
}
</script>
