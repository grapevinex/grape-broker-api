import { Injectable } from '@nestjs/common'
import { catchError, map, Observable } from 'rxjs'
import { AssetDto } from '../../assets/dto/asset.dto'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

export interface GetAssetsOptions {
  assetClass: string
  status: string
}

@Injectable()
export class AlpacaAssetsService {
  constructor(private httpService: HttpService) {}

  getAssets(params: GetAssetsOptions): Observable<AxiosResponse<AssetDto[]>> {
    return this.httpService.get('/v1/assets', { params })
  }

  getAsset(assetId: string): Observable<AxiosResponse<AssetDto>> {
    return this.httpService.get(`/v1/assets/${assetId}`)
  }
}
