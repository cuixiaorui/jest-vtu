export {};

declare global {
  namespace jest {
    interface Matchers<R, T = {}> {
      /**
       * @description
       * Check whether the given wrapper has certain classes within its `class` attribute.
       *
       * You must provide at least one class
       * @example
       *
       * Button.vue
       * <template>
       *   <button class="el-button--small">
       *   </button>
       * </template>
       *
       * const wrapper = mount(Button)
       *
       * expect(wrapper).toHaveClass(`el-button--small`)
       * expect(deleteButton).not.toHaveClass(`el-button--foo`)
       */
      toHaveClass(className: string): R;
      toHaveAttribute(attr: string, value?: string): R;
      toBeVisible(): R;
      toHaveTextContent(text: string): R;
      toBeExist(): R;
    }
  }
}

import { ComponentPublicInstance } from "vue";
import { DOMWrapper } from "@vue/test-utils";
declare module "@vue/test-utils" {
  export declare class VueWrapper<T extends ComponentPublicInstance> {
    getByTestId<K extends keyof HTMLElementTagNameMap>(
      selector: K
    ): DOMWrapper<HTMLElementTagNameMap[K]>;

    getByTestId<K extends keyof SVGElementTagNameMap>(
      selector: K
    ): DOMWrapper<SVGElementTagNameMap[K]>;

    getByTestId<T extends Element>(selector: string): DOMWrapper<T>;
  }
}
