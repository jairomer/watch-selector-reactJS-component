import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
  const currentHour = new Date().getHours();
  const currentMin = new Date().getMinutes();
  const clockMin = currentMin > 9 ? currentMin : '0'+currentMin;
  const clockHour =  currentHour > 9 ? currentHour : '0'+currentHour;
 
  //console.log(props.RenderHeartbeatSection ?
  //  "Rendering heart beat." : "Rendering time")
  return (
      <div className={classes.MainContainer}>
        <img className={classes.ProductPreviewImg} src={props.PreviewImg} alt="Product Preview" />
        {
            props.RenderHeartbeatSection ? 
            <div className={classes.HeartBeatSection}>
              <p>78</p>
              <img src={props.HeartIconImg} alt="heart beat"/>
            </div>
            : 
            <div className={classes.TimeSection}>
              <p>{`${clockHour}:${clockMin}`}</p>
            </div>
        }
      </div>
  );
}

export default ProductPreview;