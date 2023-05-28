// Get the current year
const currentYear = new Date().getFullYear();

// Set the new year to the next year
const newYear = new Date(`January 01, ${currentYear + 1} 00:00:00`);

// Update the countdown timer every second
setInterval(() => {
  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference between the current date and the new year
  const timeDifference = newYear - currentDate;

  // Calculate the number of days, hours, minutes, and seconds left
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown timer
  const days = document.getElementById("days");
  days.innerHTML = daysLeft;

  const hours = document.getElementById("hours");
  hours.innerHTML = hoursLeft;

  const minutes = document.getElementById("minutes");
  minutes.innerHTML = minutesLeft;

  const seconds = document.getElementById("seconds");
  seconds.innerHTML = secondsLeft;
}, 1000);
