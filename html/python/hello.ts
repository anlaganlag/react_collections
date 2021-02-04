interface Iperson{
    firstName:string
}

interface INinja extends Iperson{
    numberOfSwords:number
}

let ninja = {} as INinja
ninja.firstName ="Gal"
ninja.numberOfSwords =2