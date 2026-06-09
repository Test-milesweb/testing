function printTimes() {
  const now = new Date();

  // India Time (IST)
  const indiaTime = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(now);

  // USA Time (New York - Eastern Time)
  const usaTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(now);

  console.log("🇮🇳 India Time (IST):", indiaTime);
  console.log("🇺🇸 USA Time (New York):", usaTime);
}

printTimes();
