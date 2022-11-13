import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ThemesService } from './themes.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@WebSocketGateway()
export class ThemesGateway {
  constructor(private readonly themesService: ThemesService) {}

  @SubscribeMessage('createTheme')
  create(@MessageBody() createThemeDto: CreateThemeDto) {
    return this.themesService.create(createThemeDto);
  }

  @SubscribeMessage('findAllThemes')
  findAll() {
    return this.themesService.findAll();
  }

  @SubscribeMessage('findOneTheme')
  findOne(@MessageBody() id: number) {
    return this.themesService.findOne(id);
  }

  @SubscribeMessage('updateTheme')
  update(@MessageBody() updateThemeDto: UpdateThemeDto) {
    return this.themesService.update(updateThemeDto.id, updateThemeDto);
  }

  @SubscribeMessage('removeTheme')
  remove(@MessageBody() id: number) {
    return this.themesService.remove(id);
  }
}
