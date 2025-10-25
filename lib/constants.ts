// Site-wide constants for consistent metadata and configuration
export const SITE_NAME = "Node Sentinel";
export const SITE_URL = "https://node-sentinel.xyz";

// Description builder function for consistent formatting
const buildDescription = (components: string[]): string => {
  return components.join(". ");
};

// Main page descriptions (full length)
export const SITE_DESCRIPTION = "Monitor your Ethereum and Gnosis validators with NodeSentinel. Get real-time performance tracking, alerts for downtime, and rewards analytics to maximise your staking income.";

export const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const ETHEREUM_MONITORING_DESCRIPTION = buildDescription([
  "Monitor your Ethereum validators in real-time with Node Sentinel",
  "Track performance, missed attestations, and Receive instant alerts for optimal validator health",
]);

export const GNOSIS_MONITORING_DESCRIPTION = buildDescription([
  "Monitor your Gnosis Chain validators with Node Sentinel",
  "Track performance, missed attestations, and Receive instant alerts for optimal validator health on Gnosis Chain",
]);

export const FEATURES_DESCRIPTION = buildDescription([
  "Discover Node Sentinel's powerful features for blockchain validator monitoring",
  "real-time monitoring, customizable notifications, multi-chain support, and advanced analytics",
]);

export const FAQ_DESCRIPTION = buildDescription([
  "Find answers to common questions about Node Sentinel's blockchain validator monitoring platform",
  "Learn about features, setup, and best practices",
]);

// Open Graph descriptions (shorter, optimized for social media)
export const HOME_OG_DESCRIPTION = "Monitor your Ethereum and Gnosis validators with NodeSentinel. Real-time performance tracking, alerts for downtime, and rewards analytics to maximise your staking income.";

export const ETHEREUM_OG_DESCRIPTION = buildDescription([
  "real-time monitoring and alerts for Ethereum validators",
  "Track performance and maximize staking rewards",
]);

export const GNOSIS_OG_DESCRIPTION = buildDescription([
  "real-time monitoring and alerts for Gnosis Chain validators",
  "Track performance and maximize staking rewards on Gnosis Chain",
]);

export const FEATURES_OG_DESCRIPTION = buildDescription([
  "Powerful features for blockchain validator monitoring",
  "real-time monitoring, customizable notifications, and multi-chain support",
]);

export const FAQ_OG_DESCRIPTION = buildDescription([
  "Common questions and answers about Node Sentinel's blockchain validator monitoring platform",
]);

// Twitter descriptions (even shorter, optimized for Twitter)
export const HOME_TWITTER_DESCRIPTION = "Monitor your Ethereum and Gnosis validators with NodeSentinel. Real-time performance tracking, alerts for downtime, and rewards analytics.";

export const ETHEREUM_TWITTER_DESCRIPTION = buildDescription([
  "real-time monitoring and alerts for Ethereum validators",
]);

export const GNOSIS_TWITTER_DESCRIPTION = buildDescription([
  "real-time monitoring and alerts for Gnosis Chain validators",
]);

export const FEATURES_TWITTER_DESCRIPTION = buildDescription([
  "Powerful features for blockchain validator monitoring",
]);

export const FAQ_TWITTER_DESCRIPTION = buildDescription([
  "Common questions about Node Sentinel",
]);

// Keywords for different pages
export const HOME_KEYWORDS = [
  "Node Sentinel",
  "Ethereum validator monitoring",
  "Gnosis validator monitoring",
  "beacon chain monitoring",
  "validator uptime",
  "staking rewards",
  "validator alerts",
  "real-time monitoring",
  "validator performance",
  "staking monitoring",
  "blockchain validators",
  "validator management",
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
