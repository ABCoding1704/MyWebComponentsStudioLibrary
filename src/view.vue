<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
    data() {

        return {

        }
    },
    setup() {

        return {

        }
    },
    methods: {
      ShowToolTip(name: string) {

      },
      HideToolTip(name: string) {

      }     
    }
})


</script>


<template>
  <div name="red" class="container red" @mouseover="ShowToolTip(this.$name)" @mousedown="HideToolTip(this.$name)"/>
  <div name="blue" class="container blue" @mouseover="ShowToolTip(this.$name)" @mousedown="HideToolTip(this.$name)"/>
  <div name="green" class="container green" @mouseover="ShowToolTip(this.$name)" @mousedown="HideToolTip(this.$name)"/>
</template>

<style scoped lang="scss">
.container {
  height: 100px;
  width: 100px;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.image {
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
}
</style>