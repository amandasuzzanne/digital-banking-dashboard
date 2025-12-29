// Simple analytics stub (no external setup needed).
// Later you can swap this to Firebase / GA easily.
export function track(eventName, payload = {}) {
  // In production you'd send this to GA/Firebase
  console.log(`[analytics] ${eventName}`, payload);
}
