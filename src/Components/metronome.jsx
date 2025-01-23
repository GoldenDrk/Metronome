import { useState, useRef, useEffect } from 'react'
import '../Components Styles/metronome.css'
import MinusBtn from './subComponents/minus_button';
import PlusBtn from './subComponents/plus_button';

function Metronome() {
  const [bpm, setBpm] = useState(100);
  const [circ1, setCirc1] = useState('');
  const [circ2, setCirc2] = useState('');
  const [circ3, setCirc3] = useState('');
  const [circ4, setCirc4] = useState('');
  const [circ5, setCirc5] = useState('');
  const [circ6, setCirc6] = useState('');
  const [circ7, setCirc7] = useState('');
  const [circ8, setCirc8] = useState('');
  const [circ9, setCirc9] = useState('');
  const [circ10, setCirc10] = useState('');
  const [circ11, setCirc11] = useState('');
  const [circ12, setCirc12] = useState('');
  const [stop, setStop] = useState(true);
  const [data, setData] = useState('4/4');
  const options = [
      "3/4",
      "4/4",
      "5/4",
      "7/4",
      "6/8",
      "7/8",
      "9/8",
      "12/8",
  ];
  let beat = 0;
  let beatsPerMinute;

  const stopRef = useRef(stop);
  const audioRef1 = useRef(new Audio('https://cdn.freesound.org/previews/250/250551_4570971-lq.mp3'))
  const audioRef2 = useRef(new Audio("https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3"));
  const audioRef22 = useRef(new Audio("https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3"));
  const audioRef222 = useRef(new Audio("https://cdn.freesound.org/previews/250/250552_4570971-lq.mp3"));

  useEffect(() => {
    if (!stop) beatizar();
    if (data == '6/8' || data == '7/8' || data == '9/8' || data == '12/8') {
      beatsPerMinute = ((60 / bpm) * 1000)/2;
    } else {
      beatsPerMinute = (60 / bpm) * 1000;
    };
  }, [stop, bpm])

  const beatizar = () => {
    if (stopRef.current) return;
    if (data == '4/4') {
      setTimeout(() => {
        (beat < 4) ? (beat++) : (beat = beat - 3);
        if (beat == 1 && !stopRef.current) setCirc4(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '3/4') {
      setTimeout(() => {
        (beat < 3) ? (beat++) : (beat = beat - 2);
        if (beat == 1 && !stopRef.current) setCirc3(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '5/4') {
      setTimeout(() => {
        (beat < 5) ? (beat++) : (beat = beat - 4);
        if (beat == 1 && !stopRef.current) setCirc5(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (beat == 5 && !stopRef.current) setCirc4(''), setCirc5('blue'), audioRef2.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), setCirc5(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '6/8') {
      setTimeout(() => {
        (beat < 6) ? (beat++) : (beat = beat - 5);
        if (beat == 1 && !stopRef.current) setCirc6(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (beat == 5 && !stopRef.current) setCirc4(''), setCirc5('blue'), audioRef2.current.play();
        if (beat == 6 && !stopRef.current) setCirc5(''), setCirc6('blue'), audioRef22.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), setCirc5(''), setCirc6(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '7/4' || data == '7/8') {
      setTimeout(() => {
        (beat < 7) ? (beat++) : (beat = beat - 6);
        if (beat == 1 && !stopRef.current) setCirc7(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (beat == 5 && !stopRef.current) setCirc4(''), setCirc5('blue'), audioRef2.current.play();
        if (beat == 6 && !stopRef.current) setCirc5(''), setCirc6('blue'), audioRef22.current.play();
        if (beat == 7 && !stopRef.current) setCirc6(''), setCirc7('blue'), audioRef222.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), setCirc5(''), setCirc6(''), setCirc7(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '9/8') {
      setTimeout(() => {
        (beat < 9) ? (beat++) : (beat = beat - 8);
        if (beat == 1 && !stopRef.current) setCirc9(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (beat == 5 && !stopRef.current) setCirc4(''), setCirc5('blue'), audioRef2.current.play();
        if (beat == 6 && !stopRef.current) setCirc5(''), setCirc6('blue'), audioRef22.current.play();
        if (beat == 7 && !stopRef.current) setCirc6(''), setCirc7('blue'), audioRef222.current.play();
        if (beat == 8 && !stopRef.current) setCirc7(''), setCirc8('blue'), audioRef2.current.play();
        if (beat == 9 && !stopRef.current) setCirc8(''), setCirc9('blue'), audioRef22.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), setCirc5(''), setCirc6(''), setCirc7(''), setCirc8(''), setCirc9(''), beat = 0;
      }, beatsPerMinute);
    };
    if (data == '12/8') {
      setTimeout(() => {
        (beat < 12) ? (beat++) : (beat = beat - 11);
        if (beat == 1 && !stopRef.current) setCirc12(''), setCirc1('blue'), audioRef1.current.play();
        if (beat == 2 && !stopRef.current) setCirc1(''), setCirc2('blue'), audioRef2.current.play();
        if (beat == 3 && !stopRef.current) setCirc2(''), setCirc3('blue'), audioRef22.current.play();
        if (beat == 4 && !stopRef.current) setCirc3(''), setCirc4('blue'), audioRef222.current.play();
        if (beat == 5 && !stopRef.current) setCirc4(''), setCirc5('blue'), audioRef2.current.play();
        if (beat == 6 && !stopRef.current) setCirc5(''), setCirc6('blue'), audioRef22.current.play();
        if (beat == 7 && !stopRef.current) setCirc6(''), setCirc7('blue'), audioRef222.current.play();
        if (beat == 8 && !stopRef.current) setCirc7(''), setCirc8('blue'), audioRef2.current.play();
        if (beat == 9 && !stopRef.current) setCirc8(''), setCirc9('blue'), audioRef22.current.play();
        if (beat == 10 && !stopRef.current) setCirc9(''), setCirc10('blue'), audioRef222.current.play();
        if (beat == 11 && !stopRef.current) setCirc10(''), setCirc11('blue'), audioRef2.current.play();
        if (beat == 12 && !stopRef.current) setCirc11(''), setCirc12('blue'), audioRef22.current.play();
        if (!stopRef.current) beatizar();
        if (stopRef.current) setCirc1(''), setCirc2(''), setCirc3(''), setCirc4(''), setCirc5(''), setCirc6(''), setCirc7(''), setCirc8(''), setCirc9(''), setCirc9(''), setCirc10(''), setCirc11(''), setCirc11(''), setCirc12(''), beat = 0;
      }, beatsPerMinute);
    };
  };

  const manageToggle = () => {
    setStop((prev) => {
      const newValue = !prev;
      stopRef.current = newValue;
      return newValue;
    });
    document.getElementById('player').blur();
  };

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    document.getElementById('selectron').blur();
  };

  const precise = (x) => {
    let e = parseInt(bpm);
    (x == 1) ? (setBpm(e + 1)) : (setBpm(e - 1));
  }

  return (
    <>
      <div className="toc3GranContainer">
        <h1>
          <img src="https://www.svgrepo.com/show/54034/metronome.svg" alt="metronome_svg" style={{height:50 + 'px'}} />
          <span style={{paddingBottom: 0.25 + 'rem'}}>METRONOME</span>
        </h1>
        <div className="metr">
          <div className="circMetr" id={circ1} style={{width: 50 + 'px', height: 50 + 'px'}}></div>
          <div className="circMetr" id={circ2}></div>
          <div className="circMetr" id={circ3}></div>
          {(data == '4/4' || data == '5/4' || data == '6/8' || data == '7/4' || data == '7/8' || data == '9/8' || data == '12/8') && <div className="circMetr" id={circ4}></div>}
          {(data == '5/4' || data == '6/8' || data == '7/4' || data == '7/8' || data == '9/8' || data == '12/8') && <div className="circMetr" id={circ5}></div>}
          {(data == '6/8' || data == '7/4' || data == '7/8' || data == '9/8' || data == '12/8') && <div className="circMetr" id={circ6}></div>}
          {(data == '7/4' || data == '7/8' || data == '9/8' || data == '12/8') && <div className="circMetr" id={circ7}></div>}
          {(data == '9/8' || data == '12/8') && <><div className="circMetr" id={circ8}></div>
          <div className="circMetr" id={circ9}></div></>}
          {data == '12/8' && <><div className="circMetr" id={circ10}></div>
          <div className="circMetr" id={circ11}></div>
          <div className="circMetr" id={circ12}></div></>}
        </div>
        <button id="player" style={{marginBottom: 1.5 + 'em'}} onClick={manageToggle}>
          {stop ? <i className="fa-solid fa-circle-play fa-2xl"></i> : <i className="fa-solid fa-circle-pause fa-2xl"></i>}
        </button>
        <br />
        <input style={{marginTop: 1.5 + 'em'}} type="range" max='280' value={bpm} onChange={(e) => setBpm(e.target.value)} />
        <br />
        <div className="beats">
          <div style={{width: 50 + 'px', height: 50 + 'px'}} onClick={precise}>
            <MinusBtn />
          </div>
          <span>{bpm}</span>
          <div style={{width: 50 + 'px', height: 50 + 'px'}} onClick={() => precise(1)}>
            <PlusBtn />
          </div>
        </div>
        <select id="selectron" onChange={onOptionChangeHandler} style={{marginTop:1 + 'rem'}} defaultValue={options[1]}>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
      </div>
    </>
  )
};

export default Metronome