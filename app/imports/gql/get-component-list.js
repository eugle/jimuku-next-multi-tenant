import {gql} from '@apollo/client'

export const GET_COMPONENT_LIST = gql`
    query GET_COMPONENT_LIST($sort: [String], $pagination: PaginationArg, $filters: ComponentFiltersInput){
      components(sort: $sort, pagination: $pagination, filters: $filters){
        data {
          id
          attributes {
            title
            model
            web_component_classify {
              data {
                attributes {
                  title
                }
              }
            }
            web_component_tags {
              data {
                attributes {
                  title
                }
              }
            }
            content
            notes
          }
        }
        meta {
          pagination {
            pageCount
            page
            pageSize
            total
          }
        }
      }
    }
`;
