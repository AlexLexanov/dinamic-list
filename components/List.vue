<template>
  <ul>
    <label
      :class="classCheck(child.checked)"
      class='flex justify-between items-center w-56 border-2 border-gray-200 hover:border-blue-200 rounded m-1 p-2'>
      <div>
        {{child.name}}
        <input
          v-model="child.checked"
          :indeterminate.prop="indeterminate"
          @change="checkAll(child)"
          type="checkbox"
          class='hidden'
        />
      </div>
      <button class='focus:outline-none' v-if="child.categories" @click="show = !show">
        <fa icon="chevron-down" :class="show ? 'transform rotate-180' : ''" />
      </button>
    </label>
      <list
        v-show="show"
        v-for="(child, i) of child.categories"
        :key="i"
        :child="child"
        class="ml-2"
      />
  </ul>
</template>

<script>
import List from '~/components/List'

export default {
  name: 'List',
  components: {
    List,
  },
  props: {
    child: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    show: false,
    indeterminate: false
  }),
  watch: {
    child: {
      handler(val) {
        this.check(val)
      },
      deep: true,
    },
    indeterminate() {
      this.check(this.child)
    },
  },
  methods: {
    checkAll(val) {
      if (val.categories) {
        val.categories.map((item) => {
          item.checked = val.checked
          if (item.categories) this.checkAll(item)
        })
      }
    },
    classCheck(val) {
      if (this.indeterminate) return 'bg-green-300'
      else if (val) return 'bg-blue-300'
      return ''
    },
    check(val) {
      let category = val.categories
      if (category) {
        const count = category.filter((item) => item.checked === true).length
        if (count < category.length && count) {
          this.indeterminate = true
          val.checked = false
        } else if (!count) {
          val.checked = false
          this.indeterminate = false
        } else if (count === category.length) {
          this.indeterminate = false
          val.checked = true
        }
      }
    },
  },
  created() {
    this.check(this.child)
  },
}
</script>
