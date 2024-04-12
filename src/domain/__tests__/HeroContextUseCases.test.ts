import { dynamicBlurDataUrl } from '@/utils';
import { getHeroDetailService, getHeroListService } from '../services';
import { DomainApp } from '../services/domain';
import { mockGetHeroDetailServiceResponse, mockGetListServiceResponse } from './fixtures';

// Mocks para las dependencias
jest.mock('../services/domain', () => ({
  DomainApp: {
    getHeroListUseCase: {
      execute: jest.fn().mockResolvedValue({ items: [{ id: 1, name: 'Superman', image: 'superman.jpg' }], count: 1 }),
    },
    getHeroDetailUseCase: {
      execute: jest.fn().mockResolvedValue({ id: 1, name: 'Superman', image: 'superman.jpg' }),
    },
    getComicListUseCase: {
      execute: jest.fn().mockResolvedValue({
        items: [
          { id: 1, title: 'Comic 1', image: 'comic1.jpg' },
          { id: 2, title: 'Comic 2', image: 'comic2.jpg' },
        ],
      }),
    },
  },
}));

jest.mock('@/utils', () => ({
  dynamicBlurDataUrl: jest.fn().mockResolvedValue('blurred_image_url'),
}));

describe('getHeroListService', () => {
  it('returns list of heroes with blurred images', async () => {
    // Ejecutamos la función
    const result = await getHeroListService();

    // Verificamos que la función execute de getHeroListUseCase haya sido llamada
    expect(DomainApp.getHeroListUseCase.execute).toHaveBeenCalledWith({ search: '' });

    // Verificamos que el resultado tenga la estructura esperada
    expect(result).toEqual(mockGetListServiceResponse);

    // Verificamos que la función dynamicBlurDataUrl haya sido llamada con la imagen correcta
    expect(dynamicBlurDataUrl).toHaveBeenCalledWith('superman.jpg');
  });
});

describe('getHeroDetailService', () => {
  it('returns hero detail with blurred image and comics with blurred images', async () => {
    const result = await getHeroDetailService({ id: 1 });

    expect(result.hero).toEqual(mockGetHeroDetailServiceResponse.hero);

    expect(result.comics).toEqual(mockGetHeroDetailServiceResponse.comics);

    // Verificar que las funciones de DomainApp fueron llamadas con los parámetros correctos
    expect(DomainApp.getHeroDetailUseCase.execute).toHaveBeenCalledWith({ id: 1 });
    expect(DomainApp.getComicListUseCase.execute).toHaveBeenCalledWith({ id: 1 });

    // Verificar que las funciones de dynamicBlurDataUrl fueron llamadas con las imágenes correctas
    expect(dynamicBlurDataUrl).toHaveBeenCalledWith('superman.jpg');
    expect(dynamicBlurDataUrl).toHaveBeenCalledWith('comic1.jpg');
    expect(dynamicBlurDataUrl).toHaveBeenCalledWith('comic2.jpg');
  });
});
