<template>
  <div
    class="el-button el-button-small"
    foo="1"
    style="color: red;font-size:50px"
  >
    button
    <button id="core" disabled></button>
    <div id="testVisible" v-show="false"></div>
    <div id="testExist" v-if="true"></div>
    <div id="testNotExist" v-if="false"></div>
    <div data-testid="forVTU">for</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
