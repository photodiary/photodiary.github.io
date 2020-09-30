import React from 'react';
import { data } from './data'
import ResponsiveGallery from 'react-responsive-gallery';
import './style.css';

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryId = this.props.match.params.id;
    const names = ["Fotografia portretowa", "Fotografia par", "Fotografia rodzinna", "Fotografia kulinarna"]
    var categoryName = names[categoryId - 1]
    var photos = data[categoryId - 1]

    return (
      <div style={{ padding: "5vh 5vw" }}>
        <h3>{categoryName}</h3>
        <ResponsiveGallery
          images={photos}
          useLightBox="true"
          lightBoxAdditionalProps={{ enableZoom: false, clickOutsideToClose: true, discourageDownloads: true }}
          numOfImagesPerRow={{ xs: 1, s: 2, m: 3, l: 3, xl: 4, xxl: 4 }}
          imagesPaddingBottom={{ xs: 8, s: 8, m: 8, l: 8, xl: 8, xxl: 8 }}
        />
      </div>
    );
  }
}