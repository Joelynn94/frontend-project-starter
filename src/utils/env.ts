const env = import.meta.env;

export function getEnvString(key: keyof ImportMetaEnv, fallback?: string): string {
  const value = env[key];
  if (typeof value === 'string' && value.length > 0) return value;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing required env var: ${key}`);
}

export function getEnvNumber(key: keyof ImportMetaEnv, fallback?: number): number {
  const value = env[key];
  if (typeof value === 'string' && value.length > 0) {
    const parsed = Number(value);
    if (!Number.isNaN(parsed)) return parsed;
  }
  if (fallback !== undefined) return fallback;
  throw new Error(`Invalid or missing numeric env var: ${key}`);
}

export function getEnvBoolean(key: keyof ImportMetaEnv, fallback = false): boolean {
  const value = env[key];
  if (typeof value !== 'string') return fallback;
  const normalized = value.trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  return fallback;
}

export function isFeatureEnabled(flag: string, fallback = false): boolean {
  const key = `VITE_FEATURE_${flag}` as keyof ImportMetaEnv;
  return getEnvBoolean(key, fallback);
}
