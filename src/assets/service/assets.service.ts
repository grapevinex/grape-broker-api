import { Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AssetDto } from '../dto/asset.dto'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

export interface GetAssetsOptions {
  assetClass: string
  status: string
}

@Injectable()
export class AssetsService {
  constructor(private httpService: HttpService) {}

  getAssets(params: GetAssetsOptions) {
    return this.httpService.get('/v1/assets', { params })
  }

  getAsset(assetId: string) {
    return this.httpService.get(`/v1/assets/${assetId}`)
  }
}
