import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hits the beach!',
    iconName: 'Sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'; 
  } else {
    return lat > 0 ? 'winter' : 'summer'; 
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // seasonConfig[season] {text, iconName}
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}/>
    </div>
    
  );
};

export default SeasonDisplay;
