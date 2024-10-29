/**
 * Hardware Camera Specs
 */
interface HardwareCamera {
  minDistance: number;
  maxDistance: number;
  minLightLevel: number;
  maxLightLevel: number;
}

/**
 * Software Camera Specs
 */
interface SoftwareCamera {
  minDistance: number;
  maxDistance: number;
  minLightLevel: number;
  maxLightLevel: number;
}

export function isCompatibleSoftwareCamera(softwareCamera: SoftwareCamera, hardwareCameras: HardwareCamera[]): boolean {
  // For each range of the software camera (distance and light level),
  // we need at least one hardware camera that can cover it.
  const canCoverDistance = hardwareCameras.some(
    (camera) =>
      camera.minDistance <= softwareCamera.minDistance &&
      camera.maxDistance >= softwareCamera.maxDistance
  );

  const canCoverLightLevel = hardwareCameras.some(
    (camera) =>
      camera.minLightLevel <= softwareCamera.minLightLevel &&
      camera.maxLightLevel >= softwareCamera.maxLightLevel
  );

  return canCoverDistance && canCoverLightLevel;
}
