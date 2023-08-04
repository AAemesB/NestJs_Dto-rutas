import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';

import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars:Car[] = [
        {

            id: uuid(),
            marca: 'Toyota',
            modelo: 'Hilux'
        },
        {
            id: uuid(),
            marca: 'Mahindra',
            modelo: 'Scorpio'
        },
        {
            id: uuid(),
            marca: 'Nissan',
            modelo: 'Frontier'
        }
    ];


    public findAll () {
        return this.cars;
    }

    public findById (id: string) {
        const car = this.cars.find(carro => carro.id === id)

        if (!car) throw new NotFoundException(`Carro con id ${id} no encontrado`);

        return car;
    }

    public createCar (createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            marca: createCarDto.marca,
            modelo: createCarDto.modelo
        }


        this.cars.push(car);
        return car;
    }

    public updateCar ( id: string, updateCarDto: UpdateCarDto) {

        let carDB = this.findById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(`Id de auto no es valido en el body`)
        }

        this.cars = this.cars.map( car => {
            
            if (car.id === id) {
                
                carDB = {...carDB, ...updateCarDto, id}
                return carDB;
            }
            return car;
        })

        return carDB;
    }

    public deleteCar (id: string) {

        const car = this.findById(id);
        console.log(car);

        this.cars = this.cars.filter(car => car.id !== id);

    }

}