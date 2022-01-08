import { useState, useEffect, useRef } from 'react';

export const useImageCrop = () => {
  const [loading, setLoading] = useState(true);
  const ref: any = useRef();

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return { loading, setLoading, ref, onLoad };
};
