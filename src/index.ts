import { healthcheck } from "healthchecks.io";
export const canaryize = (
  ZB: { on: (event: string, handler: () => void) => void },
  healthcheckConfig: { url: string; minutes: number }
) => {
  const check = healthcheck(healthcheckConfig.url, healthcheckConfig.minutes);
  if (!check) {
    return;
  }
  ZB.on("ready", () => check.start());
  ZB.on("connectionError", () => check.stop());
};
