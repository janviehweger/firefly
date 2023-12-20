import { handleError } from '@core/error/handlers'

import {
    getSelectedWallet,
    isActivityHiddenForWalletId,
    removeActivityFromHiddenActivities,
    updateAsyncDataByActivityId,
} from '../stores'
import { Activity } from '../types'

export async function claimActivity(activity: Activity): Promise<void> {
    const wallet = getSelectedWallet()
    try {
        if (isActivityHiddenForWalletId(wallet.id, activity.id)) {
            removeActivityFromHiddenActivities(wallet.id, activity.id)
            updateAsyncDataByActivityId(wallet.id, activity.id, { isRejected: false })
        }

        updateAsyncDataByActivityId(wallet.id, activity.id, { isClaiming: true })
        const result = await wallet.claimOutputs([activity.outputId])
        const transactionId = result.transactionId
        updateAsyncDataByActivityId(wallet.id, activity.id, { claimingTransactionId: transactionId })
    } catch (err) {
        handleError(err)
        updateAsyncDataByActivityId(wallet.id, activity.id, { isClaiming: false })
    }
}
