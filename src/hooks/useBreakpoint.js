import useScreenSizeWidth from "./useScreenSizeWidth";

export default function useBreakpoint() {
  const { width } = useScreenSizeWidth();

  return {
    isDesktop: width >= 768,
  };
}
