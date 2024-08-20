import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'this will return all movies'
    }

    //이게 :id겟보다 밑이면 동작못함
    @Get("search")
    search(@Query('year') searchingYear: string){
        return `We are seaching for a movice with title after: ${searchingYear}`
    }

    @Get(":id")
    getOne( @Param('id') movieId: string) {
        return `This will return one movies wuth the id: ${movieId}`;
    }
    
    @Post()
    create( @Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete(":id")
    remove( @Param('id') movieId: String) {
        return `This will delete one movies wuth the id: ${movieId}`;
        
    }

    @Patch(':id')
    path( @Param('id') movieId: String, @Body() updateData ){
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }



}
