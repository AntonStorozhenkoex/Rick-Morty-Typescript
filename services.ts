export const getQueryBody = (
  type: string | string[] | undefined,
  gender: string | string[] | undefined,
  status: string | string[] | undefined,
  species: string | string[] | undefined,
): string => {
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
