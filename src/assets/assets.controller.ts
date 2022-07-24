import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AssetsService } from './service/assets.service'
import { AssetDto } from './dto/asset.dto'

@ApiTags('Assets')
@Controller({
  path: 'broker/assets',
  version: '1',
})
export class AssetsController {
  constructor(private AssetsService: AssetsService) {}

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
    return this.AssetsService.getAssets({ status, assetClass })
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
    return this.AssetsService.getAsset(assetId)
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
    return this.AssetsService.getAsset(symbol)
  }
}
