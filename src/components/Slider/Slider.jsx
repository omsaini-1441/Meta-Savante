import React from 'react'
import "./Slider.css"


const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['Instgram', 'Levista', 'Quiklo', 'Nippo', 'GSquare', 'VeCura', 'MuschleBlaze', 'BharatPe', 'Nike', 'Levis',
   'Bandai', 'VeCura','Namco','Bewakoof','Vista','Google','Meta','Addidas','Boat'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 7;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span>{text}</div>
);

const Slider = () => {
  return (
    <div>
    <header className='namer'>
      <h1>Brands we Have <span className='text-primary '>Worked </span>with🧡</h1>
    </header>
  <div className='app'>
  
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  </div>
  </div>
)
  
};

export default Slider