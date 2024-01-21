import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    //console.log(props.data);

    const colorOptions = props.data.colorOptions.map((item, pos) => {
      const classArr = [];
      classArr.push(classes.ProductImage);
      if (pos === props.currentPreviewImagePos) {
        classArr.push(classes.SelectedProductImage);
      }

      return (
        <img
          key={pos}
          className={classArr.join(' ')}
          src={item.imageUrl}
          alt={item.styleName}
          onClick={() => props.onColorOptionClick(pos)} /> 
      ); 
    })

    const featureListButtons = props.data.featureList.map((item, pos) => {
      const classArr = [];
      classArr.push(classes.FeatureItem);
      if (pos === props.currentRenderedFeaturePos) {
        classArr.push(classes.SelectedFeaturesItem);
      }

      return (
        <button
          key={pos}
          onClick={()=> {props.onClickFeatureClick(pos)}}
          className={classArr.join(' ')}>
            {item}
        </button>
      );

    })

    return (        
        <div>
            <h1 className={classes.ProductTitle}>
              {props.data.title}
            </h1>
            <p className={classes.ProductDescription}>
              {props.data.description}
            </p> 
           
            <h3 className={classes.SectionHeading}>Select Color</h3>

            <div>
              {colorOptions}
            </div>
    
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              {featureListButtons}
              <br/>
              <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
      </div>
    );
}

export default ProductDetails;