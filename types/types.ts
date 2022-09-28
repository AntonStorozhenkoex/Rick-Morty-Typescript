interface ILocation {
  name:string
}

interface IEpisode{
  id: string;
  name: string;
}

export interface ICharacter {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  location: ILocation
  episode: IEpisode
}

export interface IFormikValues {
  type: string;
  status: string;
  gender: string;
  species: string;
}

