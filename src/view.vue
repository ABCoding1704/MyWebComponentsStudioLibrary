<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import TooltipContainsDropdownSelectionControl from './TooltipContainsDropdownSelectionControl.vue'

export default defineComponent({
  components: {
    TooltipContainsDropdownSelectionControl
  },
  data() {

      return {

      }
  },
  setup() {

      return {

      }
  },
  methods: {
    ShowToolTip(element: any) {
      // var boxElement = document.getElementById(element.)
     
      // var posX: number = e.clientX
      // var posY: number = e.clientY
      // console.debug(element)
      alert(element)
      // console.debug("Element x-Pos: " + element.posX + "\nElement y-Pos: " + element.posY)
    },
    HideToolTip(element: any) {

    }     
  }
})


</script>


<template>
  <div class="boxes">
    <div name="red" class="box red" @mouseenter="ShowToolTip(this)" @mouseleave="HideToolTip(this)"/>
    <div name="blue" class="box blue" @mouseover="ShowToolTip(this)" @mousedown="HideToolTip(this)"/>
    <div name="green" class="box green" @mouseover="ShowToolTip(this)" @mousedown="HideToolTip(this)"/>
  </div>

  <div class="tooltip-container">
    <TooltipContainsDropdownSelectionControl></TooltipContainsDropdownSelectionControl>
  </div>
</template>

<style scoped lang="scss">
.box {
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

.tooltip-container {
  position: absolute;
  height: fit-content;
  width: fit-content;
  left: v-bind('x');
  top: v-bind('y');
  z-index: 1;
}


</style>