import { Test, TestingModule } from '@nestjs/testing';
import { GuestsController } from '../guests.controller';
import { GuestsService } from '../guests.service';

describe('GuestsController', () => {
  let guestController: GuestsController;
  const mockGuestsService = {
    create: jest.fn(dto => {
      return{
        id: '2334',
        ...dto
      }
    }),
    update: jest.fn().mockImplementation((id, dto) => ({
      id: '2313',
      ...dto
    }))
  }

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
        controllers: [GuestsController],
        providers: [GuestsService],
      })
      .overrideProvider(GuestsService)
      .useValue(mockGuestsService)
      .compile();

      guestController = moduleRef.get<GuestsController>(GuestsController);
  });  

  it('should be defined', () => {
    expect(guestController).toBeDefined();
  });

  //test create guest
  it('should create a guest', () => {
    const dto = {
      name: 'testing',
      lastname: 'testing',
      username: 'testing',
      email: 'test@udea.edu.co',
      password: 'testing',
      organization: 'udea'
    };
    expect(guestController.create(dto)).toEqual({
      id :  '2334',
      name: dto.name,
      lastname: dto.lastname,
      username: dto.username,
      email: dto.email,
      password: dto.password,
      organization: dto.organization
    })
  });
  //test update guest
  it ('should update a guest', () =>{
    const dto = {
      name: 'testing',
      lastname: 'testing',
      username: 'testing',
      email: 'test@udea.edu.co',
      password: 'testing',
      organization: 'udea'
    };
    expect(guestController.update('2313',dto)).toEqual({
      id: '2313',
      ...dto
    })
    expect(mockGuestsService.update).toHaveBeenCalled();
  })


});