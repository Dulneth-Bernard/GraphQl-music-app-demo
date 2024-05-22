import { RESTDataSource } from "@apollo/datasource-rest";

export class SpotifyAPI extends RESTDataSource {
  
  baseURL = "https://spotify-demo-api-fe224840a08c.herokuapp.com/v1/";
  
  async getFeaturedPlaylists() {
    const response = await this.get<{ playlists: { items: any[] }}>("browse/featured-playlists");
    return response?.playlists?.items ?? [];
  }

}

//Because it's a very common task to fetch data from REST when building a GraphQL API, Apollo Server provides a dedicated DataSource class for just that: the RESTDataSource.
//Formatting code 