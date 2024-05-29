import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../WheelOfFortune.module.css';
import WinningPopup from './WiningPopup';
import { DataContext } from './../context/DataContext';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from './firebase-config';

export interface FirestoreData {
  id: string;
  label: string;
  color: string;
  Qte: number;
  valeur: string;
}

const WheelOfFortune: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useContext(DataContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const [firstSpin, setFirstSpin] = useState<boolean>(true);
  const [currentLabel, setCurrentLabel] = useState<string>('Spin The Wheel to Win a Prize');
  const [currentSector, setCurrentSector] = useState(data[0]);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const updateOrg = async (id: any, Qte: number) => {
    const orgDoc = doc(db, "organisation", id);
    const newFields = { Qte: Qte - 1 };
    await updateDoc(orgDoc, newFields);
  };

  const sectors = data.filter((item: { Qte: number }) => item.Qte > 0);
  const rand = (m: number, M: number) => Math.random() * (M - m) + m;
  const tot = sectors.length;
  const PI = Math.PI;
  const TAU = 2 * PI;
  const arc = TAU / sectors.length;
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
      spinRef.current.textContent = !angVel ? 'Alyf' : sector.label;
      spinRef.current.style.background = sector.color;
    }
    if (!angVel) {
      setCurrentLabel(sector.label); // Update the current label when spinning stops
      setSpinning(false);
      setModalVisible(true);
      setCurrentSector(sector);
      // updateOrg(sector.id, sector.Qte);
      // Show the modal when spinning stops
    }
  };

  const handleHomeIconClick = () => {
    console.log('Clock icon clicked');
    navigate('/');
  };

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
        sectors.forEach((sector: any, i: number) => drawSector(ctx, sector, i));
        rotate(ctx);
        engine(ctx);
      }
    }
    if (spinRef.current) {
      spinRef.current.addEventListener('click', () => {
        if (firstSpin) {
          setFirstSpin(false);
          setModalVisible(false);
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
    <div>
      <div id={styles.container}>
        <div id={styles.wheelOfFortune}>
          <canvas ref={canvasRef} id="wheel" width="600" height="600"></canvas>
          <div ref={spinRef} id={styles.spin}>Alyf</div>
        </div>
        <div className={styles.textarea}>
          {firstSpin ? 'Spin The Wheel to Win a Prize' : currentLabel}
        </div>
        {!firstSpin && <WinningPopup
          isVisible={modalVisible}
          onClose={() => {
            setModalVisible(false);
            updateOrg(currentSector.id, currentSector.Qte);
            navigate('/');
          }}
          winningItem={currentLabel}
        />}
      </div>
    </div>
  );
};

export default WheelOfFortune;
