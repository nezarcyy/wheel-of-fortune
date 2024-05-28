import React, { useEffect, useRef, useState } from 'react';
import styles from '../WheelOfFortune.module.css';
import WinningPopup from './WiningPopup';

const sectors = [
  { color: '#f82', label: 'itm1' },
  { color: '#0bf', label: 'itm2' },
  { color: '#fb0', label: 'itm3' },
  { color: '#0fb', label: 'itm4' },
  { color: '#b0f', label: 'itm5' },
  { color: '#0fb', label: 'itm6' },
];

const rand = (m: number, M: number) => Math.random() * (M - m) + m;
const tot = sectors.length;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const WheelOfFortune: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const [firstSpin, setFirstSpin] = useState<boolean>(true); 
  const [currentLabel, setCurrentLabel] = useState<string>('Spin The Wheel to Win a Prize');
  const [spinning, setSpinning] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  let angVel = 0;
  let ang = 0;
  const friction = 0.991;

  const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

  const drawSector = (ctx: CanvasRenderingContext2D, sector: any, i: number) => {
    const ang = arc * i;
    const rad = ctx.canvas.width / 2;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText(sector.label, rad - 10, 10);
    ctx.restore();
  };

  const rotate = (ctx: CanvasRenderingContext2D) => {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
    if (spinRef.current) {
      spinRef.current.textContent = !angVel ? 'SPIN' : sector.label;
      spinRef.current.style.background = sector.color;
    }
    if (!angVel) {
      setCurrentLabel(sector.label); // Update the current label when spinning stops
      setSpinning(false);
     

    

          setModalVisible(true) 
        
      // Show the modal when spinning stops
    }
  };

  console.log('isvissiiiible  ', modalVisible , '  == ', firstSpin);
  
  const frame = (ctx: CanvasRenderingContext2D) => {
    if (!angVel) {
      return;
    }
    angVel *= friction;
    if (angVel < 0.002) angVel = 0;
    ang += angVel;
    ang %= TAU;
    rotate(ctx);
  };

  const engine = (ctx: CanvasRenderingContext2D) => {
    frame(ctx);
    requestAnimationFrame(() => engine(ctx));
  };

  useEffect(() => {
   
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        sectors.forEach((sector, i) => drawSector(ctx, sector, i));
        rotate(ctx);
        engine(ctx);
      }
    }

    if (spinRef.current) {
      spinRef.current.addEventListener('click', () => {
        if (firstSpin) {
          setFirstSpin(false);

setModalVisible(false)
        }
        if (!angVel) {
          angVel = rand(0.25, 0.45);
          setSpinning(true);
          setCurrentLabel('Spin The Wheel to Win a Prize');
        }
      });
    }
  }, []);

  return (
    <div id={styles.container}>
      <div id={styles.wheelOfFortune}>
        <canvas ref={canvasRef} id="wheel" width="650" height="650"></canvas>
        <div ref={spinRef} id={styles.spin}>SPIN</div>
      </div>
      <div className={styles.textarea}>
        {firstSpin ? 'Spin The Wheel to Win a Prize' : currentLabel}
      </div>
     {!firstSpin && <WinningPopup
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        winningItem={currentLabel}
      />}
    </div>
  );
};

export default WheelOfFortune;
