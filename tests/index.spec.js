import "../dist/index.js";
import { mount } from "@vue/test-utils";
import Button from "./suite/Button.vue";

describe("matchers", () => {
  describe("toHaveClass", () => {
    it("have class", () => {
      const wrapper = mount(Button);
      expect(wrapper).toHaveClass("el-button");
    });

    it("have not class", () => {
      const wrapper = mount(Button);
      expect(wrapper).not.toHaveClass("el-foo");
    });
  });

  describe("toHaveAttribute", () => {
    it("have attribute", () => {
      const wrapper = mount(Button);
      expect(wrapper).toHaveAttribute("foo");
    });

    it("specify the specific value", () => {
      const wrapper = mount(Button);
      expect(wrapper).toHaveAttribute("foo", "1");
    });

    it("child dom have attribute", () => {
      const wrapper = mount(Button);
      expect(wrapper.get("#core")).toHaveAttribute("disabled");
    });
  });

  describe("toBeVisible", () => {
    it("is visible", () => {
      const wrapper = mount(Button);
      expect(wrapper.get("#core")).toBeVisible();
    });

    it("is not visible", () => {
      const wrapper = mount(Button);
      expect(wrapper.get("#testVisible")).not.toBeVisible();
    });

    it("wrapper must be DomWrapper", () => {
      const wrapper = mount(Button);
      expect(() => {
        expect(wrapper).toBeVisible();
      }).toThrowError("wrapper must be DomWrapper");
    });
  });

  describe("toHaveTextContent", () => {
    it("have text content", () => {
      const wrapper = mount(Button);
      expect(wrapper).toHaveTextContent("button");
    });

    it("have not text content", () => {
      const wrapper = mount(Button);
      expect(wrapper).not.toHaveTextContent("bar");
    });
  });

  describe("toBeExist", () => {
    it("is exist", () => {
      const wrapper = mount(Button);
      expect(wrapper.find("#testExist")).toBeExist();
    });

    it("is not exist", () => {
      const wrapper = mount(Button);
      expect(wrapper.find("#testNotExist")).not.toBeExist();
    });
  });

  describe("toHaveStyle", () => {
    it("have style", () => {
      const wrapper = mount(Button);
      expect(wrapper).toHaveStyle({
        color: "red",
        fontSize:"50px"
      });
    });

    it("not have style", () => {
      const wrapper = mount(Button);
      expect(wrapper).not.toHaveStyle({
        color:"blue"
      });
    });
  });
});

describe("vtuPlugins", () => {
  describe("getByTestId", () => {
    it("use vueWrapper called ", () => {
      const wrapper = mount(Button);

      expect(wrapper.getByTestId("forVTU")).toBeTruthy();
      expect(wrapper.getByTestId("forVTU").text()).toContain("for");
    });

    it("use domWrapper called ", () => {
      const wrapper = mount(Button);

      const domWrapper = wrapper.get(".el-button");
      expect(domWrapper.getByTestId("forVTU")).toBeTruthy();
      expect(domWrapper.getByTestId("forVTU").text()).toContain("for");
    });
  });

  describe("findByTestId", () => {
    it("use vueWrapper called ", () => {
      const wrapper = mount(Button);

      expect(wrapper.findByTestId("forVTU")).toBeTruthy();
      expect(wrapper.findByTestId("forVTU").text()).toContain("for");
    });

    it("use domWrapper called ", () => {
      const wrapper = mount(Button);

      const domWrapper = wrapper.get(".el-button");
      expect(domWrapper.findByTestId("forVTU")).toBeTruthy();
      expect(domWrapper.findByTestId("forVTU").text()).toContain("for");
    });
  });
});
