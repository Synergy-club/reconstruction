import { useCallback } from 'react';

const useScrollToRef = (offset = 65) => {
  const scrollToRef = useCallback((ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Desplázate a la posición ajustada con el offset
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: 'smooth',
      });
    }
  }, [offset]);

  return scrollToRef;
};

export default useScrollToRef;
