import { Injectable } from '@nestjs/common';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateDto } from './dto/update-gamer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class GamersService {
  constructor(
    private readonly prisma: PrismaService
  ){}

  async findGamerById(userId) {
    return await this.prisma.gamerProfile.findUnique({
      where:{
        userId:userId
      },
      include:{
        homeCafe:true,
        inGameIds:true,
        participations:true,
        titlesHeld:true,
        payments:true,
        user:true
      }
    })
  }

  async updateInfo(userId,UpdateDto) {
    if(UpdateDto.email){
      await this.prisma.user.update({
        where:{
          id:userId
        },
        data:{
          email:UpdateDto.email
        }
      })
    }
    const gamerProfile = await this.findGamerById(userId);

    const updatedData = await this.prisma.gamerProfile.update({
      where:{
        userId:userId,
      },
      data:{
        displayName: UpdateDto.displayname ? UpdateDto.displayname : gamerProfile.displayName,
        avatarUrl: UpdateDto.avatarUrl ? UpdateDto.avatarUrl : gamerProfile.avatarUrl,
        city:UpdateDto.city ? UpdateDto.city : gamerProfile.city,

      }
    })

    return {
      updatedData,
      email: UpdateDto.email
    }

  }

  async getGamerPublicData(displayName){
    console.log(displayName)
    return await this.prisma.gamerProfile.findUnique({
      where:{
        displayName: displayName
      },
      include:{
        payments:false,
        homeCafe:true,
        inGameIds:true,
        titlesHeld:true,
      }
    })
  }

  async matchHistory(userId){
    const gamer = await this.prisma.gamerProfile.findUnique({
      where:{
        userId:userId
      }
    }) 
    return await this.prisma.tournamentParticipant.findMany({
      where:{
        gamerId:gamer.id
      }
    })
  }

  async titlesHeld(userId){
    return await this.prisma.gamerProfile.findUnique({
      where:{
        userId:userId
      },
      include:{
        titlesHeld:true,
      }
    })
  }
}
