import { AgentTARSOptions } from '@agent-tars/core';
import cors from 'cors';
import { StorageOptions } from '../storage';

export interface ServerSnapshotOptions {
  /**
   * Whether to enable snapshots for agent sessions
   * @default false
   */
  enable: boolean;

  /**
   * Path to store agent snapshots
   * If not specified, snapshots will be stored in the session's working directory
   */
  snapshotPath: string;
}

/**
 * ServerOptions - Configuration options for the AgentTARSServer
 *
 * Defines all customizable aspects of the server including:
 * - Network configuration (port)
 * - Agent configuration
 * - File system paths
 * - Security settings (CORS)
 * - Storage configuration
 * - Sharing capabilities
 */
export interface ServerOptions {
  port: number;
  config?: AgentTARSOptions;
  workspacePath?: string;
  corsOptions?: cors.CorsOptions;
  isDebug?: boolean;
  storage?: StorageOptions;
  shareProvider?: string;
  staticPath?: string;
  /**
   * Configuration for agent snapshots
   * Controls whether to create and store snapshots of agent executions
   */
  snapshot?: ServerSnapshotOptions;
}

/**
 * Get default CORS options if none are provided
 */
export function getDefaultCorsOptions(): cors.CorsOptions {
  return {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
}

/**
 * Get effective CORS options (user provided or defaults)
 */
export function getEffectiveCorsOptions(options: ServerOptions): cors.CorsOptions {
  return options.corsOptions || getDefaultCorsOptions();
}

export default ServerOptions;
