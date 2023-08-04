import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update.car.dto';

// Tambien se puede colocar el decorador @UsePipes(ValidationPipe) luego del decorador @Controller para evitar colocar
// escribir @UsePipes(ValidationPipe) en la peticion Post y Patch

//Por lo tanto hay 3 opciones
//1- ValidationPipe en Post y patch
//2- ValidationPipe en el controlador
//3- ValidationPipe a nivel global del proyecto en Main.ts

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {


    constructor (private readonly carsService: CarsService) {}

    @Get()
    getAllCars() {
       return this.carsService.findAll();
    }

    @Get(':id')
    getCarById (@Param('id', ParseUUIDPipe) id: string) {

       return this.carsService.findById(id);
       
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    // @UsePipes(ValidationPipe)
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto: UpdateCarDto) {
       
        return this.carsService.updateCar(id, updateCarDto);
        
    }

    @Delete(':id')
    deleteCar (@Param('id', ParseUUIDPipe) id: string) {

       return this.carsService.deleteCar(id);
       
    }



}
