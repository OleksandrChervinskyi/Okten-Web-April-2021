class Car {
    mark: string;
    year: number;
    crashed: boolean;
    power?: number;
    color? = 'grey';


    constructor(mark: string, year: number, crashed: boolean, power: number, color: string) {
        this.mark = mark;
        this.year = year;
        this.crashed = crashed;
        this.power = power;
        this.color = color;
    }
}


function parametrization(
    name: string,
    age: number,
    married: boolean,
    children?: any [],
    wifes ?: string [],
    cars ?: {} []
) {

}

const camry = new Car('toyota', 2002, true, 300, 'red');
parametrization('alex', 23, false, [], [], [{camry}])


interface House {
    walls: string,
    height: number,
    area: number,
    balcony: boolean,
    neibors?: string[],
    inhabitents?: {}

    drive?: (a: number) => string
}

function getHouse(house: House): void {

}

getHouse({walls: 'living', area: 30, balcony: true, height: 300})
getHouse({
    walls: 'bath',
    area: 5,
    balcony: false,
    height: 300,
    inhabitents: {new: 'jj'},
    neibors: ['maik', 'natali']
})

class CondoMimnimum implements House {
    area: number;
    balcony: boolean;
    height: number;
    inhabitents: {};
    neibors: string[];
    walls: string;
    flors?: number

    drive(a: number): string {
        return "";
    }

    constructor(area: number, balcony: boolean, height: number, inhabitents: {}, neibors: string[], walls: string, flors: number) {
        this.area = area;
        this.balcony = balcony;
        this.height = height;
        this.inhabitents = inhabitents;
        this.neibors = neibors;
        this.walls = walls;
        this.flors = flors;
    }
}

class BigHouse implements House {
    area: number;
    balcony: boolean;
    height: number;
    inhabitents: {};
    neibors: string[];
    walls: string;
    price ?: number

    drive(a: number): string {
        return "";
    }

}

let houses: House [] = [
    new CondoMimnimum(2, true, 300, {}, [], 'ss', 2)
]

