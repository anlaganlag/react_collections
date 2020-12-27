import React from "react";
import { useTrail, animated } from "react-spring";

type Props = {
  children: React.ReactNode;
  open: boolean;
  className?: string;
};

const Trail = ({ open, children, className, ...props }: Props) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div {...props}>
      {trail.map(({ x, height, opacity, ...rest }, index) => (
        <animated.div
          key={index}
          style={{
            ...rest,
            opacity: opacity as any,
            transform: x.to((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div className={className}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Trail;
