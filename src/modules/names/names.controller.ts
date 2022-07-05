import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NamesService } from './names.service';

@Controller('api/v1/names')
@ApiTags('Names')
export class NamesController {

    constructor(private nameService: NamesService) { }

    @Post()
    @ApiOperation({
        description: 'Crea un nuevo nombre, Retorna true si se inserta el nombre.'
    })
    @ApiBody({
        description: 'Debes poner un nombre para agregarlo'
    })
    createName(@Body() data: { name: string }) {
        return this.nameService.createName(data.name)
    }


    @Get()
    @ApiOperation({
        description: 'Retorna nombres is empiezan con algunas letras, si no hay parametros retorna todos los nombres.'
    })
    getNames(@Query('start') start: string) {
        return this.nameService.getNames(start)
    }

    @Put('/:name/:newName')
    @ApiOperation({
        description: 'Actualiza un nombre, requiere de el nombre original y el nombre actual, regresa el true si lo hace correctamente'
    })
    updateName(@Param('name') name: string, @Param('newName') newName: string) {
        return this.nameService.updateName(name, newName);
    }

    @Delete('clear')
    @ApiOperation({
        description: 'Borra todos los nombre y entrega tru si lo hizo correctamente.'
    })
    clearNames() {
        return this.nameService.clearNames();
    }

    @Delete('/:name')
    @ApiOperation({
        description: 'Borra el nombre origional, Requiere de un el nombre original regresa el true si lo hace correctamente'
    })
    deleteName(@Param('name') name: string) {
        return this.nameService.deleteName(name);
    }




}
