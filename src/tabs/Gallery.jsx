import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
    photos: [],
  };
  onSubmit = searchValue => {
    if (!searchValue) return;
    this.setState({ searchValue });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      const {
        data: { photos, total_results },
      } = await ImageService.getImages(this.state.searchValue);
      this.setState({ photos });
    }
  }
  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit}></SearchForm>
        <Grid>
          {this.state.photos.length > 0 &&
            this.state.photos.map(({ id, alt, avg_color, src: { medium } }) => {
              return (
                <GridItem key={id}>
                  <CardItem color={avg_color}>
                    <img src={medium} alt={alt} />
                  </CardItem>
                </GridItem>
              );
            })}
        </Grid>
        <Button>Load More</Button>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
