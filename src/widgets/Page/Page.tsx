import {
  MutableRefObject, ReactNode, useRef, UIEvent,
} from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

import { getScrollSaveScrollByPath, scrollSaveActions } from "features/ScrollSave";

import { StateSchema } from "app/providers/StoreProvider";

import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 500);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
