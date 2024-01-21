import './App.css';

import React, { Component } from 'react';

import classes from './App.module.css';
import ProductData from './data_layer/ProductData';
import HeartIcon from './data_layer/img/heart.png';

import ProductPreview from './product_preview/ProductPreview.js';
import ProductDetails from './product_details/ProductDetails.js';
import TopBar from './top_bar/TopBar';

class App extends Component {

  constructor(props) {
    /* This will be called on component creation. */
    super(props);

    this.state = {
      productData: ProductData,
      currentPreviewImagePos: 0,
      currentRenderedFeaturePos: 0,
      showHeartbeat: true,
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only render the component if that state has changed.
    if (nextState.currentPreviewImagePos === this.state.currentPreviewImagePos &&
        nextState.currentRenderedFeaturePos === this.state.currentRenderedFeaturePos) {
      console.log("Component did not update.");
      return false;
    }

    return true;
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  componentDidUpdate() {
    console.log("Inside ComponentDidUpdate");
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
