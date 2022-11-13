import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { WidgetsService } from './widgets.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@WebSocketGateway()
export class WidgetsGateway {
  constructor(private readonly widgetsService: WidgetsService) {}

  @SubscribeMessage('createWidget')
  create(@MessageBody() createWidgetDto: CreateWidgetDto) {
    return this.widgetsService.create(createWidgetDto);
  }

  @SubscribeMessage('findAllWidgets')
  findAll() {
    return this.widgetsService.findAll();
  }

  @SubscribeMessage('findOneWidget')
  findOne(@MessageBody() id: number) {
    return this.widgetsService.findOne(id);
  }

  @SubscribeMessage('updateWidget')
  update(@MessageBody() updateWidgetDto: UpdateWidgetDto) {
    return this.widgetsService.update(updateWidgetDto.id, updateWidgetDto);
  }

  @SubscribeMessage('removeWidget')
  remove(@MessageBody() id: number) {
    return this.widgetsService.remove(id);
  }
}
