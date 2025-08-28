// Site-wide constants for consistent metadata and configuration
export const SITE_NAME = "Node Sentinel";
export const SITE_URL = "https://node-sentinel.xyz";

// Core description components for easy maintenance
const CORE_DESCRIPTIONS = {
  // Main product description
  PRODUCT:
    "A tool that helps you keep your nodes running efficiently with real-time insights and alerts.",

  // Key features
  FEATURES: {
    MONITORING: "real-time monitoring",
    ALERTS: "customizable notifications",
    PERFORMANCE: "detailed performance stats",
    HEALTH: "validator health tracking",
    REWARDS: "maximize staking rewards",
  },

  // Supported chains
  CHAINS: {
    ETHEREUM: "Ethereum",
    GNOSIS: "Gnosis Chain",
  },

  // Action verbs
  ACTIONS: {
    MONITOR: "Monitor",
    TRACK: "Track",
    RECEIVE: "Receive",
    DISCOVER: "Discover",
    FIND: "Find",
  },
} as const;

// Description builder function for consistent formatting
const buildDescription = (components: string[]): string => {
  return components.join(". ");
};

// Main page descriptions (full length)
export const SITE_DESCRIPTION = buildDescription([
  CORE_DESCRIPTIONS.PRODUCT,
  `It provides ${CORE_DESCRIPTIONS.FEATURES.MONITORING}, ${CORE_DESCRIPTIONS.FEATURES.ALERTS}, and ${CORE_DESCRIPTIONS.FEATURES.PERFORMANCE}`,
  `Helping node operators ${CORE_DESCRIPTIONS.FEATURES.HEALTH} and ${CORE_DESCRIPTIONS.FEATURES.REWARDS}`,
]);

export const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const ETHEREUM_MONITORING_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.ACTIONS.MONITOR} your ${CORE_DESCRIPTIONS.CHAINS.ETHEREUM} validators in real-time with Node Sentinel`,
  `${CORE_DESCRIPTIONS.ACTIONS.TRACK} performance, missed attestations, and ${CORE_DESCRIPTIONS.ACTIONS.RECEIVE} instant alerts for optimal validator health`,
]);

export const GNOSIS_MONITORING_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.ACTIONS.MONITOR} your ${CORE_DESCRIPTIONS.CHAINS.GNOSIS} validators with Node Sentinel`,
  `${CORE_DESCRIPTIONS.ACTIONS.TRACK} performance, missed attestations, and ${CORE_DESCRIPTIONS.ACTIONS.RECEIVE} instant alerts for optimal validator health on ${CORE_DESCRIPTIONS.CHAINS.GNOSIS}`,
]);

export const FEATURES_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.ACTIONS.DISCOVER} Node Sentinel's powerful features for blockchain validator monitoring`,
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING}, ${CORE_DESCRIPTIONS.FEATURES.ALERTS}, multi-chain support, and advanced analytics`,
]);

export const FAQ_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.ACTIONS.FIND} answers to common questions about Node Sentinel's blockchain validator monitoring platform`,
  `Learn about features, setup, and best practices`,
]);

// Open Graph descriptions (shorter, optimized for social media)
export const HOME_OG_DESCRIPTION = buildDescription([
  `Monitor and optimize your blockchain validators with ease`,
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING}, ${CORE_DESCRIPTIONS.FEATURES.ALERTS}, and multi-chain support for ${CORE_DESCRIPTIONS.CHAINS.ETHEREUM} and ${CORE_DESCRIPTIONS.CHAINS.GNOSIS}`,
]);

export const ETHEREUM_OG_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING} and alerts for ${CORE_DESCRIPTIONS.CHAINS.ETHEREUM} validators`,
  `${CORE_DESCRIPTIONS.ACTIONS.TRACK} performance and ${CORE_DESCRIPTIONS.FEATURES.REWARDS}`,
]);

export const GNOSIS_OG_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING} and alerts for ${CORE_DESCRIPTIONS.CHAINS.GNOSIS} validators`,
  `${CORE_DESCRIPTIONS.ACTIONS.TRACK} performance and ${CORE_DESCRIPTIONS.FEATURES.REWARDS} on ${CORE_DESCRIPTIONS.CHAINS.XDAI}`,
]);

export const FEATURES_OG_DESCRIPTION = buildDescription([
  `Powerful features for blockchain validator monitoring`,
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING}, ${CORE_DESCRIPTIONS.FEATURES.ALERTS}, and multi-chain support`,
]);

export const FAQ_OG_DESCRIPTION = buildDescription([
  `Common questions and answers about Node Sentinel's blockchain validator monitoring platform`,
]);

// Twitter descriptions (even shorter, optimized for Twitter)
export const HOME_TWITTER_DESCRIPTION = buildDescription([
  `Monitor and optimize your blockchain validators with ease`,
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING} and ${CORE_DESCRIPTIONS.FEATURES.ALERTS}`,
]);

export const ETHEREUM_TWITTER_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING} and alerts for ${CORE_DESCRIPTIONS.CHAINS.ETHEREUM} validators`,
]);

export const GNOSIS_TWITTER_DESCRIPTION = buildDescription([
  `${CORE_DESCRIPTIONS.FEATURES.MONITORING} and alerts for ${CORE_DESCRIPTIONS.CHAINS.GNOSIS} validators`,
]);

export const FEATURES_TWITTER_DESCRIPTION = buildDescription([
  `Powerful features for blockchain validator monitoring`,
]);

export const FAQ_TWITTER_DESCRIPTION = buildDescription([
  `Common questions about Node Sentinel`,
]);

// Keywords for different pages
export const HOME_KEYWORDS = [
  "Node Sentinel",
  "Beacon Chain",
  "beacon validators",
  "Validator Monitoring",
  "Ethereum",
  "Gnosis",
  "Blockchain",
  "Validator Management",
  "staking monitoring",
  "validator alerts",
].join(", ");

export const ETHEREUM_KEYWORDS = [
  "Ethereum validator monitoring",
  "ETH staking",
  "beacon chain monitoring",
  "validator alerts",
  "staking rewards",
].join(", ");

export const GNOSIS_KEYWORDS = [
  "Gnosis Chain validator monitoring",
  "Gnosis beacon chain",
  "validator alerts",
  "staking rewards",
].join(", ");

export const FEATURES_KEYWORDS = [
  "validator monitoring features",
  "blockchain monitoring tools",
  "real-time alerts",
  "performance analytics",
  "multi-chain support",
].join(", ");

export const FAQ_KEYWORDS = [
  "Node Sentinel FAQ",
  "validator monitoring questions",
  "blockchain monitoring help",
  "staking monitoring support",
].join(", ");
