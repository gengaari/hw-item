import './App.css';
import { CardGroup } from './components/CardGroup';

const data = [
  { img: 'img_1.png'},
  { img: 'img_2.png'},
  { img: 'img_3.png'},
  { img: 'img_4.png'},
  { img: 'img_5.png'},
  { img: 'img_6.png'},
  { img: 'img_7.png'},
  { img: 'img_8.png'},
  { img: 'img_9.png'},
  { img: 'img_10.png'},
  { img: 'img_11.png'},
  { img: 'img_12.png'},
  { img: 'img_13.png'},
  { img: 'img_14.png'},
  { img: 'img_15.png'},
  { img: 'img_16.png'},
  { img: 'img_17.png'},
  { img: 'img_18.png'},
];


function App() {
  return (
     <div>
        <h2 className="title">КАТАЛОГ</h2>
        <CardGroup items={data} />
    </div>
  );
}

export default App;
