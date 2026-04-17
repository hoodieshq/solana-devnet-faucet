/**
 * Master global types for the website/app
 */

type Option<T> = T | null;

type SimpleComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

type ImageSize = {
  width: number;
  height: number;
};

/**
 * Define simple type definitions of the env variables
 */
declare namespace NodeJS {
  export interface ProcessEnv {
    /**
     * General variables and settings
     */
    RPC_URL_DEVNET: string;
    RPC_URL_TESTNET: string;
    FAUCET_KEYPAIR: string;

    POSTGRES_STRING: string;
    CLOUDFLARE_SECRET: string;
    IP_ALLOW_LIST: string;

    /**
     * Auth related variables
     */

    // GITHUB_ID: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    // GITHUB_ACCESS_TOKEN: string;

    // TWITTER_CLIENT_ID: string;
    // TWITTER_CLIENT_SECRET: string;
  }
}
