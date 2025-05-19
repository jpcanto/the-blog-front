export async function asyncDelay(
  ms: number = 0,
  verbose = false
): Promise<void> {
  if (ms <= 0) return;

  if (verbose) {
    console.log("Delaying for", ms / 1000, "s");
  }

  await new Promise((resolve) => setTimeout(resolve, ms));
}
