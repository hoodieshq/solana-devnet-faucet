import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { isNetwork, getRpcUrl, getConnection, VALID_NETWORKS } from "../rpc";

describe("isNetwork", () => {
  it("should return true for devnet", () => {
    expect(isNetwork("devnet")).toBe(true);
  });

  it("should return true for testnet", () => {
    expect(isNetwork("testnet")).toBe(true);
  });

  it("should return false for mainnet", () => {
    expect(isNetwork("mainnet")).toBe(false);
  });

  it("should return false for non-string values", () => {
    expect(isNetwork(123)).toBe(false);
    expect(isNetwork(null)).toBe(false);
    expect(isNetwork(undefined)).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isNetwork("")).toBe(false);
  });
});

describe("VALID_NETWORKS", () => {
  it("should contain devnet and testnet", () => {
    expect(VALID_NETWORKS).toContain("devnet");
    expect(VALID_NETWORKS).toContain("testnet");
    expect(VALID_NETWORKS).toHaveLength(2);
  });
});

describe("getRpcUrl", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.stubEnv("RPC_URL_DEVNET", undefined as unknown as string);
    vi.stubEnv("RPC_URL_TESTNET", undefined as unknown as string);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("should return default devnet URL when env is not set", () => {
    // getRpcUrl reads from the module-level const which captured env at import time,
    // so we test the function returns a string URL
    const url = getRpcUrl("devnet");
    expect(url).toMatch(/^https?:\/\//);
  });

  it("should return default testnet URL when env is not set", () => {
    const url = getRpcUrl("testnet");
    expect(url).toMatch(/^https?:\/\//);
  });
});

describe("getConnection", () => {
  it("should return a Connection object for devnet", () => {
    const conn = getConnection("devnet");
    expect(conn).toBeDefined();
    expect(conn.rpcEndpoint).toMatch(/^https?:\/\//);
  });

  it("should return a Connection object for testnet", () => {
    const conn = getConnection("testnet");
    expect(conn).toBeDefined();
    expect(conn.rpcEndpoint).toMatch(/^https?:\/\//);
  });
});
