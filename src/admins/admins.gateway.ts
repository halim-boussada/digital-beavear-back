import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@WebSocketGateway()
export class AdminsGateway {
  constructor(private readonly adminsService: AdminsService) {}

  @SubscribeMessage('createAdmin')
  create(@MessageBody() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @SubscribeMessage('findAllAdmins')
  findAll() {
    return this.adminsService.findAll();
  }

  @SubscribeMessage('findOneAdmin')
  findOne(@MessageBody() id: number) {
    return this.adminsService.findOne(id);
  }

  @SubscribeMessage('updateAdmin')
  update(@MessageBody() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(updateAdminDto.id, updateAdminDto);
  }

  @SubscribeMessage('removeAdmin')
  remove(@MessageBody() id: number) {
    return this.adminsService.remove(id);
  }
}
