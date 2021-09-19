export const SEARCH_ARTIST = `
    query artists($searchQuery: String!, $itemCount: Int!){
        search {
               artists(query: $searchQuery, first : $itemCount) {
                   totalCount
                   pageInfo {
                    endCursor
                   }
                   nodes {
                       id,
                       mbid,
                       name,
                       country,
                       type,
                       releaseGroups(type: ALBUM, first: 5) {
                           nodes {
                               title,
                               mbid,
                               coverArtArchive {
                                   front,
                                   back,
                                   images {
                                       image
                                   }
                               }
                               relationships {
                                  releaseGroups {
                                    edges {
                                      node {
                                        target {
                                          ... on ReleaseGroup {
                                            title
                                            firstReleaseDate
                                          }
                                        }
                                      }
                                    }
                                  }
                               }
                           }
                       }
                   }
               }
        }
   
    }
`;
