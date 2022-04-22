import { AvailableExchangeRates } from './currency'
import { ChartSelectors } from './chart'
import { NetworkConfig } from './network'

export interface MigratedTransaction {
    address: string
    balance: number
    timestamp: string
    account: number
    tailTransactionHash: string
}

/**
 * Profile
 */
export interface Profile {
    id: string
    name: string
    type: ProfileType
    protocol: ProfileProtocol
    /**
     * Time for most recent stronghold back up
     */
    lastStrongholdBackupTime: Date | null
    /**
     * User settings
     */
    settings: UserSettings
    hiddenAccounts?: string[]
    migratedTransactions?: MigratedTransaction[]
    isDeveloperProfile: boolean
    hasVisitedDashboard?: boolean
    ledgerMigrationCount?: number
    hasVisitedStaking?: boolean
    lastShimmerPeriodVisitedStaking?: number
    lastAssemblyPeriodVisitedStaking?: number
    accounts?: ProfileAccount[]
    lastUsedAccountId?: string
}

/**
 * User Settings
 */
export interface UserSettings {
    currency: AvailableExchangeRates
    networkConfig: NetworkConfig
    /** Lock screen timeout in minutes */
    lockScreenTimeout: number
    showHiddenAccounts?: boolean
    chartSelectors: ChartSelectors
    hideNetworkStatistics?: boolean
}

/**
 * Profile types
 */
export enum ProfileType {
    Software = 'Software',
    Ledger = 'Ledger',
    LedgerSimulator = 'LedgerSimulator',
}

/**
 * Profile protocols
 */
export enum ProfileProtocol {
    Iota = 'IOTA',
    Shimmer = 'Shimmer',
}

/**
 * Profile imports
 */
export enum ImportType {
    Seed = 'seed',
    Mnemonic = 'mnemonic',
    File = 'file',
    SeedVault = 'seedvault',
    Stronghold = 'stronghold',
    Ledger = 'ledger',
    TrinityLedger = 'trinityLedger',
    FireflyLedger = 'fireflyLedger',
}
/**
 * Profile account settings
 */
export interface ProfileAccount {
    id: string
    color: string
}
