import { breakpoints } from "./globalData";

const Util = () => {
  const getWindowType = (type) => {
    const screens = Object.keys(breakpoints);
    switch (type) {
      case screens[0]:
        return window.innerWidth <= breakpoints.mobile;
      case screens[1]:
        return window.innerWidth <= breakpoints.tabletPortrait;
      case screens[2]:
        return window.innerWidth <= breakpoints.tabletLandscape;
      case screens[3]:
        return window.innerWidth <= breakpoints.laptop;
      case screens[4]:
        return window.innerWidth >= breakpoints.imac;
      default:
        return false;
    }
  };
  return { getWindowType: getWindowType };
};
const util = Util();
export { util };
