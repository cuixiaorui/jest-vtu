import { config } from "@vue/test-utils";

function getByTestId(testId: string) {
  return this.get(`[data-testid=${testId}]`);
}

function findByTestId(testId: string) {
  return this.find(`[data-testid=${testId}]`);
}

function vueWrapperPlugins() {
  return {
    getByTestId,
    findByTestId,
  };
}

function domWrapperPlugins() {
  return {
    getByTestId,
    findByTestId,
  };
}

config.plugins.VueWrapper.install(vueWrapperPlugins);
config.plugins.DOMWrapper.install(domWrapperPlugins);
