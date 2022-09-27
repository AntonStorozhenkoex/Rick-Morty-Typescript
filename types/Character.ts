export interface ICharacter{
    item: {
        id:string,
        name:string,
        image:string,
        status:string,
        species:string,
        gender:string,
        type:string,
        location: {
        name:string
    },
    episode: {
        id:string,
            name:string
    }
}
}