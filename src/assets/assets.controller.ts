import {
  Controller,
  Get,
  Param,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AlpacaAssetsService } from '../alpaca/service/alpaca.assets.service'
import { AssetDto } from './dto/asset.dto'
import { HttpExceptionFilter } from '../common/filters/http-expeption.filter'
import { HttpResponseInterceptor } from '../common/interceptors/http-response.interceptor'

@ApiTags('Assets')
@Controller({
  path: 'assets',
  version: '1',
})
@UseFilters(HttpExceptionFilter)
@UseInterceptors(HttpResponseInterceptor)
export class AssetsController {
  constructor(private alpacaAssetsService: AlpacaAssetsService) {}

  @ApiResponse({
    status: 200,
    type: [AssetDto],
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Default to "all"',
    example: 'active',
  })
  @ApiQuery({
    name: 'asset_class',
    required: false,
  })
  @Get()
  getAll(
    @Query('status') status = 'all',
    @Query('asset_class') assetClass?: string,
  ) {
    return this.alpacaAssetsService.getAssets({ status, assetClass })
  }

  @ApiResponse({
    status: 200,
    type: AssetDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Asset not found',
  })
  @Get(':uuid')
  getByAssetId(@Param('uuid') assetId: string) {
    return this.alpacaAssetsService.getAsset(assetId)
  }

  @ApiResponse({
    status: 200,
    type: AssetDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Asset not found',
  })
  @Get(':symbol')
  getBySymbol(@Param('symbol') symbol: string) {
    return this.alpacaAssetsService.getAsset(symbol)
  }
}
