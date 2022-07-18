import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { AlpacaAccountsService } from '../alpaca/service/alpaca.accounts.service'
import { AssetDto } from './dto/asset.dto'
import { Observable } from 'rxjs'

@ApiTags('Assets')
@Controller({
  path: 'assets',
  version: '1',
})
export class AssetsController {
  constructor(private alpacaAccountService: AlpacaAccountsService) {}

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
  ): Observable<AssetDto[]> {
    return this.alpacaAccountService.getAssets({ status, assetClass })
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
  getByAssetId(@Param('uuid') assetId: string): Observable<AssetDto> {
    return this.alpacaAccountService.getAsset(assetId)
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
    return this.alpacaAccountService.getAsset(symbol)
  }
}
