import { FeatureType, MetadataFeature, NftOutput } from '@iota/sdk/out/types'
import { DEFAULT_NFT_FEATURE_ENTRY_KEY } from '@core/nfts'

export function getMetadataFromNftOutput(output: NftOutput): string {
    const metadata = output.immutableFeatures?.find(
        (feature) => feature.type === FeatureType.Metadata
    ) as MetadataFeature
    // TODO: update this to return all entries, linked issue https://github.com/iotaledger/firefly/issues/8120
    return metadata?.entries?.[DEFAULT_NFT_FEATURE_ENTRY_KEY]
}
