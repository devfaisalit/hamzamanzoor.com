import { FC, memo, ReactElement } from "react";

const Container: FC<{ children: ReactElement,className?:string }> = memo(({ children,className }) => {
  return <div className={`mx-auto px-3 w-full sm:max-w-[620px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1220px] xxl:max-w-[1320px] ${className}`}>{children}</div>;
});

export default Container;
