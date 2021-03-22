<template>
<div id="app">
  <div class="grid">
    <div  :reverse="true" class="tilt" :class="cls" @mouseenter="enter" @mousemove="move" @mouseleave="leave">
      <img :src=images(image) alt="image" class="img-fluid">
    </div>
  </div>
</div>
</template>
<script>
  const tilts =''

  export default {
    name:'tilt',
    components: {'tilt':tilts},
    props: {
      image: {
        type: String,
        default: 'mac.png'
      },
      max: {
        type: Number,
        default: 40
      },
      cls: {
        type: String,
        required: false
      },
      perspective: {
        type: Number,
        default: 9000
      },
      reverse: {
        type: Boolean,
        default: false
      }
    },

      computed: {
        reverseValue() {
          return this.reverse ? -1 : 1
        }
      },
      mounted() {
        this.$el.style.cssText = `
          transform-origin: center;
          will-change: transform;
        `
      },
      data() {
        return {
          timer: null
        }
      },
      methods: {
        images(image) {
            return require('../assets/images/' + image)
        },
        getPosition(el) {
          const box = el.getBoundingClientRect()
          return {
            left: box.left,
            top: box.top,
            width: box.width,
            height: box.height
          }
        },
        toggleTransition() {
          if (this.timer) clearTimeout(this.timer)

          this.$el.style.transition = `
            all 150ms linear
          `
          this.timer = setTimeout(() => {
            this.$el.style.transition = ''
          }, 150)
        },
        enter() {
          this.toggleTransition()
        },
        move(e) {
          const pos = this.getPosition(this.$el)

          let x = Math.min((e.clientX - pos.left) / this.$el.offsetWidth, 1)
          let y = Math.min((e.clientY - pos.top) / this.$el.offsetHeight, 1)

          let X = this.reverseValue * (this.max / 2 - x * this.max)
          let Y = this.reverseValue * (y * this.max - this.max / 2)

          this.$el.style.transform = `
          perspective(${this.perspective}px) rotateX(${Y}deg) rotateY(${X}deg)
        `
        },
        leave(e) {
          this.toggleTransition()

          this.$el.style.transform = `
          perspective(${this.perspective}px) rotateX(0) rotateY(0)
        `
        }
    }
}
</script>
