'use client';
import { sectionSlice, selectSectionIsVisible, useDispatch, useSelector } from '@/lib/redux';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Section({ children, id, className }: { children: React.ReactNode; id: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  const isVisible = useSelector((state) => selectSectionIsVisible(state, id));

  useEffect(() => {
    if (!ref.current) return;
    if (isInView && !isVisible) {
      dispatch(sectionSlice.actions.setVisible({ key: ref.current.id }));
    } else if (!isInView && isVisible) {
      dispatch(sectionSlice.actions.setHidden({ key: ref.current.id }));
    }
  }, [id, isInView, dispatch, isVisible]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
