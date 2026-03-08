import { useRef, useCallback } from "react";

export default function SafeButton({ className, ariaLabel, children }) {
  const touchStart = useRef(null);
  const buttonRef = useRef(null);

  const onTouchStart = useCallback((e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (!touchStart.current) return;
    const dx = Math.abs(e.changedTouches[0].clientX - touchStart.current.x);
    const dy = Math.abs(e.changedTouches[0].clientY - touchStart.current.y);
    if (dx > 10 || dy > 10) {
      e.preventDefault();
      e.stopPropagation();
    }
    touchStart.current = null;
  }, []);

  return (
    <button
      ref={buttonRef}
      data-einscricao-event="121211"
      data-einscricao-url="https://checkout.e-inscricao.com"
      data-einscricao-api-url="https://www.e-inscricao.com"
      data-einscricao-ms-api-url="https://ei-pay.e-inscricao.com"
      data-einscricao-receipt-url="https://recibo.e-inscricao.tech"
      data-einscricao-api-participants-url="https://participants.e-inscricao.com"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
