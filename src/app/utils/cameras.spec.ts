import { describe } from "vitest";
import { isCompatibleSoftwareCamera } from "./cameras";

describe('camera tests', () => {
  const data = [
    {
      "name": "Camera A",
      "minDistance": 1,
      "maxDistance": 10,
      "minLightLevel": 100,
      "maxLightLevel": 200
    },
    {
      "name": "Camera B",
      "minDistance": 5,
      "maxDistance": 20,
      "minLightLevel": 150,
      "maxLightLevel": 300
    },
    {
      "name": "Camera C",
      "minDistance": 10,
      "maxDistance": 30,
      "minLightLevel": 200,
      "maxLightLevel": 400
    }
  ];

  it('should find a match', () => {
    const camera = {
      "minDistance": 20,
      "maxDistance": 25,
      "minLightLevel": 250,
      "maxLightLevel": 300
    };

    const result = isCompatibleSoftwareCamera(camera, data);

    expect(result).toBeTruthy();
  });
});