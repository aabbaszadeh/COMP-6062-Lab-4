// ==============================
// 1) Area of a triangle
// Area = base * height / 2
// Log output to 1 decimal
// ==============================
function triangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}
console.log("Triangle Area:");
console.log(triangleArea(3, 4).toFixed(1)); 
console.log(triangleArea(5, 7).toFixed(1));
// ==============================
// 2) Volume of a sphere
// Volume = (4/3) * pi * radius^3
// Log output to 1 decimal
// ==============================
function sphereVolume(radius) {
  const volume = (4 / 3) * Math.PI * (radius ** 3);
  return volume;
}
console.log("\nSphere Volume:");
console.log(sphereVolume(3).toFixed(1)); 
console.log(sphereVolume(5).toFixed(1)); 
// ==============================
// 3) Convert distance to meters
// Params: distance, unit
// Short-circuit if distance === 0 OR unit === "m"
// Use switch/case
// Units: km, m, y, mi
// Log output to 2 decimals
// ==============================
function toMeters(distance, unit) {
  // short circuit
  if (distance === 0 || unit === "m") return distance;
  let meters;
  switch (unit) {
    case "km":
      meters = distance * 1000;
      break;
    case "y":
      meters = distance * 0.9144;
      break;
    case "mi":
      meters = distance * 1609.344;
      break;
    default:
      
      meters = NaN;
  }

  return meters;
}

console.log("\nTo Meters:");
console.log(toMeters(50, "m").toFixed(2));     
console.log(toMeters(100, "y").toFixed(2));    
console.log(toMeters(1, "mi").toFixed(2));     
console.log(toMeters(1.234, "km").toFixed(2)); 

// ==============================
// 4) Convert time string to seconds
// Formats: HH:MM:SS, MM:SS, SS
// Use split(":")
// Log output as integer
// ==============================
function timeToSeconds(time) {
  const parts = time.split(":").map(Number); 
  if (parts.length === 3) {
    const [hh, mm, ss] = parts;
    return (hh * 3600) + (mm * 60) + ss;
  }

  if (parts.length === 2) {
    const [mm, ss] = parts;
    return (mm * 60) + ss;
  }

  
  return parts[0];
}

console.log("\nTime To Seconds:");
console.log(timeToSeconds("02:33:21")); 
console.log(timeToSeconds("00:04:51")); 
console.log(timeToSeconds("04:51"));    
console.log(timeToSeconds("00:13"));    
console.log(timeToSeconds("13"));       
