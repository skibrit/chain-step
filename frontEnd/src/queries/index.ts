export const SEARCH_ARTIST = `
    query artists($searchQuery: String!, $itemCount: Int!, $after: String!){
        search {
               artists(query: $searchQuery, first : $itemCount, after: $after) {
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
                               primaryType,
                               firstReleaseDate
                               coverArtArchive {
                                   front,
                                   back,
                                   images {
                                       image
                                   }
                               }
                           }
                       }
                   }
               }
        }
   
    }
`;

export const GET_ALBUM = `
    query Album($albumId: MBID!){
      lookup {
        releaseGroup(mbid:$albumId) {
          id,
          title,
          mbid,
          primaryType,
          firstReleaseDate
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
                      mbid
                      id
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
