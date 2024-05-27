import React, { useEffect, useRef } from 'react';
import '../Confettiful.css';

const Confettiful: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const confettiIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    class ConfettifulClass {
      el: HTMLElement;
      containerEl: HTMLElement | null;
      confettiFrequency: number;
      confettiColors: string[];
      confettiAnimations: string[];
      confettiInterval: NodeJS.Timeout | null;

      constructor(el: HTMLElement) {
        this.el = el;
        this.containerEl = null;
        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];
        this.confettiInterval = null;

        this._setupElements();
        this._renderConfetti();
      }

      _setupElements() {
        const containerEl = document.createElement('div');
        const elPosition = getComputedStyle(this.el).position;

        if (elPosition !== 'relative' && elPosition !== 'absolute') {
          this.el.style.position = 'relative';
        }

        containerEl.classList.add('confetti-container');
        this.el.appendChild(containerEl);
        this.containerEl = containerEl;
      }

      _renderConfetti() {
        this.confettiInterval = setInterval(() => {
          if (!this.containerEl) return;

          const confettiEl = document.createElement('div');
          const confettiSize = `${Math.floor(Math.random() * 3) + 7}px`;
          const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
          const confettiLeft = `${Math.floor(Math.random() * this.el.offsetWidth)}px`;
          const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

          confettiEl.classList.add('confetti', `confetti--animation-${confettiAnimation}`);
          confettiEl.style.left = confettiLeft;
          confettiEl.style.width = confettiSize;
          confettiEl.style.height = confettiSize;
          confettiEl.style.backgroundColor = confettiBackground;

          (confettiEl as any).removeTimeout = setTimeout(() => {
            confettiEl.parentNode?.removeChild(confettiEl);
          }, 3000);

          this.containerEl.appendChild(confettiEl);
        }, 25);
        confettiIntervalRef.current = this.confettiInterval;
      }
    }

    if (containerRef.current) {
      new ConfettifulClass(containerRef.current);
    }

    return () => {
      if (confettiIntervalRef.current) {
        clearInterval(confettiIntervalRef.current);
      }
    };
  }, []);

  return <div className="js-container container" ref={containerRef}></div>;
};

export default Confettiful;
