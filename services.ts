export const getQueryBody = (
    type:string = "",
    gender:string = "",
    status:string = "",
    species:string = "",
) => {
    return `query {
          characters(filter: { status: "${status}",type: "${type}", gender: "${gender}", species: "${species}" }) {
               results {
              name
              id
              status
              species
              gender
              type
              image
              location {
                name
              }
              episode {
                id
                episode
              }
            }
          }
        }`;
};