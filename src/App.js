import './App.css';

import React, { Component } from 'react';

import classes from './App.module.css';
import ProductData from './data_layer/ProductData';
import HeartIcon from './data_layer/img/heart.png';

import ProductPreview from './product_preview/ProductPreview.js';
import ProductDetails from './product_details/ProductDetails.js';
import TopBar from './top_bar/TopBar';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentRenderedFeaturePos: 0,
    showHeartbeat: true,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  };

  onFeatureOptionClick = (pos) => {
    this.setState({showHeartbeat: pos !== 0})
    this.setState({currentRenderedFeaturePos: pos})
  }

  render() {
    const currentPreviewImageUrl = this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl;
    return (
      <div className="App">
        <TopBar/>

        <div className={classes.MainContainer}>
          <ProductPreview
            className={classes.ProductPreview}
            PreviewImg={currentPreviewImageUrl}
            HeartIconImg={HeartIcon}
            RenderHeartbeatSection={this.state.showHeartbeat}
          />

          <ProductDetails
            className={classes.ProductData}
            data={this.state.productData}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            currentRenderedFeaturePos={this.state.currentRenderedFeaturePos}
            onColorOptionClick={this.onColorOptionClick}
            onClickFeatureClick={this.onFeatureOptionClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
