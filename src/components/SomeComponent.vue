<template>
  <div :class="classes" @click="someMethod">{{ message + messageLength }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
      validator(val) {
        return ['', 'one', 'two'].includes(val)
      }
    },
    background: {
      type: String,
      default: 'gray'
    }
  },
  data() {
    return {
      someArray: [0, 1, 2, 3, 4, 5]
    }
  },
  computed: {
    classes() {
      return ['some-component', this.type ? `some-component--${this.type}` : '']
    },
    messageLength() {
      return this.message.length
    }
  },
  methods: {
    someMethod() {
      return 'Fire someMethod'
    },
    someEmit(arg) {
      this.$emit('event-name', arg)
    }
  }
}
</script>
