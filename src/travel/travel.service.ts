import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelService {
  create(createTravelDto: CreateTravelDto) {
    return 'Planifier un nouveau voyage ici';
  }

    private trips = [
      { id: 1, name: 'to China', price: 9000 },
      { id: 2, name: 'to Morocco', price: 4000 },
      ];
  
    findAll() { 
      return this.trips;
   };

   findOne(id: number) {
      const t = this.trips.find(x => x.id === id);

      if (!t) {
          throw new NotFoundException();
      }

      return t;
  }  


  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
