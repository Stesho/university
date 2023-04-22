import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [position, setPosition] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return visible;
};

export default useScrollDirection;
